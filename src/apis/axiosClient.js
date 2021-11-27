import axios from "axios";
import { getAccessToken } from "./authorityToken";
import { queryString } from "query-string";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  const token = await getAccessToken();
  if (token) {
    config.headers = {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json",
    };
  }
  console.log(token);
  return config;
});

axiosClient.interceptors.response.use((response) => {
  if (response && response.data) {
    return response.data;
  }
  return response;
});

export default axiosClient;
