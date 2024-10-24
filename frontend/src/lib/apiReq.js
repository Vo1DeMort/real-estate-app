import axios from "axios";

const apiReq = axios.create({
  baseURL: "http://localhost:8000/api/",
  withCredentials: true,
});

export default apiReq;
