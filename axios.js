import axios from "axios";

const instance = axios.create({

   baseURL : "https://qrcode-test-api.onrender.com/api/v1",
  // baseURL : "http://10.10.159.16/api/v1",
  withCredentials: true,
});
 
export default instance;



