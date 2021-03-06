import styled from "styled-components";

export const ContainerLanguage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 82px;
  margin-top: 50px;
  @media (max-width: 768px) {
    margin-top: 0px;
    margin-right: -20px;
  }
`;

export const SelectLanguage = styled.div`
  width: 120px;
  display: flex;
  align-items: center;
  padding: 3px 5px;
  justify-content: space-between;
  border: 1px solid #f1c40f;
  background: #121214;
  color: #fff;

  div {
    display: flex;
    align-items: center;
    img {
      margin-right: 5px;
      width: 16px;
    }
  }
  button {
    color: #fff;
    border: 0;
    background: none;
  }
`;

export const LanguageItems = styled.div`
  z-index: 99999;
  display: flex;
  flex-direction: column;
  width: 120px;
  height: 55px;
  hr {
    height: 1px;
    color: #eee;
  }
`;

export const LanguageItem = styled.div`
  background: #121214;

  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3px 5px;
    color: #fff;
    background: none;
    border: none;

    img {
      width: 16px;
      margin-right: 5px;
    }
  }
`;
