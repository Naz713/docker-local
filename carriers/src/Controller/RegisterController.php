<?php

/**
 * Created by PhpStorm.
 * User: nazarethrangel
 * Date: 10/2/20
 * Time: 1:07 PM
 */


namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;

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
    public function registerAction(Request $request)
    {
        $carrierId = $request->get('carrier_id');
        $carrierName = $request->get('carrier_name');
        $carrierEmail = $request->get('carrier_email');
        $scac = $request->get('scac');
        $providerId = $request->get('provider_id');
        $providerName = $request->get('provider_name');
        $providerEmail = $request->get('provider_email');
        $notes = $request->get('notes');

        $this->get("logger")->debug("
            carrierId : $carrierId
            carrierName : $carrierName
            carrierEmail : $carrierEmail
            scac : $scac
            providerId : $providerId
            providerName : $providerName
            providerEmail : $providerEmail
            notes : $notes ");

        if ( strlen($carrierId)<0 && (strlen($carrierName)<0 || strlen($carrierEmail)<0) )
        {
            return new JsonResponse(array(
                "code" => 400,
                "msg" => "Carrier Required"
            ));
        }

        if ( strlen($providerId)<0 && (strlen($providerName)<0 || strlen($providerEmail)<0) )
        {
            return new JsonResponse(array(
                "code" => 400,
                "msg" => "Provider Required"
            ));
        }

        //TODO insert on db

        //TODO Send email

        return new JsonResponse(array(
            "code" => 200,
        ));
    }
}

