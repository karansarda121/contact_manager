import axios from "axios";

// Create an Axios instance
const API = axios.create({ baseURL: "https://contact-manager-kokk.onrender.com" });

// Add token to headers if available
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default API;
