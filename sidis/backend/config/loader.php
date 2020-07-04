<?php

use Phalcon\Loader;
$loader = new Loader();
$loader->registerNamespaces(array(
	'PhalconRest\Models' => __DIR__ . '/../models/',
	'PhalconRest\Controllers' => __DIR__ . '/../controllers/',
	'PhalconRest\Exceptions' => __DIR__ . '/../exceptions/',
	'PhalconRest\Responses' => __DIR__ . '/../responses/',
        'Phalcon' => __DIR__.'/../library/Phalcon'
))->register();

