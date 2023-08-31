import Axios, { AxiosRequestConfig } from 'axios';
const BASE_URL = 'https://api.github.com';
const TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const axios = Axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/vnd.github+json',
    'X-Github-Api-Version': '2022-11-28',
    Authorization: `token ${TOKEN}`,
  },
});

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response.status === 404) {
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
  ) {
    return axios
      .get<Response>(url, config)
      .then(res => res.data)
      .catch(e => e.response.data);
  },
};

export default http;
