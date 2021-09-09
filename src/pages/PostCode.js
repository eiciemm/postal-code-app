import React, { useEffect } from "react";
import styled from 'styled-components';

const Wrapper = styled.div``;

//https://www.wetch.co.jp/only-numbers-input/
//これが半角数字にする処理の見本

const PostCode = () => {
  useEffect(() =>{},[]);

  return (
    <Wrapper>
      <p>郵便番号をご入力ください</p>
      <input type="tel" name="sample" id="form-ticker-symbol" maxlength="3" pattern="^[0-9]+$"/>
      <input type="tel" name="sample" id="form-ticker-symbol" maxlength="4" pattern="^[0-9]+$"/>
      <button>住所検索</button>
    </Wrapper>
  );
};

export default PostCode;
