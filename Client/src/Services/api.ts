import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:1337/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// API.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");
//     if (
//       token &&
//       config.url &&
//       !config.url.includes("/auth/local/") &&
//       config.url &&
//       !config.url.includes("/auth/local/register")
//     ) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// API.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response && error.response.status === 401) {
//       console.error("Unauthorized: Please log in again.");
//     }
//     return Promise.reject(error);
//   }
// );

export default API;
