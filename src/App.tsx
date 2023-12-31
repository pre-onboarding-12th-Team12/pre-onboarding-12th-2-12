import { Outlet } from 'react-router-dom';
import GlobalStyle from 'GlobalStyle';
import { Wrapper } from 'style/Wrapper';
import Header from 'components/UI/Header';

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <Outlet />
      </Wrapper>
    </>
  );
}

export default App;
