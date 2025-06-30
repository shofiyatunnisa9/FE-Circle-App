import axios from "axios";

// Backend TypeScript API URL
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("acces-token");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error("Request Error", error);
    return Promise.reject(error);
  }
);

// Response interceptor untuk handling error
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired atau invalid
      localStorage.removeItem("acces-token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);
