<?php

/**
 * Created by PhpStorm.
 * User: nazarethrangel
 * Date: 10/2/20
 * Time: 1:07 PM
 */


namespace App\Controller;


use Doctrine\DBAL\Connection;
use Doctrine\ORM\EntityManager;
use Monolog\Logger;
use Monolog\Handler\SwiftMailerHandler;
use Psr\Log\LoggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpClient\HttpClient;



class RegisterController extends AbstractController
{

    /**
     * @Route("/", name="root")
     * @param Request $request
     * @param $local
     * @return \Symfony\Component\HttpFoundation\RedirectResponse
     */
    public function rootAction()
    {
        return $this->redirectToRoute("register", ["local" => "mx"]);
    }

    /**
     * @Route("/protrans/{local}", name="register")
     * @param Request $request
     * @param $local
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function indexMex(Request $request, $local, LoggerInterface $logger)
    {
        $logger->debug("LOCAL.....".$local);
        if(is_null($local) || (strtolower($local) != "mx" && strtolower($local) != "us")) {
            $logger->debug("----------LOCAL REDIRECT......".$local);
            $local = "mx";
            return $this->redirectToRoute("register", ["local" => "mx"]);
        }

        return $this->render(
            'register/index.html.twig', [
                 "local" => $local
        ]);
    }

    /**
     * @Route("/getFf", name="register_get_ff")
     * @param Request $request
     * @param Connection $cn
     * @param LoggerInterface $logger
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function getShipmentFfAction(Request $request, Connection $cn, LoggerInterface $logger)
    {

        $carriers = $cn->fetchAll("
            SELECT 
                id, 
                name, 
                scac
            FROM shipment_ff 
            WHERE disabled = 0
                and scac NOT LIKE '%xxx%'
                and id <> 999 /*TIL*/
            GROUP BY scac
            ORDER BY name
        ", []);

        $providers = $cn->fetchAll("
            SELECT 
                id,
                alias as name
            FROM shipment_provider
            ORDER BY alias
        ", []);
        return $this->json([
            "code" => Response::HTTP_OK,
            "data" => [
                "carriers" => $carriers,
                "providers" => $providers,
            ],
            "error" => false
        ]);
    }

    /**
     * @Route("/saveRegister", name="save_register_action")
     * @param Request $request
     * @return Response
     * @throws \Exception
     */
    public function registerAction(Request $request, LoggerInterface $logger, \Swift_Mailer $mailer)
    {

        $origin = $request->get("origin", "mx");
        $logger->debug("ORIGIN.,...".$origin);
        $carrierId = $request->get('carrier_id');
        $carrierName = $request->get('carrier_name');
        $carrierEmail = $request->get('carrier_email');
        $scac = $request->get('scac');
        $providerId = $request->get('provider_id');
        $providerName = $request->get('provider_name');
        $providerEmail = $request->get('provider_email');
        $origin = $request->get('origin');
        $notes = $request->get('notes');

        $logger->info("
            carrierId : $carrierId
            carrierName : $carrierName
            carrierEmail : $carrierEmail
            scac : $scac
            providerId : $providerId
            providerName : $providerName
            providerEmail : $providerEmail
            notes : $notes ");

        /*
         * Check for carrier sended
         */
        if ( strlen($carrierId)<=0 && (strlen($carrierName)<=0 || strlen($carrierEmail)<=0) )
        {
            return new JsonResponse(array(
                "code" => 400,
                "msg" => "Carrier Required"
            ));
        }

        /*
         * Check for provider sended
         */
        if ( strlen($providerId)<=0 && (strlen($providerName)<=0 || strlen($providerEmail)<=0) )
        {
            return new JsonResponse(array(
                "code" => 400,
                "msg" => "Provider Required"
            ));
        }

        $cn = $this->getDoctrine()->getManager()->getConnection();

        if (strlen($providerId)<=0){
            $providerId = null;

        } elseif (strlen($providerName)<=0){
            $stmt = "SELECT alias FROM shipment_provider WHERE id = $providerId";

            $pstmt = $cn->prepare($stmt, array(\PDO::CURSOR_FWDONLY, \PDO::ATTR_CURSOR));
            $pstmt->execute();
            $providerName = $pstmt->fetchColumn();
        }

        if (strlen($carrierId)<=0){
            $carrierId = null;

        } elseif (strlen($carrierName)<=0){
            $stmt = "SELECT name FROM shipment_ff WHERE id = $carrierId";

            $pstmt = $cn->prepare($stmt, array(\PDO::CURSOR_FWDONLY, \PDO::ATTR_CURSOR));
            $pstmt->execute();
            $carrierName = $pstmt->fetchColumn();
        }

        /*
         * Insert Register
         */


        $stmt = "
        INSERT INTO shipment_register 
          (carrier_id, carrier_name, carrier_email, SCAC, provider_id, provider_name, provider_email, origin, notes, generated)
        VALUES
          (:carrier_id, :carrier_name, :carrier_email, :scac, :provider_id, :provider_name, :provider_email, :origin, :notes, UTC_TIMESTAMP)
        ";
        $parameters = array(
            'carrier_id' => $carrierId,
            'carrier_name' => $carrierName,
            'carrier_email' => $carrierEmail,
            'scac' => $scac,
            'provider_id' => $providerId,
            'provider_name' => $providerName,
            'provider_email' => $providerEmail,
            'origin' => $origin,
            'notes' => $notes,
        );

        $keys = array_keys($parameters);

        /*
         * BEGIN TRANSACTION
         */
        $cn->beginTransaction();

        $pstmt = $cn->prepare($stmt);
        foreach($keys as $key) {
            $pstmt->bindParam(":".$key, $parameters[$key]);
        }
        $pstmt->execute();

        /*
         * GET insertedId
         */

        $stmt = "SELECT LAST_INSERT_ID()";

        $pstmt = $cn->prepare($stmt, array(\PDO::CURSOR_FWDONLY, \PDO::ATTR_CURSOR));
        $pstmt->execute();
        $registerId = $pstmt->fetchColumn();

        /*
         * COMMIT
         */
        $cn->commit();


        /*
         * Send email
         */

        $client = HttpClient::create();

        $response = $client->request('POST',
            "http://til.creacontrol.mx/ws/tracking/registerSendEmail?register_id=$registerId");

        if ($response->getStatusCode() >= 400){
            return new JsonResponse(array(
                "code" => 206,
                "msg" => "Email NO enviado"
            ));
        }
        
        $response = json_decode($response->getContent(), true);
        if ( ((int) $response["code"]) != 200){
            return new JsonResponse(array(
                "code" => 206,
                "msg" => "Email NO enviado"
            ));
        }

        return new JsonResponse(array(
            "code" => 200,
        ));
    }
}

