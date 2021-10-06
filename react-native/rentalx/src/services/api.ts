import axios from 'axios';

const { create } = axios;

const api = create({
  baseURL: 'http://localhost:3333',
});

export default api;
