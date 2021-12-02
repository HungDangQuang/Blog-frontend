import axios from "axios";
import { getAccessTokenAdmin } from "./authorityToken";
import { queryString } from "query-string";

const axiosAdmin = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosAdmin.interceptors.request.use(async (config) => {
  const token = await getAccessTokenAdmin();
  if (token) {
    config.headers = {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json",
    };
  }
  console.log(config);
  return config;
});

axiosAdmin.interceptors.response.use((response) => {
  if (response && response.data) {
    return response.data;
  }
  return response;
});

export default axiosAdmin;
