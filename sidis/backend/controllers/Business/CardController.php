<?php

namespace PhalconRest\Controllers\Business;
use \PhalconRest\Exceptions\HTTPException;
use \PhalconRest\Models\Utils\Helper;
use \PhalconRest\Models\Utils\StatusCode as StatusCode;
use \PhalconRest\Models\Business\Card;
use MongoDB\BSON\ObjectId as MongoId;
use MongoDB\BSON\Regex;

class CardController extends \PhalconRest\Controllers\RESTController {

	public function cardlist() {

                $input = $this->input;
                $keyword = isset($input['keyword']) ? $input['keyword'] : '.*';
		$keyword = quotemeta($keyword);
                $regexQuery = new Regex(".*$keyword.*");
                $query = [
                        '$or' => [
                                ['desc' => [ '$regex' => $regexQuery, '$options' => 'i' ] ],
				['code' => [ '$regex' => $regexQuery, '$options' => 'i' ] ],
                                ['name' => [ '$regex' => $regexQuery, '$options' => 'i' ] ]
                        ]];

                $params = [$query,'sort' => ['created_on' => -1]];
		$result = Card::find($params);
		$card = [];
		foreach($result as $object) {
			$temp = $object->toArray();
			array_push($card, $temp);
		}

		$response = $this->getMessageSuccess('MEQ01');
		$response['list'] = $card; 
		return $response;
	}

        public function cardsave() {

                $input = $this->input;
		$card = false;
		if($input['id']) { 
                	$id =  new MongoId($input['id']);
                	$params = [ [ '_id' => $id ] ];
                	$card = Card::findFirst($params);
		}

		$ex_card = Card::findFirst([[ 'name' => trim($input['name']) ]]);
		if($ex_card) {
			return $this->getMessageFailure('MEQ03');	
		}		

                if(!$card)
                $card = new Card();
                $attributes = $card->metaData();
                foreach($input as $key => $value) {
                        if(array_key_exists($key, $attributes)) {
                                $card->$key = trim($value);
                        }
                }

                $card->save();
		return $this->getMessageSuccess('MEQ03');
        }

        public function carddelete() {
                        $input = $this->input;
			$id =  new MongoId($input['id']);
                        $params = [[ '_id' => $id ]];
                        $object = Card::findFirst($params);
                        $object->delete();
                        return $this->getMessageSuccess('MEQ04');
        }

        public function cardget() {
                $input = $this->input;
                $id =  new MongoId($input['id']);
                $params = [[ '_id' => $id ]];
                $object = Card::findFirst($params);
                $output = $object->toArray();
		$response = $this->getMessageSuccess('MEQ05');
		$response['card'] = $output;
                return $response; 
        }

        public function cardquery() {
                $input = $this->input;
                $query = $input['query'];
                $regexQuery = new Regex(".*$query.*");
                $params = [[ "name" =>  [ '$regex' => $regexQuery, '$options' => 'i' ]]];
                $result = Card::find($params);
                $response = $this->getMessageSuccess('MEQ01');
                $response['list'] = $result;
                return $response;
        }


}
