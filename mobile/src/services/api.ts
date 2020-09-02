import axios from 'axios';

const api = axios.create({
    baseURL: 'http://92.168.0.102:3333'
});

export default api;