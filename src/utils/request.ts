import axios from "axios";

// const BASE_URL = "http://localhost:3500/api/v1/";
const BASE_URL = "https://notecode-backend.onrender.com/api/v1/";

export const baseAxios = axios.create({
  baseURL: BASE_URL,
});
