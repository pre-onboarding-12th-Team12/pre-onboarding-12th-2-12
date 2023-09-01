import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import IssueContent from 'components/IssueContent';
import { ORGANIZATION, REPO } from 'utils/constants';
import formatDate from 'utils/formatDate';
import { Image, Text, Error, Loading } from 'components/UI';
import { getIssueDetail } from 'api/issueApi';
import { Issue } from 'types/Issue';

const Home: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const issueNumber = id ? parseInt(id, 10) : undefined;
  const [issueInfo, setIssueInfo] = useState<Issue>();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (issueNumber !== undefined) {
      setIsLoading(true);
      getIssueDetail(ORGANIZATION, REPO, issueNumber)
        .then(response => {
          setIssueInfo(response);
        })
        .catch(error => {
          console.error(error);
          setIsError(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, []);
  return (
    <>
      {isLoading && <Loading />}
      {isError && <Error />}
      {!isLoading && !isError && (
        <>
          <Card>
            <Title>
              <Text size={'30px'} color={`var(--primary)`}>
                {issueInfo?.title}&nbsp;
              </Text>
              <Text size={'30px'} color={`var(--secondary)`}>
                {' '}
                #{issueInfo?.number}
              </Text>
            </Title>
            <CardContents>
              <Text color={`var(--white)`}>
                작성자: {issueInfo?.user.login} / 작성일:{' '}
                {issueInfo?.created_at && formatDate(issueInfo.created_at)}
              </Text>
              <Text color={`var(--white)`}>
                코멘트수: {issueInfo?.comments}개{' '}
              </Text>
            </CardContents>
          </Card>
          <Body>
            <Image src={issueInfo?.user.avatar_url} />
            <Balloon>
              <IssueContent content={issueInfo?.body || 'No body available'} />
            </Balloon>
          </Body>
        </>
      )}
    </>
  );
};
const Card = styled.div`
  border-bottom: 5px solid --var(dark-bg);
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
  color: red;
  padding: 20px;
`;
const CardContents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
  padding-top: 13px;
`;
const Title = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
`;
const Balloon = styled.div`
  position: relative;
  background-color: var(--gray-800);
  border-radius: 8px;
  padding: 10px;
  margin: 10px;
  width: 60%;
  transform: translate(0, -10px);
  flex: 1;
  &:before {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 10px 10px 10px 0;
    border-color: transparent var(--gray-800) transparent transparent;
    top: 19px;
    left: -10px;
    transform: translateY(-50%);
  }
`;

export default Home;
