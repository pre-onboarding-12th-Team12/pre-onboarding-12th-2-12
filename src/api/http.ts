import Axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
const BASE_URL = 'https://api.github.com';
const TOKEN = process.env.REACT_APP_GITHUB_ACCESS_TOKEN;

// Github API를 사용하기 위해서는 토큰이 필요합니다.
if (!TOKEN) {
  throw new Error('Github token is missing');
}

// Axios 인스턴스 생성
const axios = Axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/vnd.github+json',
    'X-Github-Api-Version': '2022-11-28',
    Authorization: `${TOKEN}`,
  },
});

// 공통 에러 처리
axios.interceptors.response.use(
  <T>(response: AxiosResponse<T>) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response && error.response.status === 404) {
      throw new Error('Page Not Found');
    } else {
      throw error;
    }
  }
);

// HTTP 요청을 보내는 함수
export const http = {
  get: async function get<Response = unknown>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<Response> {
    return axios
      .get<Response>(url, config)
      .then(response => response.data) // 여기서 .data를 반환합니다.
      .catch((e: AxiosError) => {
        if (e.response) {
          throw new Error(String(e.response.data));
        } else {
          throw e;
        }
      });
  },
};

export default http;
