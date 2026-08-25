import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api", // ⚠️ use YOUR port
});

export default API;