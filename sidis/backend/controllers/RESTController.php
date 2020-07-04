<?php

namespace PhalconRest\Controllers;
use \PhalconRest\Exceptions\HTTPException;
use \PhalconRest\Models\Utils\StatusCode;
use \PhalconRest\Models\Utils\Helper;
use \PhalconRest\Models\Auth\Token;

class RESTController extends \PhalconRest\Controllers\BaseController {

	
	public $input;

        public $algo = 'sha1';

	public $mytime;

	public $gate;

	public function __construct() {

		parent::__construct();
		$this->init();
		$this->inputF();
	}
	
	private function init()	{
		$this->mytime =  date('Y-m-d H:i:s');
	 }

	 public function exception($errors = ['error_code' => 500, 'internal_code' => "ME500", 'message' => null ]) {	
			throw new HTTPException (
                                "System Error Occurred ", $errors['error_code'] , 
				array (
                                "dev" => "The records returned were malformed, {$errors['message']}",
                                "internalCode" => $errors['internal_code'])
                        );
	 }	
	
	 private function inputF() {

		$input  = [];
		$status = 0;

		$input = Helper::getInputArray($this->request->getJsonRawBody());

		$params = $this->request->getQuery();
		foreach($params as $item => $value) 
			$input[$item] = $value;

                $params = $this->request->getPost();
                foreach($params as $item => $value)
                        $input[$item] = $value;


                    $auth = $this->request->getHeader('auth'); 
		    $this->input	= $input;
			
	 	$token = $this->request->getHeader('token');
		$ip_addr = $this->request->getClientAddress(); 
		$token = Token::findFirst([[ 'token' => $token, 'ip_addr' => $ip_addr ]]);
		return true; // ToDo Fix auth before production
                if(!$token)
                        $this->exception(['error_code' => '200', 
						'internal_code' => 'SYS102',
						'message' => "token is not available $ip_addr"]);
	} 
		 
	protected function respond($finalArray = [] ) {
		if(!is_array($finalArray)) $this->exception();
		return $finalArray; 
	}

        public function getMessageSuccess($code) {
                $status = StatusCode::findFirst([['code' => $code]]);
                if($status) {
                        return [ 'code' => $status->code, 'message' => $status->message, 'status' => 'positive' ];
                } else {
                        return [ 'code' => 'ME001', 'message' => 'code boot', 'status' => 'positive' ];
                }
        }

        public function getMessageFailure($code) {
                $status = StatusCode::findFirst([['code' => $code]]);
                if($status) {
                        return [ 'code' => $status->code, 'message' => $status->message, 'status' => 'negative' ];
                } else {
                         return [ 'code' => $code, 'message' => 'code boot', 'status' => 'negative' ];
                }
        }

}

