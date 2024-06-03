import axios from "axios";

const BASE_URL = "http://localhost:3500/api/v1/";

export const baseAxios = axios.create({
  baseURL: BASE_URL,
});
