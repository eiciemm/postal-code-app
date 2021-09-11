import React from "react";
import styled from 'styled-components';
import { Colors } from '../assets/Colors';

const Wrapper = styled.div`
  padding: 8px 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  background: ${Colors.red};
  color: ${Colors.white};
`;

const ErrorMessage = props => {
  const { className, innerText } = props;
  return (
    <Wrapper className={className}>
      <p>{innerText}</p>
    </Wrapper>
  );
};

export default ErrorMessage;
