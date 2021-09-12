import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import InputPostalCode from "../templates/InputPostalCode";
import ErrorMessage from "../components/ErrorMessage";
import SearchResult from "../templates/SearchResult";
import { POSTAL_AREA_CODE_LENGTH, LOCAL_AREA_CODE_LENGTH } from '../constants';
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

const Address = () => {
  const [postalAreaCode, setPostalAreaCode] = useState('');
  const [localAreaCode, setLocalAreaCode] = useState('');
  const [isInputModeError, setIsInputModeError] = useState(false);
  const [isInvalidPostalCode, setIsInvalidPostalCode] = useState(false);

  const [isSearchClickable, setIsSearchClickable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [address3, setAddress3] = useState('');

  useEffect(() =>{
    if (postalAreaCode.length === POSTAL_AREA_CODE_LENGTH && localAreaCode.length === LOCAL_AREA_CODE_LENGTH) {
      setIsSearchClickable(true);
    } else {
      setIsSearchClickable(false);
    }
  },[postalAreaCode, localAreaCode]);

  const serchAddress = async () => {
    setIsLoading(true);
    setIsInvalidPostalCode(false)

    const fullPostalCode = postalAreaCode + localAreaCode;
    const response = await API.Address.get(fullPostalCode);

    if (response.results) {
      setAddress1(response.results[0].address1);
      setAddress2(response.results[0].address2);
      setAddress3(response.results[0].address3);
      setIsLoading(false);
    } else {
      setIsLoading(false);
      setIsInvalidPostalCode(true);
    }
  }

  const inputPostalAreaCode = e => {
    checkInputMode(e.target.value);
    setPostalAreaCode(e.target.value);
  }

  const inputLocalAreaCode = e => {
    checkInputMode(e.target.value);
    setLocalAreaCode(e.target.value);
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
    setAddress1(e.target.value);
  }

  const inputAddress2 = e => {
    setAddress2(e.target.value);
  }

  const inputAddress3 = e => {
    setAddress3(e.target.value);
  }

  const isErrorShown = isInputModeError || isInvalidPostalCode;
  const errorMessage = isInputModeError ? "半角数字で入力してください" : "無効な郵便番号です";

  return (
    <Wrapper>
      <Caption>郵便番号を入力してください</Caption>

      <InputPostalCode
        inputPostalAreaCode={inputPostalAreaCode}
        postalAreaCode={postalAreaCode}
        inputLocalAreaCode={inputLocalAreaCode}
        localAreaCode={localAreaCode}
        isSearchClickable={isSearchClickable}
        onClickSearchBtn={serchAddress}
      />

      {isErrorShown && <ErrorMessage innerText={errorMessage} />}

      <SearchResult
        inputAddress1={inputAddress1}
        inputAddress2={inputAddress2}
        inputAddress3={inputAddress3}
        address1={address1}
        address2={address2}
        address3={address3}
      />

      {isLoading && (
        <Loading><img src={`${process.env.PUBLIC_URL}/loading.gif`} alt="" /></Loading>
      )}
    </Wrapper>
  );
};

export default Address;
