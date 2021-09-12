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
  margin: 16px 0;
  display: flex;
  align-items: center;
`;

const Title = styled.p`
  width: 80px;
  font-size: 14px;
  margin: 0 8px 0 0;
`;

const StyledInput = styled(Input)`
  width: calc(100% - 100px);
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
    address1,
    address2,
    address3
  } = props;

  return (
    <Wrapper>
      <Address>
        <Title>都道府県</Title>
        <StyledInput value={address1} handleInput={inputAddress1} />
      </Address>
      <Address>
        <Title>市区町村</Title>
        <StyledInput value={address2} handleInput={inputAddress2} />
      </Address>
      <Address>
        <Title>番地</Title>
        <StyledInput value={address3} handleInput={inputAddress3} />
      </Address>
      <Address>
        <Title>建物名</Title>
        <StyledInput />
      </Address>
    </Wrapper>
  );
};

export default SearchResult;
