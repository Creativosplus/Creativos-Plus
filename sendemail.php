<?php 
if (isset($_POST['name'])){
	$nombres=htmlentities($_POST['name']);
	$telefono=htmlentities($_POST['phone']);
	$email=htmlentities($_POST['email']);
	$servicio=htmlentities($_POST['service']);
	$mensaje=htmlentities($_POST['message']);
	

	/*SIGUE RECOLECTANDO DATOS PARA FUNCION MAIL*/
	$message = '';
	$message .= '<p>Hola, ha sido registrada una nueva cita en el sitio web, según el detalle siguiente:</p> ';
	$message .= '<p>Persona: '.$nombres.'</p> ';
	$message .= '<p>Teléfono: '.$telefono.'</p> ';
	$message .= '<p>Email: '.$email.'</p> ';
	$message .= '<p>Servicio: '.$servicio.'</p> ';
	$message .= '<p>Mensaje : '.$mensaje.'</p> ';
	


	
	$header = "MIME-Version: 1.0\r\n";
	$header .= "Content-type: text/html; charset=UTF-8\r\n";
	$header .= "From: ". $nombres . " <" . $email. ">\r\n";
	$email='contacto@creativosplus.com';//Ingresa tu dirección de correo
	
	$subject="Nueva cita en linea de: ".$nombres;			
	if (mail($email,$subject,$message,$header)){
		?>
		<div class='col-md-12' style="color:white; font-size:20px;" >
			Bien hecho! la cita ha sido realiza correctamente.
		</div>
		<?php
	}	 else {
		?>
		<div class='col-md-12' style="color:red">
			Error no se pudo realizar la cita.
		</div>	
		<?php
	}
	/*FINALIZA RECOLECTANDO DATOS PARA FUNCION MAIL*/
	

	?>

	<?php
}

?>