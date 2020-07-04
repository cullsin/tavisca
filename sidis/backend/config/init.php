<?php

date_default_timezone_set('America/Los_Angeles');

foreach($di->get('collections') as $collection){
        $app->mount($collection);
}

$app->after(function() use ($app) {

	// OPTIONS have no body, send the headers, exit
	if($app->request->getMethod() == 'OPTIONS'){
		$app->response->setStatusCode('200', 'OK');
		$app->response->send();
		exit;
	}

	// Respond by default as JSON
	if(!$app->request->get('type') || $app->request->get('type') == 'json') {

		// Results returned from the route's controller.  All Controllers should return an array
		$records = $app->getReturnedValue();

		$response = new \PhalconRest\Responses\JSONResponse();
		$response->useEnvelope(true) //this is default behavior
			->convertSnakeCase(true) //this is also default behavior
			->send($records);
		exit;
	}
	else {
		throw new \PhalconRest\Exceptions\HTTPException(
			'Could not return results in specified format',
			403,
			array(
				'dev' => 'Could not understand type specified by type paramter in query string.',
				'internalCode' => 'NF1000',
				'more' => 'Type may not be implemented. Choose either "csv" or "json"'
			)
		);
	}
});

/**
 * The notFound service is the default handler function that runs when no route was matched.
 * We set a 404 here unless there's a suppress error codes.
 */
$app->notFound(function () use ($app) {
	throw new \PhalconRest\Exceptions\HTTPException(
		'Not Found.',
		404,
		array(
			'dev' => 'That route was not found on the server.',
			'internalCode' => 'NF1000',
			'more' => 'Check route for mispellings.'
		)
	);
});

set_exception_handler(function($exception) use ($app){
	//HTTPException's send method provides the correct response headers and body
	if(is_a($exception, 'PhalconRest\\Exceptions\\HTTPException')){
		$exception->send();
	}
	error_log($exception);
	error_log($exception->getTraceAsString());
});

$app->before(function() use ($app) {
$origin = $app->request->getHeader("ORIGIN") ? $app->request->getHeader("ORIGIN") : '*';

$app->response->setHeader("Access-Control-Allow-Origin", $origin)
      ->setHeader("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE,OPTIONS')
      ->setHeader("Access-Control-Allow-Headers", 'token, Origin, X-Requested-With, Content-Range, Content-Disposition, Content-Type, Authorization')
      ->setHeader("Access-Control-Allow-Credentials", true);
});

$app->options('/{catch:(.*)}', function() use ($app) { 
    $app->response->setStatusCode(200, "OK")->send();
});

$app->handle();



