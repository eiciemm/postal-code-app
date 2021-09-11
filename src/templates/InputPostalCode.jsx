import React from "react";
import styled from 'styled-components';
import Input from "../components/base/Input";
import Button from "../components/base/Button";
import { Colors } from '../assets/Colors';

const Wrapper = styled.div`
  width: 100%;
  margin: 8px auto 0;
  display: flex;
  align-items: center;
`;

const InputWrapper = styled.div`
  width: 80%;
  margin: 12px 0;
  padding: 8px;
  background: ${Colors.gray};
  border-radius: 4px;
  display: flex;
  align-items: center;
  > p {
    font-size: 30px;
    margin: 0 20px;
  }
`;

const StyledInput = styled(Input)`
  width: 50%;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  width: 20%;
  margin-left: 8px;
`;

const InputPostalCode = props => {
  const { inputPostalAreaCode, inputLocalAreaCode, postalAreaCodeValue, localAreaCodeValue, isSearchClickable, onClickSearchBtn } = props;
  return (
    <Wrapper>
      <InputWrapper>
        <StyledInput maxlength={3} handleInput={inputPostalAreaCode} value={postalAreaCodeValue} />
        <p>-</p>
        <StyledInput maxlength={4} handleInput={inputLocalAreaCode} value={localAreaCodeValue} />
      </InputWrapper>
      <ButtonWrapper>
        <Button onClick={onClickSearchBtn} isActive={isSearchClickable} innertext="住所検索" />
      </ButtonWrapper>
    </Wrapper>
  );
};

export default InputPostalCode;
