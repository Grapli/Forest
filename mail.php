<?php

$name = $_POST["name"];
$from = $_POST["email"];
$subcject = "Wiadomość z formularza na stronie ForestGroup";
$to = "arekpiotrowicz@gmail.com";
$message = $_POST["msg"];

$txt = "Imię: " . $name . "\r\n" . "Email: " . $from . "\r\n" . "\r\n" . "Treść: " . $message;

$headers = "From: " . $from . "\r\n";
$headers .= "Reply-To: " . $from . "\r\n";

$mail_status = mail($to, $subcject, $txt, $headers);

if($mail_status){
    header("Location: /contact.html?mail_status=sent")
} else {
    header("Location: /contact.html?mail_status=error")
}