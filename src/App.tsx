import React from 'react';
import { Outlet } from 'react-router-dom';
import GlobalStyle from 'GlobalStyle';
import { Wrapper } from 'style/Wrapper';

function App() {
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
