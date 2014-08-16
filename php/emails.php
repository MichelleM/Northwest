<?php

require_once('recaptchalib.php');
  $privatekey = "6Le7sfgSAAAAAGCAIs4m0jxr0NeI32nXc-k3QVyt";
  $resp = recaptcha_check_answer ($privatekey,
                                $_SERVER["REMOTE_ADDR"],
                                $_POST["recaptcha_challenge_field"],
                                $_POST["recaptcha_response_field"]);

  if (!$resp->is_valid) {
    // What happens when the CAPTCHA was entered incorrectly
    die ("The reCAPTCHA wasn't entered correctly. Go back and try it again." .
         "(reCAPTCHA said: " . $resp->error . ")");
  } else {$name = $_POST['name'];
	$email_address = $_POST['email'];
	$address = $_POST['address'];
	$phone = $_POST['phone'];
	$comments = $_POST['comments'];
	$heard = $_POST['heard'];
	$products = $_POST['products'];


	// create email body and send it	
	//$to = 'contactus@northwestresidential.com'; // put your email
	$to = 'mlmontford@gmail.com'; // put your email

	$email_subject = "Quote request from:  $name";
	$email_body = "You have received a new quote reques. \n\n".
					  "Name: $name\n
					  Email: $email_address\n
					  Address: $address\n
					  Phone: $phone\n\n
					  Comments: $comments\n\n
					  Products they are interested in: $products\n\n
					  Heard about you via: $heard";
	$headers = "From: no-reply@northwestresidential.ca\n";
	$headers .= "Reply-To: $email_address";	
	mail($to,$email_subject,$email_body,$headers);
	return true;			
  }
</php>



