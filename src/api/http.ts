import Axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
const BASE_URL = 'https://api.github.com';
const TOKEN = process.env.REACT_APP_GITHUB_ACCESS_TOKEN;

if (!TOKEN) {
  throw new Error('Github token is missing');
}

const axios = Axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/vnd.github+json',
    'X-Github-Api-Version': '2022-11-28',
    Authorization: `token ${TOKEN}`,
  },
});

axios.interceptors.response.use(
  <T>(response: AxiosResponse<T>) => {
    return response.data;
  },
  (error: AxiosError) => {
    if (error.response && error.response.status === 404) {
      throw new Error('Page Not Found');
    } else {
      throw error;
    }
  }
);

export const http = {
  get: function get<Response = unknown>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<Response>> {
    return axios.get<Response>(url, config).catch((e: AxiosError) => {
      if (e.response) {
        throw new Error(String(e.response.data));
      } else {
        throw e;
      }
    });
  },
};

export default http;
