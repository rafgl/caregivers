import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.0.103:3333", // http://<Expo emulator ip>:serverAppPort*
});

export default api;

// * you need to run your app server
