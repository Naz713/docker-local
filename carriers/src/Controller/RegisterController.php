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

}

