<?php

namespace PhalconRest\Models\Business;
use \PhalconRest\Models\ModelBase as ModelBase;

class Task extends ModelBase {

public function metaData() {
     return [
	'name' => 'varchar',
	'card_id' => 'varchar',
	'status' => 'enum' /* from status master table */
     ]; 
}

public function beforeValidationOnCreate() {

  $this->is_deleted = 0;
  $this->created_on = date('Y-m-d H:i:s');
  $this->updated_on = date('Y-m-d H:i:s');	

}

}

