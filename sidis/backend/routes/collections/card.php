<?php

return call_user_func(function(){

	$Collection = new \Phalcon\Mvc\Micro\Collection();

	$Collection
		->setPrefix('/card')
		->setHandler('\PhalconRest\Controllers\Business\CardController')
		->setLazy(true);

        $Collection->get('/list', 'cardlist');
	$Collection->get('/get', 'cardget');
	$Collection->post('/query', 'cardquery');
	$Collection->post('/save', 'cardsave');
	$Collection->post('/delete', 'carddelete');
	return $Collection;

});
