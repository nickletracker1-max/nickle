import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import { toast } from "react-hot-toast";
import { jwtDecode } from "jwt-decode";
import Router from "next/router";
import { GetUserData } from "../utils/GetUserData";
import { BASE_URL } from "../api/lithiumAPI";

interface JwtPayload {
  exp: number;
}

let sessionExpired = false;

const isTokenExpired = (token: string): boolean => {
  try {
    const { exp } = jwtDecode<JwtPayload>(token);
    return exp < Date.now() / 1000;
  } catch {
    return true;
  }
};

const useAxiosPrivate = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Accept: "*/*",
    },
  });

  instance.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
      const userData = GetUserData();

      if (userData?.access_token) {
        if (isTokenExpired(userData.access_token) && !sessionExpired) {
          sessionExpired = true;
          localStorage.clear();
          document.cookie = "userData=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
          toast.error("Session expired. Please log in again.");
          Router.push("/");
          return Promise.reject(new Error("Token expired"));
        }
        config.headers["Authorization"] = `Bearer ${userData.access_token}`;
      }

      return config;
    },
    (error) => Promise.reject(error)
  );

  return instance;
};

export default useAxiosPrivate;
