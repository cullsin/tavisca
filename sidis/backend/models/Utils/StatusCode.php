<?php

namespace PhalconRest\Models\Utils;
use \PhalconRest\Models\ModelBase as ModelBase;

class StatusCode extends ModelBase {

public function getSource() {
   return 'status_code';
}

public function metaData() {
     return [
	'code' => 'varchar',
	'message' => 'varchar'
     ]; 
}

public function beforeValidationOnCreate() {
  $this->is_deleted = 0;
  $this->created_on = date('Y-m-d H:i:s');
}

}

