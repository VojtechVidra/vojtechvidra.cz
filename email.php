<?	
	session_start();
	$name=$_POST['name'];
    $email=$_POST['email'];
    $message=$_POST['message'];
    $email = $name.'<'.$email.'>';
    if (($name=="")||($email=="")||($message=="")){
		$_SESSION["return"] = "Všechna pole jsou vyžadována, prosím vyplňte formulář znovu.";
		header("location: http://vojtechvidra.cz#contact");
	}else{		
		$headers = "MIME-Version: 1.0" . "\r\n";
		$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
		$headers .= 'From: '.$email . "\r\n";
		$headers .= 'Return-path: $email' . "\r\n";
	    $from="Content-Type: text/html; charset=UTF-8; From: $name<$email>\r\nReturn-path: $email";
        $subject="Osobní stránky";
		mail("vojtechvidra@vojtechvidra.cz", $subject, $message, $headers);
		$_SESSION["return"] = "Email odeslán!";
		//echo $name." ".$email." ".$message;
		header("location: http://vojtechvidra.cz#contact");
    }
?>