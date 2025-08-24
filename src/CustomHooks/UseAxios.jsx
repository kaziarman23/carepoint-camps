import axios from "axios";

const UseAxios = () => {
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL_SERVER,
  });

  return axiosInstance;
};

export default UseAxios;
