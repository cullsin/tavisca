<?php

return call_user_func(function(){

	$Collection = new \Phalcon\Mvc\Micro\Collection();

	$Collection
		->setPrefix('/status')
		->setHandler('\PhalconRest\Controllers\StatusController')
		->setLazy(true);

        $Collection->get('/list', 'statuslist');
	$Collection->get('/get', 'statusget');
	$Collection->post('/query', 'statusquery');
	$Collection->post('/save', 'statussave');
	$Collection->post('/delete', 'statusdelete');
	return $Collection;

});
