<?php
#	$action = $_REQUEST["action"];
#	if($action == "correo") correo();
correo();
?>
<?php
	function correo()
	{
		$name = $_REQUEST["fname"];
		$email = $_REQUEST["femail"];
		$phone = $_REQUEST["fphone"];
		$message = $_REQUEST["fmessage"];
		$message = str_replace("\n.", "\n..", $message);
		$mensaje = "
		<html><head><title>Mensaje</title></head>
		<body>
			<h3><b>Nombre: </b>".$name."<br>
			<b>Email: </b>".$email."<br>
			<b>Numero: </b>".$phone."<br>
			</h3><br>
			Mensaje:<br>".$message."
			</body></html>";
		$asunto = "Contacto WEB - ".$email;
		$cabeceras  = 'MIME-Version: 1.0' . "\r\n";
		$cabeceras .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
		$cabeceras .= 'From: WEBPortafolio <Webportafolio@svega.ml>' . "\r\n";
		$bool = mail("sebastian.vega.saavedra@gmail.com", $asunto, $mensaje,$cabeceras);
		
		if ($bool){
			echo "SUCCESS";
		}else{
			echo "FAILED";
		}
	}
?>