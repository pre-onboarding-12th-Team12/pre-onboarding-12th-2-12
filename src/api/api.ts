import axios, { AxiosInstance } from 'axios';

const owner = 'facebook'; // 리포지토리 소유자의 GitHub 사용자명
const repo = 'react'; 

// axios 인스턴스 생성
const instance: AxiosInstance = axios.create({
  baseURL: `https://api.github.com/repos/${owner}/${repo}`, // 기본 URL 설정
  headers: {
    'Content-Type': 'application/json', // 기본 헤더 설정
  }
});

// 토큰 값
const authToken = process.env.REACT_APP_GITHUB_TOKEN;

// 요청 전에 실행되는 인터셉터
instance.interceptors.request.use(
  config => {
    config.headers.Authorization = `Bearer ${authToken}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);


export const getIssue = (issueNumber: number) => {
  return instance.get(`/issues/${issueNumber}`);
};
