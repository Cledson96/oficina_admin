"use client";
import axios from "axios";
import { getSession } from "next-auth/react";
import Env from "@/configs/env";

const useApi = axios.create({
  baseURL: "http://localhost:5000/api",
});

useApi.interceptors.request.use(
  async (config) => {
    let token;
    console.log(Env.api, "env");
    const session: any = await getSession();
    if (session) {
      token = session.accessToken;
    }

    config.headers["Authorization"] = `Bearer ${token}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default useApi;
