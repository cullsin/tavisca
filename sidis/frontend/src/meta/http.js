import axios from 'axios';
const adminUrl = process.env.REACT_APP_ADMINURL;

let $http = axios.create({
    baseURL: adminUrl
});

export default $http;