import styled from "styled-components";

export const Container = styled.div`
  background: #121214;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      width: 15%;
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #f1c40f;
      max-width: 100%;
    }

    a {
      font-weight: bold;
      color: #fff;
      margin-right: 15px;
      padding-left: 15px;

      & + a {
        border-left: 0.5px solid #f1c40f;
      }

      &:hover {
        opacity: 0.9;
      }
    }
    @media (max-width: 768px) {
      img {
        border-right: 0px;
        width: 30%;
        max-width: 100%;
      }
      a {
        display: none;
      }

      nav {
        display: flex;
        flex-direction: column;
      }
    }
  }

  aside {
    display: flex;
    align-items: center;

    button {
      background: none;
      border: 0;
    }

    #menu {
      display: none;
    }

    @media (max-width: 768px) {
      justify-content: space-between;
      button {
        margin-right: -60px;
      }
      #menu {
        display: block;
        color: #fff;
        opacity: 0.9;
      }
      #selectlangweb {
        display: none;
      }
    }
  }

  @media (max-width: 768px) {
    max-height: 120px;
  }
`;

export const MenuMobile = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;

    width: 100%;
    height: auto;
    margin-top: 0px;
    padding: 0px 0px 0px 0;

    #links {
      display: flex;
      justify-content: space-between;
      margin-top: -40px;
    }

    #select {
      align-self: flex-end;
      margin-top: -10px;
    }

    border: 0;
    a {
      font-weight: normal;
      font-size: 12px;
      color: #fff;
      margin-right: 10px;
      padding-left: 20px;

      & + a {
        border-left: 0.5px solid #eee;
      }

      &:hover {
        opacity: 0.9;
      }
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #f1c40f;

  svg {
    color: #fff;
    opacity: 0.5;
  }

  div {
    display: flex;
    flex-direction: column;
    width: 70px;
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #fff;
      opacity: 0.9;

      &:hover {
        opacity: 0.9;
      }
    }
  }
  @media (max-width: 768px) {
    div {
      display: none;
    }
    #account-ico {
      display: none;
    }
  }
`;

export const ContainerLanguage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 82px;
  margin-top: 50px;
  @media (max-width: 768px) {
    #languagesweb {
      display: none;
    }
    #languageweb {
      display: none;
    }
  }
`;

export const SelectLanguage = styled.div`
  width: 120px;
  display: flex;
  align-items: center;
  padding: 3px 5px;
  justify-content: space-between;
  border: 1px solid #243943;
  background: #20333c;
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
  background: #20333c;

  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3px 5px;
    color: #fff;

    img {
      width: 16px;
      margin-right: 5px;
    }
  }
`;
