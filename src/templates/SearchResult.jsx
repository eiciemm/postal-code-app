import React from "react";
import styled from 'styled-components';
import Input from "../components/base/Input";
import { Colors } from '../assets/Colors';

const Wrapper = styled.div`
  width: 100%;
  margin: 8px auto 0;
`;

const Address = styled.div`
  width: 100%;
  margin: 12px 0;
  padding: 8px;
  display: flex;
  align-items: center;
`;

const Title = styled.p`
  width: 15%;
  font-size: 14px;
  margin: 0 8px 0 0;
`;

const StyledInput = styled(Input)`
  width: 80%;
  text-align: left;
  border: 2px solid ${Colors.gray};
  border-radius: 4px;
  padding-left: 8px;
`;

const SearchResult = props => {
  const {
    inputAddress1,
    inputAddress2,
    inputAddress3,
    address1Value,
    address2Value,
    address3Value
  } = props;

  return (
    <Wrapper>
      <Address>
        <Title>都道府県</Title>
        <StyledInput value={address1Value} handleInput={inputAddress1} />
      </Address>
      <Address>
        <Title>市区町村</Title>
        <StyledInput value={address2Value} handleInput={inputAddress2} />
      </Address>
      <Address>
        <Title>番地</Title>
        <StyledInput value={address3Value} handleInput={inputAddress3} />
      </Address>
    </Wrapper>
  );
};

export default SearchResult;
