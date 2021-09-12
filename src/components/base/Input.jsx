import React from "react";
import styled from 'styled-components';

const InputBox = styled.input`
  height: 50px;
  border: none;
  font-size: 20px;
  letter-spacing: 1px;
`;

const Input = props => {
  const { maxlength, handleInput, className, value } = props;
  return (
    <>
      <InputBox type="text" maxLength={maxlength ?? ""} value={value} className={className} onChange={handleInput} />
    </>
  );
};

export default Input;
