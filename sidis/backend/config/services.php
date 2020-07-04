<?php

use Phalcon\DI\FactoryDefault as DefaultDI;
use \PhalconRest\Exceptions\HTTPException;
use Phalcon\Mvc\Model\MetaData\Memory;
use Phalcon\Mvc\Url as UrlProvider;
use Phalcon\Db\Adapter\MongoDB\Client as MongoClient;
use Phalcon\Mvc\Collection\Manager as Manager;

/**
 * The DI is our direct injector.  It will store pointers to all of our services
 * and we will insert it into all of our controllers.
 * @var DefaultDI
 */
$di = new DefaultDI();


/**
 * Return array of the Collections, which define a group of routes, from
 * routes/collections.  These will be mounted into the app itself later.
 */
$di->set('collections', function(){
	return include('./routes/routeLoader.php');
});

$di->set('collectionManager', function(){
    return new Phalcon\Mvc\Collection\Manager();
}, true);


$di->setShared('config', $config); 
$di->setShared('appconfig', $aconfig);

$di->setShared('modelsCache', function() use($config) {

 $frontCache = new Phalcon\Cache\Frontend\Data(array( "lifetime" => $config->memcache->lifetime ));
 $cache = new Phalcon\Cache\Backend\Memcache($frontCache, array(
  'host' => $config->memcache->host,
  'port' => $config->memcache->port,
  'persistent' => $config->memcache->persistent ));

 if($config->memcache->is_enable == false ) $cache->flush();
	
 return $cache;

});

/**
 * $di's setShared method provides a singleton instance.
 * If the second parameter is a function, then the service is lazy-loaded
 * on its first instantiation.
 */

$di->setShared('metaData', function() use($config) {
	return new Phalcon\Mvc\Model\MetaData\Memory();
});

/**
 * The URL component is used to generate all kind of urls in the application
 */
$di->set('url', function() use ($config){
        $url = new UrlProvider();
        $url->setBaseUri($config->application->baseUri);
        return $url;
});

// Simple database connection to localhost
$di->set('mongo', function() use ($config) {
 $mongo = new MongoClient("mongodb://" . 
		$config->dbclient->username . ":" . 
		$config->dbclient->password . "@" . 
		$config->dbclient->host."/". 
		$config->dbclient->dbname."?authSource=admin");
    return $mongo->selectDatabase($config->dbclient->dbname);
}, true);

#$di->set('mongo', function() use ($config) {
#$mongo = new MongoClient(); 
#return $mongo->selectDatabase($config->dbclient->dbname);
#}, true);

// Collection Manager is required for MongoDB
$di->setShared('collectionManager', function () {
    return new Manager();
});

/**
 * If our request contains a body, it has to be valid JSON.  This parses the 
 * body into a standard Object and makes that vailable from the DI.  If this service
 * is called from a function, and the request body is nto valid JSON or is empty,
 * the program will throw an Exception.
 */
$di->setShared('requestBody', function() {
	$in = file_get_contents('php://input');
	$in = json_decode($in, FALSE);

	// JSON body could not be parsed, throw exception
	if($in === null){
		throw new HTTPException(
			'There was a problem understanding the data sent to the server by the application.',
			409,
			array(
				'dev' => 'The JSON body sent to the server was unable to be parsed.',
				'internalCode' => 'REQ1000',
				'more' => ''
			)
		);
	}

	return $in;
});


