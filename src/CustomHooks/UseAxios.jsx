import axios from "axios";

const UseAxios = () => {
  const axiosInstance = axios.create({
    baseURL: "https://carepoint-camps-server.vercel.app",
  });
  return axiosInstance;
};

export default UseAxios;
