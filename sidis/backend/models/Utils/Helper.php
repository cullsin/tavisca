<?php

namespace PhalconRest\Models\Utils;
use \PhalconRest\Models\ModelBase as ModelBase;
use \PhalconRest\Models\StatusCode as StatusCode;
use \DateTime as DateTime;
use \Phalcon\Di as Di;

class Helper extends ModelBase 
{
	
	public static function getObjecfromResultSet($params = ["resultset" => "", "key" => "", "value" => ""] ) {

		foreach($params as $key => $value) 
			if(empty($value)) return new StatusCode();

		foreach($params['resultset'] as $object) 
			 if($object->$params['key'] == $params['value'] )
				return $object;
	}		

	public function getInputArray($object) {
		
		/* Watch out spaces in the key */
		if (is_object($object)) {
  			return array_map(__METHOD__, get_object_vars($object));
 		} else if (is_array($object)) {
  			return array_map(__METHOD__, $object);
 		} else {
  			return $object;
		}

	}

	public function formatDate(array $input) {
		
		$date = $input['date'];
		switch($input['format']) {
			case 1 : {
				return date("F j, Y, g:i a", strtotime($date));
			} 	
			case 2: {
				return date("F j, Y", strtotime($date));

			}
			default: { 
				return $date; 
			}
		}
	}

       public function time_elapsed_string($datetime, $full = false) {
    
		$now = new DateTime;
    		$ago = new DateTime($datetime);
    		$diff = $now->diff($ago);

    		$diff->w = floor($diff->d / 7);
    		$diff->d -= $diff->w * 7;

    $string = array(
        'y' => 'year',
        'm' => 'month',
        'w' => 'week',
        'd' => 'day',
        'h' => 'hour',
        'i' => 'minute',
        's' => 'second',
    );

    foreach ($string as $k => &$v) {
        if ($diff->$k) {
            $v = $diff->$k . ' ' . $v . ($diff->$k > 1 ? 's' : '');
        } else {
            unset($string[$k]);
        }
    }

    	if (!$full) $string = array_slice($string, 0, 1);
    	return $string ? implode(', ', $string) . ' ago' : 'just now';
    }

    public function RandomString($length) {
    	$characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    	$randstring = '';
    	for ($i = 0; $i < $length; $i++) {
        	$randstring = $characters[rand(0, strlen($characters))];
    	}
    	return $randstring;
    }

    public static function createFolder($basePath) {
                if(!file_exists($basePath))
                        return 1;

                $path = $basePath.'/'.date('Y').'/'.date('m').'/'.date('d');
                if(file_exists($path))
                        return $path;
                if (!mkdir($path, 0777, true)) {
                        return 2;
                }
                return $path.'/';
    }

function distance($lat1, $lon1, $lat2, $lon2, $unit) {
  if (($lat1 == $lat2) && ($lon1 == $lon2)) {
    return 0;
  }
  else {
    $theta = $lon1 - $lon2;
    $dist = sin(deg2rad($lat1)) * sin(deg2rad($lat2)) +  cos(deg2rad($lat1)) * cos(deg2rad($lat2)) * cos(deg2rad($theta));
    $dist = acos($dist);
    $dist = rad2deg($dist);
    $miles = $dist * 60 * 1.1515;
    $unit = strtoupper($unit);

    if ($unit == "K") {
      return ($miles * 1.609344);
    } else if ($unit == "N") {
      return ($miles * 0.8684);
    } else {
      return $miles;
    }
  }
}
}


