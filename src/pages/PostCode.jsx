import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import InputPostalCode from "../templates/InputPostalCode";
import ErrorMessage from "../components/ErrorMessage";
import SearchResult from "../templates/SearchResult";
import { API } from '../api/API';

const Wrapper = styled.div`
  width: 92%;
  margin: 20px auto;
  position: relative;
`;

const Caption = styled.p`
  font-size: 14px;
  margin: 0;
`;

const Loading = styled.div`
  position: absolute;
  top: 190px;
  left: calc(50% - 30px);
  > img {
    width: 60px;
  }
`;

const PostCode = () => {
  const [postalAreaCodeValue, setPostalAreaCodeValue] = useState('');
  const [localAreaCodeValue, setLocalAreaCodeValue] = useState('');
  const [isInputModeError, setIsInputModeError] = useState(false);
  const [isInvalidPostalCode, setIsInvalidPostalCode] = useState(false);

  const [isSearchClickable, setIsSearchClickable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [address1Value, setAddress1Value] = useState('');
  const [address2Value, setAddress2Value] = useState('');
  const [address3Value, setAddress3Value] = useState('');

  useEffect(() =>{
    if (postalAreaCodeValue.length === 3 && localAreaCodeValue.length === 4) {
      setIsSearchClickable(true);
    } else {
      setIsSearchClickable(false);
    }
  },[postalAreaCodeValue, localAreaCodeValue]);

  const serchAddress = async () => {
    setIsLoading(true);
    setIsInvalidPostalCode(false)
    const fullPostalCode = postalAreaCodeValue + localAreaCodeValue;
    const response = await API.Address.get(fullPostalCode);
    if (response.results) {
      setAddress1Value(response.results[0].address1);
      setAddress2Value(response.results[0].address2);
      setAddress3Value(response.results[0].address3);
      setIsLoading(false);
    } else {
      setIsInvalidPostalCode(true);
      setIsLoading(false);
    }
  }

  const inputPostalAreaCode = e => {
    checkInputMode(e.target.value);
    setPostalAreaCodeValue(e.target.value);
  }

  const inputLocalAreaCode = e => {
    checkInputMode(e.target.value);
    setLocalAreaCodeValue(e.target.value);
  }

  const checkInputMode = inputValue => {
    const isError = isNaN(inputValue);
    if (isError) {
      setIsInputModeError(true);
    } else {
      setIsInputModeError(false);
    }
  }

  const inputAddress1 = e => {
    setAddress1Value(e.target.value);
  }

  const inputAddress2 = e => {
    setAddress2Value(e.target.value);
  }

  const inputAddress3 = e => {
    setAddress3Value(e.target.value);
  }

  const isErrorShown = isInputModeError || isInvalidPostalCode;
  const errorMessage = isInputModeError ? "半角数字で入力してください" : "無効な郵便番号です";

  return (
    <Wrapper>
      <Caption>郵便番号を入力してください</Caption>

      <InputPostalCode
        inputPostalAreaCode={inputPostalAreaCode}
        postalAreaCodeValue={postalAreaCodeValue}
        inputLocalAreaCode={inputLocalAreaCode}
        localAreaCodeValue={localAreaCodeValue}
        isSearchClickable={isSearchClickable}
        onClickSearchBtn={serchAddress}
      />

      {isErrorShown && <ErrorMessage innerText={errorMessage} />}

      <SearchResult
        inputAddress1={inputAddress1}
        inputAddress2={inputAddress2}
        inputAddress3={inputAddress3}
        address1Value={address1Value}
        address2Value={address2Value}
        address3Value={address3Value}
      />

      {isLoading && (
        <Loading><img src={`${process.env.PUBLIC_URL}/loading.gif`} alt="" /></Loading>
      )}
    </Wrapper>
  );
};

export default PostCode;
