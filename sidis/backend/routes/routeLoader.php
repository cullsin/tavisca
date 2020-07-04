<?php

return call_user_func(function(){

	$collections = [];
	$collectionFiles = scandir(dirname(__FILE__) . '/collections');
	foreach($collectionFiles as $collectionFile){
		$pathinfo = pathinfo($collectionFile);
		if($pathinfo['extension'] === 'php'){
			$collections[] = include(dirname(__FILE__) .'/collections/' . $collectionFile);
		}
	}

	return $collections;
});
