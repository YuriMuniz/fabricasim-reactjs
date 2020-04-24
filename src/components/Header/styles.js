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
      }
      a {
        display: none;
      }
    }
  }

  aside {
    display: flex;
    align-items: center;

    #menu {
      display: none;
    }
    @media (max-width: 768px) {
      #menu {
        display: block;
        margin-left: 30px;
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
