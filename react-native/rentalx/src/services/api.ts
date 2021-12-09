import axios from 'axios';

const { create } = axios;

const api = create({
  baseURL: 'http://10.0.0.192:3333',
});

export default api;
