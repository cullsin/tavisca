import $http from '../../meta/http';

export const save = async data => {
  return $http
    .post('/task/save', data)
    .then(response => {
      return response;
    });
};

export const remove = async data => {
  return $http
    .post('/task/delete', data)
    .then(response => {
      return response;
    });
};

export const list = ({offset, keyword, card : { id }}) => {
  return $http
    .get('/task/list?keyword='+keyword+'&card_id='+id+'&offset='+offset)
    .then(response => {
      return response;
    });
};

export const move = async data => {
    return $http
      .post('/task/move', data)
      .then(response => {
        return response;
      });
  };
  