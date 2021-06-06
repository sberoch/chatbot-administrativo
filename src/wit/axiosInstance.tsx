import axios from 'axios';

//TODO: get from env
const BASE_URL = 'https://api.wit.ai'

const api = axios.create({
  baseURL: BASE_URL
});

api.interceptors.request.use(
  config => {
    //TODO: get from env
    const token = 'ICX6YP2D6NJV3VKIFF56ZGTQ4PW53TRN'
    config.headers['Authorization'] = 'Bearer ' + token;
    config.params['v'] = '20200513';
    return config;
  },
  error => {
    Promise.reject(error)
  }
);

export default api;
