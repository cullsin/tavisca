<?php

namespace PhalconRest\Models\Auth;
use \PhalconRest\Models\ModelBase as ModelBase;

class Auth extends ModelBase {

public function metaData() {
     return [
	'token' => 'varchar'
     ]; 
}

public function beforeValidationOnCreate() {
  $this->is_deleted = 0;
  $this->created_on = date('Y-m-d H:i:s');
  $this->updated_on = date('Y-m-d H:i:s');	
}

}

