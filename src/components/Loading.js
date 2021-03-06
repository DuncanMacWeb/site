import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';

const Wrapper = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  position: absolute;
  align-items: center;
  background-color: #FFF;
  justify-content: center;
`;

const Loading = () => (
  <Wrapper>
    <Logo size="100px" rotate />
  </Wrapper>
);

export default Loading;
