import IssuesList from 'components/IssuesList';
import { MOCK_DATA } from 'contexts/IssueContext';
import React from 'react';

const Home: React.FC = () => {
  const data = MOCK_DATA;
  return (
    <>
      <div>HomePage</div>
      {data.map(list => {
        return <IssuesList list={list} key={list.id} />;
      })}
    </>
  );
};

export default Home;
