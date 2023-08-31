/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import GlobalStyle from 'GlobalStyle';
import { Wrapper } from 'style/Wrapper';
import { IssueContext } from 'contexts/IssueContext';

function App() {
  const { issues, fetchIssues, isLoading, isError } = useContext(IssueContext);

  useEffect(() => {
    fetchIssues();
  }, []);

  console.log(issues);
  console.log('isLoading : ', isLoading);
  console.log('isError : ', isError);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Outlet />
      </Wrapper>
    </>
  );
}

export default App;
