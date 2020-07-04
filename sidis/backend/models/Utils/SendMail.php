<?php

namespace PhalconRest\Models\Utils;
use \SendGrid\Mail\Mail as Mail;
use \SendGrid as SendGrid;

class SendMail {

     public static function sendVerificationCode($option) {
 	
	$user = $option['user'];
	$di = $option['di'];
	$code = $option['code'];

        $email = new Mail();
	$from_email = $di->get('appconfig')->customer->from_email;
	$from_name = $di->get('appconfig')->customer->from_name;
	$key = $di->get('appconfig')->customer->sendgrid_key;

        $email->setFrom($from_email, $from_name);
        $email->setSubject('verification code - maegam login');
        $email->addTo($user->email, $user->name);
        $email->addContent('text/html', "<h3> Hi, your verification code is $code </h3>");
        $sendgrid = new SendGrid($key);
        $response = $sendgrid->send($email);
	return $response;
    }

    public static function sendForgetPassword($option) {
 	
	$user = $option['user'];
	$di = $option['di'];
	$code = $option['code'];
	$password = $option['password'];

$content = <<<EOD
<h5> maegam reset password instructions </h5>
<ul><li> please use $code to active your login </li>
<li> please use password '$password' after code is activated.</li>
</ul>
EOD;


        $email = new Mail();
	$from_email = $di->get('appconfig')->customer->from_email;
	$from_name = $di->get('appconfig')->customer->from_name;
	$key = $di->get('appconfig')->customer->sendgrid_key;

        $email->setFrom($from_email, $from_name);
        $email->setSubject('forget password - maegam login');
        $email->addTo($user->email, $user->name);
        $email->addContent('text/html', $content);
        $sendgrid = new SendGrid($key);
        $response = $sendgrid->send($email);
	return $response;
    }
}


