import axios from "axios";

const api = axios.create({
<<<<<<< HEAD
    baseURL: 'http://10.1.2.187:3333'
=======
  baseURL: "http://192.168.0.102:3333", // http://<Expo emulator ip>:serverAppPort*
>>>>>>> f065bcfd455564b5d13adec9bce22453edffe720
});

export default api;

// * you need to run your app server
