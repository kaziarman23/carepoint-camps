import axios from "axios";

const UseAxios = () => {
  const axiosInstance = axios.create({
    baseURL: "",
  });
  return axiosInstance;
};

export default UseAxios;