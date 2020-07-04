
import axios from 'axios';

import { NotificationManager } from 'react-notifications';

const adminUrl = process.env.REACT_APP_ADMINURL;

let $http = axios.create({
    baseURL: adminUrl
});


$http.interceptors.response.use(function (response) {
    const { message, status } = response.data.records;
    if(status === 'negative')
        NotificationManager.error(message);   
    return response;
});

export default $http;