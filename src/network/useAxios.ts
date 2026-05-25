import axios, { AxiosInstance } from "axios";
import { BASE_URL } from "../api/lithiumAPI";

const useAxios = (): AxiosInstance => {
  return axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Accept: "*/*",
    },
  });
};

export default useAxios;
