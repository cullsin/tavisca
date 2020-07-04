<?php

use Phalcon\Mvc\Micro,
    Phalcon\Config\Adapter\Ini as ConfigIni;

$config = new ConfigIni('../conf/config.ini');
$aconfig = new ConfigIni('../conf/app.ini');

require 'config/loader.php';
require 'config/services.php';
$app = new Phalcon\Mvc\Micro();
$app->setDI($di);
require 'config/init.php';

$debug = new \Phalcon\Debug();
$debug->listen();

$app->handle();

