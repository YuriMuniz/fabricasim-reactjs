import axios from "axios";

const api = axios.create({
  baseURL: "https://api-portal.fabricasim.com",
  //baseURL: "http://localhost:3333",
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});

export default api;
