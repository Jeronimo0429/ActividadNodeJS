<?php 

use PHPMailer\PHPMailer\PHPMailer;

require_once "PHPMailer/PHPMailer.php";
require_once "PHPMailer/SMTP.php";
require_once "PHPMailer/Exception.php";
		
		
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

    function conexionBd(){
        $con = mysqli_connect("localhost", "root", "usbw", "arquitectura");
        if (!$con) {
            echo "<br>";
            echo "Error de depuración: " . mysqli_connect_error();
            exit;
        }
        return $con;
    }

    $con = conexionBd();
    
    $log   = $_GET['log']; //$data['log'];
	
	if($log == "1"){
		$valorLog = "El sensor detecto movimiento y se enciende el bombillo.";
	}else{
	    $valorLog = "El sensor no detecto movimiento y se apaga el bombillo.";	
	}

     $query = "INSERT INTO log_sensor (log) VALUES (?)";

    $sentencia= mysqli_prepare($con, $query)or die(mysqli_error($con));
//     /*
//         luego del parametro sentencia va la cadena con el tipo de dato de cada parametro
//     */
     mysqli_stmt_bind_param($sentencia, 's', $valorLog);

     mysqli_stmt_execute($sentencia);

     $insert = mysqli_affected_rows($con); 

     $response = array();
	
	$response["msg"] = $valorLog;
     if($insert < 1){
     $response["estado"] = "FALSE";
     $response["msg"] = "No se pudo crear el log, por favor intente nuevamente";

     }else{
        $mail = new PHPMailer();

        //SMTP Settings
        $mail->isSMTP();
        $mail->Host = "smtp.gmail.com";
        $mail->SMTPAuth = true;
        $mail->Username = "generalwarrior2015@gmail.com";//"proyectoarquitectura911@gmail.com";
        $mail->Password = 'christian2015';//'Prueba2021'; 
        $mail->Port = 465; //587  587  465
        $mail->SMTPSecure = "ssl"; //tls  ssl

        //Email Settings
        $mail->isHTML(true);
        $mail->setFrom("generalwarrior2015@gmail.com", "PROYECTO ARQUITECTURA");
        $mail->addAddress("isrchristian38@gmail.com");
        $mail->Subject = "SENSOR";
        $mail->Body = "SE OBTIENE EL SIGUIENTE RESUMEN: " . $valorLog ;

        if ($mail->send()) {
			$response["estado"] = "TRUE";
            $response["msg"] = "Se creo el log exitosamente";
        } else {
		   $response["estado"] = "FALSE";
           $response["msg"] = "Failed el log";
        }
		
     }

     echo json_encode($response);

?>