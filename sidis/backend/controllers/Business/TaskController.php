<?php

namespace PhalconRest\Controllers\Business;
use \PhalconRest\Exceptions\HTTPException;
use \PhalconRest\Models\Utils\Helper;
use \PhalconRest\Models\Business\Task;
use \PhalconRest\Models\Status;
use MongoDB\BSON\ObjectId as MongoId;
use MongoDB\BSON\Regex;

class TaskController extends \PhalconRest\Controllers\RESTController {

	public function tasklist() {

                $input = $this->input;
                $keyword = isset($input['keyword']) ? $input['keyword'] : '.*';
                $regexQuery = new Regex(".*$keyword.*");
                $query = [
			'card_id' => $input['card_id'],
                        '$or' => [
                                ['desc' => [ '$regex' => $regexQuery, '$options' => 'i' ] ],
				['code' => [ '$regex' => $regexQuery, '$options' => 'i' ] ],
                                ['name' => [ '$regex' => $regexQuery, '$options' => 'i' ] ]
                        ]];


                $params = [$query,'sort' => ['created_on' => -1], 'limit' => 3, 'skip' => $input['offset'] ];
		$result = Task::find($params);

   		$params = [$query,'sort' => ['created_on' => -1]];
		$counts = Task::find($params);
		$count = count($counts);

		$task = [];
		foreach($result as $object) {
			$temp = $object->toArray();
			array_push($task, $temp);
		}

		$response = $this->getMessageSuccess('MEQ01');
		$response['list'] = $task; 
		$response['total'] = $count;
		return $response;
	}

        public function tasksave() {

                $input = $this->input;
		$task = false;
		if($input['id']) { 
                	$id =  new MongoId($input['id']);
                	$params = [ [ '_id' => $id ] ];
                	$task = Task::findFirst($params);
		}

                if(!$task)
                $task = new Task();
                $attributes = $task->metaData();
                foreach($input as $key => $value) {
                        if(array_key_exists($key, $attributes)) {
                                $task->$key = trim($value);
                        }
                }

                $task->save();
		return $this->getMessageSuccess('MEQ03');
        }

        public function taskdelete() {
                        $input = $this->input;
			$id =  new MongoId($input['id']);
                        $params = [[ '_id' => $id ]];
                        $object = Task::findFirst($params);
                        $object->delete();
                        return $this->getMessageSuccess('MEQ04');
        }

        public function taskget() {
                $input = $this->input;
                $id =  new MongoId($input['id']);
                $params = [[ '_id' => $id ]];
                $object = Task::findFirst($params);
                $output = $object->toArray();
		$response = $this->getMessageSuccess('MEQ05');
		$response['task'] = $output;
                return $response; 
        }

        public function taskmove() {
                $input = $this->input;
		$card_id = $input['card']['id'];
		$to_card_id = $input['selected'][0]['id'];
		foreach($input['transit'] as $key => $value) { 
                	$id =  new MongoId($value['id']);
                	$params = [[ '_id' => $id ]];
                	$object = Task::findFirst($params);
			if($object) { 
			  $object->card_id = $to_card_id;
			  $object->save();	
			}
		}

		$response = $this->getMessageSuccess('MEQ05');
                return $response; 
        }


        public function taskquery() {
                $input = $this->input;
                $query = $input['query'];
                $regexQuery = new Regex(".*$query.*");
                $params = [[ "name" =>  [ '$regex' => $regexQuery, '$options' => 'i' ]]];
                $result = Task::find($params);
                $response = $this->getMessageSuccess('MEQ01');
                $response['list'] = $result;
                return $response;
        }


}
