import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
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
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
      max-width: 100%;
    }

    a {
      font-weight: bold;
      color: #243943;
      margin-right: 15px;
      padding-left: 15px;

      & + a {
        border-left: 0.5px solid #eee;
      }

      &:hover {
        opacity: 0.9;
      }
    }
    @media (max-width: 768px) {
      img {
        border-right: 0px;
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
    justify-content: space-between;
    background: #243943;
    width: 100%;
    height: auto;
    margin-top: 5px;
    padding: 15px 0px 10px 0;

    border-radius: 4px 4px 0px 0px;
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
  border-left: 1px solid #eee;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #243943;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #6095b2;
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
