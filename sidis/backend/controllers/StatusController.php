<?php

namespace PhalconRest\Controllers\Status;
use \PhalconRest\Exceptions\HTTPException;
use \PhalconRest\Models\Utils\Helper;
use \PhalconRest\Models\Status;
use MongoDB\BSON\ObjectId as MongoId;
use MongoDB\BSON\Regex;

class StatusController extends \PhalconRest\Controllers\RESTController {

	public function statuslist() {

                $input = $this->input;
                $keyword = isset($input['keyword']) ? $input['keyword'] : '.*';
                $regexQuery = new Regex(".*$keyword.*");
                $query = [
                        '$or' => [
                                ['desc' => [ '$regex' => $regexQuery, '$options' => 'i' ] ],
				['code' => [ '$regex' => $regexQuery, '$options' => 'i' ] ],
                                ['name' => [ '$regex' => $regexQuery, '$options' => 'i' ] ]
                        ]];

                $params = [$query,'sort' => ['created_on' => -1],'limit' => 8];
		$result = Status::find($params);
		$status = [];
		foreach($result as $object) {
			$temp = $object->toArray();
			array_push($status, $temp);
		}

		$response = $this->getMessageSuccess('MEQ01');
		$response['list'] = $status; 
		return $response;
	}

        public function statussave() {

                $input = $this->input;
		$status = false;
		if($input['id']) { 
                	$id =  new MongoId($input['id']);
                	$params = [ [ '_id' => $id ] ];
                	$status = Status::findFirst($params);
		}

                if(!$status)
                $status = new Status();
                $attributes = $status->metaData();
                foreach($input as $key => $value) {
                        if(array_key_exists($key, $attributes)) {
                                $status->$key = trim($value);
                        }
                }

                $status->save();
		return $this->getMessageSuccess('MEQ03');
        }

        public function statusdelete() {
                        $input = $this->input;
			$id =  new MongoId($input['id']);
                        $params = [[ '_id' => $id ]];
                        $object = Status::findFirst($params);
                        $object->delete();
                        return $this->getMessageSuccess('MEQ04');
        }

        public function statusget() {
                $input = $this->input;
                $id =  new MongoId($input['id']);
                $params = [[ '_id' => $id ]];
                $object = Status::findFirst($params);
                $output = $object->toArray();
		$response = $this->getMessageSuccess('MEQ05');
		$response['status'] = $output;
                return $response; 
        }

        public function statusquery() {
                $input = $this->input;
                $query = $input['query'];
                $regexQuery = new Regex(".*$query.*");
                $params = [[ "name" =>  [ '$regex' => $regexQuery, '$options' => 'i' ]]];
                $result = Status::find($params);
                $response = $this->getMessageSuccess('MEQ01');
                $response['list'] = $result;
                return $response;
        }


}
