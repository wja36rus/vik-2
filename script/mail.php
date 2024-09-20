<?php

$name = $_POST["name"];
$email = $_POST["email"];
$text = $_POST["text"];

$to  = "<info@npk-vik.ru>"; 

$subject = "Новое письмо с сайта НПК VIK"; 

$message = "
<b>Имя из формы </b><span>$name</span> </br>
<b>E-mail из формы </b><span>$email</span> </br>
<b>Текст из формы </b><span>$text</span>";


$headers  = "Content-type: text/html; charset=windows-1251 \r\n"; 
$headers .= "From: НПК VIK\r\n"; 

if(mail($to, $subject, $message, $headers)) {
    echo json_encode(["status" => "success"]);
} else {
    echo json_encode(["status" => "error"]);
}