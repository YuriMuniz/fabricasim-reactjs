import axios from "axios";

const api = axios.create({
  baseURL: "http://206.189.236.92:3333",
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});

export default api;
