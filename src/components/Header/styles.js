import styled from "styled-components";

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.1);
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
      color: rgba(255, 255, 255, 0.7);
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
        color: #fff;
        opacity: 0.9;
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

    width: 100%;
    height: auto;
    margin-top: 5px;
    padding: 15px 0px 10px 0;

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
  border-left: 1px solid #eee;

  svg {
    color: #fff;
    opacity: 0.5;
  }

  div {
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
