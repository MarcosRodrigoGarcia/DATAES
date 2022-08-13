<?php

// <!-- ------------------------------
// CONTROLADOR PRINCIPAL
// ---------------------------- -->

//INCLUDES

include 'db.php';
include 'SED.php';

session_start();
//VARIABLES
$db = new DB();

$opt = $_POST['opt'];
$UserName;

switch ($opt) {
    case "log":

        $email = $_POST["email"];
        $password = $_POST["password"];
        $passwordE = SED::encryption($password);
        $userlog = $db->loginUser($email, $passwordE);


        if (!$userlog) {
            //No existe ningún usuario para ese email y contrasñea
            header("Location: ../../../index.php ");
            $_SESSION["mensaje"] = "error";
            unset($_SESSION['log']);
            die();
        } else {

            //Rescatamos los valores de la respuesta del servidor
            $userName = $userlog->getUserName();
            $userId = $userlog->getIdUser();
            $userEmail = $userlog->getEmail();
            $administrator = $userlog->getAdministrador();
            if ($administrator != 0) {
                $_SESSION["administrator"] = 1;
            }

            $_SESSION["mensaje"] = "logOk";
            $_SESSION["log"] = 1;
            $_SESSION["i_economia"] = $userlog->getI_economia();
            $_SESSION["i_demografia"] =$userlog->getI_demografia();
            $_SESSION["i_AyG"] = $userlog->getI_AyG();
            $_SESSION["i_turismo"] = $userlog->getI_turismo();
            $_SESSION["i_vivienda"] = $userlog->getI_vivienda();
            header("Location: ../../../index.php ");
            die();
        }
        case "logout":
            $_SESSION["mensaje"] = "logout";
            $_SESSION['log']=0;
            $_SESSION["administrator"] = 0;
            // session_destroy().
            header("Location: ../../../index.php ");
            die();
        
    case "reg":

        //Recatamos las variebles
        $email = $_POST["email"];
        $password = $_POST["password"];
        $userNAme = $_POST["userName"];
        $intereses = array();

        //chequeamos intereses
        if(empty($_POST["economia"])){
            array_push($intereses, 0);
        }else{
            array_push($intereses, 1);
            
        }
        if(empty($_POST["demografia"])){
            array_push($intereses, 0);
        }else{
            array_push($intereses, 1);
            
        }
        if(empty($_POST["AyG"])){
            array_push($intereses, 0);
        }else{
            array_push($intereses, 1);
            
        }
        if(empty($_POST["turismo"])){
            array_push($intereses, 0);
        }else{
            array_push($intereses, 1);
            
        }
        if(empty($_POST["vivienda"])){
            array_push($intereses, 0);
        }else{
            array_push($intereses, 1);
            
        }
   
        print_r($intereses);

        $passwordE = SED::encryption($password);
        // Enviamos a la base de datos
        $userReg = $db->singIn($email, $passwordE, $userNAme, $intereses[0], $intereses[1], $intereses[2], $intereses[3], $intereses[4]);

        if ($userReg){
            $_SESSION["mensaje"] = "regOk";
            header("Location: ../../../index.php ");
            die();
        }
        else{
            $_SESSION["mensaje"] = "regFail";
            header("Location: ../../../index.php ");
            die();
        }
}
