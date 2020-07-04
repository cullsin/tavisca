<?php

return call_user_func(function(){

	$Collection = new \Phalcon\Mvc\Micro\Collection();

	$Collection
		->setPrefix('/task')
		->setHandler('\PhalconRest\Controllers\Business\TaskController')
		->setLazy(true);

        $Collection->get('/list', 'tasklist');
	$Collection->get('/get', 'taskget');
	$Collection->post('/query', 'taskquery');
	$Collection->post('/save', 'tasksave');
	$Collection->post('/delete', 'taskdelete');
	$Collection->post('/move', 'taskmove');
	return $Collection;

});
