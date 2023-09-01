/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { getIssues } from 'api/issueApi';
import AdvertisementItem from 'components/Advertisement';
import IssuesList from 'components/IssuesList';
import React, { useEffect, useState } from 'react';
import type { Issues } from 'types/Issue';

const Home: React.FC = () => {
  const [listData, setListData] = useState<Issues>([]);

  const getData = async () => {
    const data = await getIssues('facebook', 'react', 1);
    setListData(data);
  };

  useEffect(() => {
    getData().catch(error => {
      alert(error);
    });
  }, []);

  const hasAdvertisement = (idx: number) => (idx + 1) % 4 === 0;

  const issueElements = listData.map((list, idx) => (
    <li key={list.id}>
      <IssuesList list={list} key={list.id} />
      {hasAdvertisement(idx) && <AdvertisementItem />}
    </li>
  ));

  return <ul>{issueElements}</ul>;
};

export default Home;
