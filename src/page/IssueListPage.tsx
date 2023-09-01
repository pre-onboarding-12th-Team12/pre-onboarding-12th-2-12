import { getIssues } from 'api/issueApi';
import useInfinityScroll from 'hooks/useInfinityScroll';
import { useContext, useEffect, useRef, useState } from 'react';
import { Issues } from 'types/Issue';
import { ORGANIZATION, REPO } from 'utils/constants';
import { useNavigate } from 'react-router-dom';
import { IssueContext } from 'contexts/IssueContext';
import IssueItem from 'components/issueList/IssueItem';
import { IssueContextProviderTemp } from 'contexts/issueContextTempForIssueList';
import { styled } from 'styled-components';
import AdvertisementItem from 'components/issueList/Advertisement';

const hasAdvertisement = (idx: number) => (idx + 1) % 5 === 0;
const ObserveRef = styled.li`
  height: 20px;
`;

export default function IssueListPage() {
  const navigate = useNavigate();
  const { issues, fetchIssues, isLoading, isError } = useContext(
    IssueContextProviderTemp
  );

  const [tempIssues, setTempIssues] = useState<Issues>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchTempIssues = await getIssues(ORGANIZATION, REPO, 1);
        setTempIssues(fetchTempIssues);
      } catch (error) {
        console.error('Error fetching temp issues:', error);
      }
    };
    void fetchData();
  }, []);

  const observeRef = useInfinityScroll({ callback: getIssuesCallback });

  function getIssuesCallback() {
    if (!isLoading) {
      return fetchIssues().catch(error => {
        console.error('Error fetching issues:', error);
      });
    }
    return Promise.resolve(); // Always return a promise
  }
  const handleClickIssue = (issueNumber?: number) => {
    if (issueNumber !== undefined) {
      navigate(`/detail/${issueNumber}`);
    }
  };

  // const issueElements = issues.map(
  const issueElements = tempIssues.map(
    ({ id, number, comments, title, user, updated_at }, issueIdx) => (
      <li key={id}>
        <IssueItem
          issueNumber={number}
          comments={comments}
          title={title}
          date={updated_at}
          author={user.login}
          handleClickIssue={handleClickIssue}
        />
        {hasAdvertisement(issueIdx) && <AdvertisementItem />}
      </li>
    )
  );

  return (
    <ul>
      {issueElements}
      {isLoading && <>loading..</>}
      {isError ? <>error가 발생하였습니다.</> : <ObserveRef ref={observeRef} />}
      {/* {isError ? <>error가 발생하였습니다.</> : <ObserveRef ref={observeRef} />} */}
    </ul>
  );
}
