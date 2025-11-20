<?PHP
	header('Content-Type: application/json');
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Headers: *");

	function conexionBd(){
	    $con = mysqli_connect("localhost", "root", "usbw", "arquitectura");

	    mysqli_set_charset($con, "utf8");
	    if (!$con) {
	    	echo "<br>";
	        echo "Error de depuración: " . mysqli_connect_error();
	        exit;
	    }
	    return $con;
	}

	$con = conexionBd();

    $consulta = "SELECT * FROM log_sensor ORDER BY fecha DESC";

    $resultado = mysqli_query($con, $consulta) or die("Error : ".mysqli_error($con));
	while($reg = mysqli_fetch_assoc($resultado)){
		$data[] = $reg;
	}
	
	echo json_encode($data, JSON_UNESCAPED_UNICODE);
?>

