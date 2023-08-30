import styled, { css } from 'styled-components';

export const WrapperStyle = css`
  width: 700px;
  padding: 60px 20px;
  background-color: var(--bg);
  border-radius: 20px;
  box-sizing: border-box;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  ${WrapperStyle}
`;
