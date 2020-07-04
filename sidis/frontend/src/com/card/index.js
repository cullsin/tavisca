import $http from '../../meta/http';

export const save = async data => {
  return $http
    .post('/card/save', data)
    .then(response => {
      return response;
    });
};

export const remove = async data => {
  return $http
    .post('/card/delete', data)
    .then(response => {
      return response;
    });
};

export const list = ({keyword}) => {
  return $http
    .get('/card/list?keyword='+keyword)
    .then(response => {
      return response;
    });
};

