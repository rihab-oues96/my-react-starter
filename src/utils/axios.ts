import axios from "axios";

const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

axiosInstance.interceptors.response.use(
  (response: any) => response,
  (error: any) => {
    if (error.response.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/";
    } else {
      Promise.reject(
        (error.response && error.response.data) || "Something went wrong"
      );
    }
  }
);

export default axiosInstance;
