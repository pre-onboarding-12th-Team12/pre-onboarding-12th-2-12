import http from './http';
import { Issue, Issues } from '../types/Issue';

/**
 *
 * @param owner 레파지토리의 소유자
 * @param repo 레파지토리 이름
 * @param page 페이지 번호
 * @returns 이슈 목록
 */
export const getIssues = async (
  owner: string,
  repo: string,
  page: number
): Promise<Issues | any> => {
  const response = await http.get<Issues>(
    `/repos/${owner}/${repo}/issues?page=${page}&sort=comments&state=open`
  );
  return response;
};

/**
 *
 * @param owner 레파지토리의 소유자
 * @param repo 레파지토리 이름
 * @param issueNumber 이슈 번호
 * @returns 이슈 상세 정보
 */
export const getIssueDetail = async (
  owner: string,
  repo: string,
  issueNumber: number
): Promise<Issue> => {
  const response = await http.get<Issue>(
    `/repos/${owner}/${repo}/issues/${issueNumber}`
  );
  return response.data;
};
