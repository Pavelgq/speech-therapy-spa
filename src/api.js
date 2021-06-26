import axios from "axios";

import useLocalStorage from "./hooks/useLocalStorage";

export const api = axios.create({
  baseURL: process.env.API_ROOT || "http://localhost:3001/api/",
});

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = `${token}`;
};
