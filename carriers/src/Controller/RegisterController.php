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
use Psr\Log\LoggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;


class RegisterController extends AbstractController
{
    /**
     * @Route("/protrans/{local}", name="register")
     * @param Request $request
     * @param $local
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function indexMex(Request $request, $local)
    {
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
}

