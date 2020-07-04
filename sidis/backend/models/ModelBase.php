<?php


namespace PhalconRest\Models;
use Phalcon\Mvc\MongoCollection as Collection;
use Phalcon\Mvc\Collection\Behavior\SoftDelete;

abstract class ModelBase extends Collection {

public $id;

public function initialize() { 

    $this->addBehavior(new SoftDelete(
        array(
            'field' => 'is_deleted',
            'value' => 1 
        )
    ));

}   

public function afterFetch() { 
	$this->id = $this->{'_id'}->__toString();
}

public function beforeSave() {
	unset($this->id);
}

public static function find(array $parameters = NULL) {
        $parameters = self::softDeleteFetch($parameters);
        return parent::find($parameters);
}

public static function findFirst(array $parameters = NULL) {
        $parameters = self::softDeleteFetch($parameters);
        return parent::findFirst($parameters);
}

public static function count(array $parameters=NULL) {
        $parameters = self::softDeleteFetch($parameters);
        return parent::count($parameters);
}


public static function softDeleteFetch($parameters) {
        $arr = [ "is_deleted" => 0 ];
        if(is_array($parameters) && count($parameters) > 0 ) 
                $parameters[0]['is_deleted'] = 0;
        else 
                $parameters[] = $arr;

        return $parameters;
}


}

?>
