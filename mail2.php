<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';


$siteUrlFull = "http://" . $_SERVER['HTTP_HOST'] . '/' . substr(getcwd(),strlen($_SERVER['DOCUMENT_ROOT']));

$siteUrl = $_SERVER['HTTP_HOST'] . '/' . substr(getcwd(),strlen($_SERVER['DOCUMENT_ROOT']));

$mailTo = trim($_REQUEST['email']);


$subject = "Email from " . $siteUrl;

$message = "Hello ! <br> You have receieved this email because you have subscribed on " . $siteUrlFull . "<br>";
$message .= "Here is the data that you have entered :<br>";
$message .= "Nume/Prenume: " . trim($_POST['name']) . "<br/>";
$message .= "Telefon : " . trim($_POST['phone']) . "<br/>";
$message .= "E-mail : " . trim($_POST['email']) . "<br/>";
$message .= "Online / Live : " . "Live" . "<br/>";

$message .= "<br> Thank you for subscribing !";

$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
try {
    //Server settings
    $mail->SMTPDebug = 2;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.gmail.com;smtp.gmail.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'maxdsr.win@gmail.com';                 // SMTP username
    $mail->Password = 'testsapp321';                           // SMTP password
    $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 465;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('maxdsr.win@gmail.com', 'maxdsr.win');
    $mail->addAddress($mailTo);     // Add a recipient

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = $subject;
    $mail->Body    = $message;

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
}

header('Location: succes.html');

// echo '<META HTTP-EQUIV="Refresh" Content="0; URL=http://curs.double-case.md/succes.html">';