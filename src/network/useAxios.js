import axios from "axios";
import { BASE_URL } from "../api/lithiumAPI";

const useAxios = () => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Accept: "*/*",
    },
  });

  return axiosInstance;
};

export default useAxios;
