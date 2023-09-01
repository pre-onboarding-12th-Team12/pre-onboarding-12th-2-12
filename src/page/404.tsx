import { styled } from 'styled-components';

const NotFound = () => {
  return (
    <Wrapper>
      <Title>404</Title>
      <Content>페이지를 찾을 수 없습니다.</Content>
    </Wrapper>
  );
};

export default NotFound;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
`;

const Title = styled.h1`
  font-size: 8rem;
  font-weight: bold;
`;

const Content = styled.h1`
  font-size: 2rem;
`;
