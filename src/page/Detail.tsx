import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import IssueContent from 'components/IssueContent';
import { Image, Text, IconChip, Error, Loading } from 'components/UI';
import { getIssue } from 'api/api';
import { Issue } from 'types/Issue';
import formatDate from 'utils/formatDate';

const Home: React.FC = () => {
  const issueNumber = 13991;
  const [issueInfo, setIssueInfo] = useState<Issue>();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getIssue(issueNumber)
      .then(response => {
        console.log(response.data);
        setIssueInfo(response.data);
      })
      .catch(error => {
        console.error(error);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      {isError && <Error />}
      <div>
        <h1>Detail1 Page</h1>
      </div>
      <div>
        <h1>Header</h1>
      </div>
      <Card>
        <Title>
          <Text size={'50px'} color={`var(--primary)`}>
            {issueInfo?.title}&nbsp;
          </Text>
          <Text size={'50px'} color={`var(--secondary)`}>
            {' '}
            #{issueInfo?.number}
          </Text>
        </Title>
        <CardContents>
          <Text color={`var(--white)`}>
            작성자: {issueInfo?.user.login} / 작성일:{' '}
            {issueInfo?.created_at && formatDate(issueInfo.created_at)}
          </Text>
          <Text color={`var(--white)`}>코멘트수: {issueInfo?.comments}개 </Text>
        </CardContents>
      </Card>
      <Body>
        <Image src={issueInfo?.user.avatar_url} />
        <Balloon>
          <IssueContent content={issueInfo?.body || 'No body available'} />
          <IconChip label={'5'} />
        </Balloon>
      </Body>
    </>
  );
};
const Card = styled.div`
  border: 5px solid red;
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
  color: red;
  padding: 20px;
  border: 5px solid blue;
`;
const CardContents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
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
    border-color: transparent var(--white) transparent transparent;
    top: 19px;
    left: -10px;
    transform: translateY(-50%);
  }
`;

export default Home;
