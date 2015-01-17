
<?php
// check if fields passed are empty
$name = $_POST['name'];
$email_address = $_POST['email'];
$phone = $_POST['phone'];
$address = $_POST['address'];
$comments = $_POST['comments'];
$products = $_POST['products'];
$heard = $_POST['heard'];
$captcha = $_POST['recaptcha_response_field'];


// create email body and send it    
$to = 'milmontford@gmail.com'; // put your email
$email_subject = "Quote request from:  $name";
$email_body = "You have received an new quote request. \n\n".
                "Name: $name\n".
                "Email: $email_address\n".
                "Phone: $phone\n".
                "Address: $address\n".
                "Comments: $comments\n".
                "Interested in: $products\n".
                "Heard about you from: $heard\n";
$headers = "From: $email_address\n";
$headers .= "Reply-To: $email_address"; 

$response=file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=6Le7sfgSAAAAAGCAIs4m0jxr0NeI32nXc-k3QVyt&response=".$captcha."&remoteip=".$_SERVER['REMOTE_ADDR']);

//THIS IS NOT WORKING :( i just need to verify that the captcha response was valid. If yes send email. If no return error.
if($response.success==false)
{
  echo '<h2>You are spammer ! Get the @$%K out</h2>';
}else
{
  echo '<h2>Thanks for posting comment.</h2>';
}

mail($to,$email_subject,$email_body,$headers);
return false;            
?>