import axios from "axios";

const getToken = () => {
  return localStorage.getItem("authToken");
};

const useApi = axios.create({
  baseURL: "http://localhost:5000/api",
});

useApi.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default useApi;
