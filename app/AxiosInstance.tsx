import axios from "axios";

function AxiosInstance() {
  axios.defaults.baseURL = "http://localhost:8082";
  // axios.defaults.baseURL = "http://localhost:5173";
  axios.defaults.withXSRFToken = true;
  axios.defaults.withCredentials = true;
}

export default AxiosInstance;
