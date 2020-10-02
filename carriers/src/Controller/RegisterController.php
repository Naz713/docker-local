<?php

/**
 * Created by PhpStorm.
 * User: nazarethrangel
 * Date: 10/2/20
 * Time: 1:07 PM
 */


namespace App\Controller;

use Psr\Log\LoggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\ORM\EntityManagerInterface;


class RegisterController extends AbstractController
{
    /**
     * @Route("/register", name="register")
     */
    public function index()
    {
        return $this->render('register/index.html.twig', [
            'controller_name' => 'RegisterController',
        ]);
    }

    /**
     * @Route("/saveRegister", name="save_register_action")
     * @param Request $request
     * @return Response
     * @throws \Exception
     */
    public function registerAction(Request $request, LoggerInterface $logger)
    {
        $carrierId = $request->get('carrier_id');
        $carrierName = $request->get('carrier_name');
        $carrierEmail = $request->get('carrier_email');
        $scac = $request->get('scac');
        $providerId = $request->get('provider_id');
        $providerName = $request->get('provider_name');
        $providerEmail = $request->get('provider_email');
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

        if ( strlen($carrierId)<=0 && (strlen($carrierName)<=0 || strlen($carrierEmail)<=0) )
        {
            return new JsonResponse(array(
                "code" => 400,
                "msg" => "Carrier Required"
            ));
        }

        if ( strlen($providerId)<=0 && (strlen($providerName)<=0 || strlen($providerEmail)<=0) )
        {
            return new JsonResponse(array(
                "code" => 400,
                "msg" => "Provider Required"
            ));
        }

        if (strlen($providerId)<=0){
            $providerId = null;
        }

        if (strlen($carrierId)<=0){
            $carrierId = null;
        }

        $cn = $this->getDoctrine()->getManager()->getConnection();

        $stmt = "
        INSERT INTO shipment_register 
          (carrier_id, carrier_name, carrier_email, SCAC, provider_id, provider_name, provider_email, notes)
        VALUES
          (:carrier_id, :carrier_name, :carrier_email, :scac, :provider_id, :provider_name, :provider_email, :notes)
        ";
        $parameters = array(
            'carrier_id' => $carrierId,
            'carrier_name' => $carrierName,
            'carrier_email' => $carrierEmail,
            'scac' => $scac,
            'provider_id' => $providerId,
            'provider_name' => $providerName,
            'provider_email' => $providerEmail,
            'notes' => $notes,
        );

        $keys = array_keys($parameters);

        $pstmt = $cn->prepare($stmt);
        foreach($keys as $key) {
            $pstmt->bindParam(":".$key, $parameters[$key]);
        }
        $pstmt->execute();


        //TODO Send email

        return new JsonResponse(array(
            "code" => 200,
        ));
    }
}

