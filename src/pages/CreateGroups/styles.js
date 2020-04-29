import styled from "styled-components";

import { darken } from "polished";

import PerfectScrollbar from "react-perfect-scrollbar";

export const Container = styled.div`
  max-width: 600px;
  margin: 20px auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  input {
    width: 100%;
    background: rgba(0, 0, 0, 0.1);
    border: 0;
    border-radius: 4px;
    height: 44px;
    padding: 0px 40px;
    color: #fff;
    margin: 5px 0 10px 5px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
  }

  svg {
    margin-right: -35px;
    margin-bottom: -7px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 30%;
  #button-register-user {
    margin: 5px 5px 10px 0;
    width: 50px;
    height: 44px;
    background: #6095b2;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.7);
    border: 0;
    border-radius: 4px;
    margin-right: -40px;

    font-size: 14px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, "#6095b2")};
    }

    svg {
      margin-left: -35px;
    }
  }

  #button-register-group {
    margin: 5px 5px 10px 0;
    height: 44px;
    width: 50px;
    background: #6095b2;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.7);
    border: 0;
    border-radius: 4px;
    margin-right: -50px;
    font-size: 14px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, "#6095b2")};
    }

    svg {
      margin-left: -35px;
    }
  }
`;

export const InputGroup = styled.div`
  width: 70%;
  margin-right: 20px;
`;

export const Table = styled.div`
  ul {
    margin-left: -5px;
  }

  li {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: rgba(0, 0, 0, 0.1);
    border: 0;
    border-radius: 4px;
    height: 44px;
    margin: 10px 0;
    transition: background 0.2s;

    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }

    &:hover {
      background: rgba(0, 0, 0, 0.2);
    }

    h5 {
      color: rgba(255, 255, 255, 0.7);
      padding: 10px;
    }
    #description {
      width: 70%;
    }

    #timestamp {
      width: 20%;
    }

    button {
      background: none;
      border: 0;
      border-radius: 30%;
      color: rgba(255, 255, 255, 0.7);
      &:hover {
        color: rgba(255, 255, 255, 0.9);
      }
    }
  }
`;

export const NewGroup = styled.div`
  max-width: 600px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 15px;

  form {
    margin-top: 15px;
    input {
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }
    textarea {
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      height: 120px;
      padding: 10px 15px;
      resize: none;
      color: #fff;
      margin: 0 0 10px;
      font-size: 16px;
      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

    h3 {
      color: #fff;
    }
  }
`;
export const HeaderGroup = styled.div`
  display: flex;
  border: 0;

  margin: 10px 0 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  justify-content: space-between;
  h1 {
    margin: 10px 0 20px;
    color: #fff;
  }

  button {
    background: none;
    border: none;
  }
`;

export const Principal = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Members = styled.div`
  margin: 10px 0px;
  display: flex;
  flex-direction: column;

  input {
    margin-top: 15px;
    width: 90%;
  }

  svg {
    width: 10%;
    color: rgba(255, 255, 255, 0.9);
    border: 0;

    cursor: pointer;

    &:hover {
      color: rgba(255, 255, 255, 0.7);
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    align-items: center;
    padding: 10px;
    margin: 5px 5px 10px 0;
    height: 44px;
    background: #6095b2;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.7);
    border: 0;
    border-radius: 4px;

    font-size: 14px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, "#6095b2")};
    }
    & + button {
      background: none;

      &:hover {
        background: none;
        color: rgba(255, 255, 255, 0.9);
      }
    }
  }
`;

export const EditGroup = styled.div`
  max-width: 600px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 15px;

  hr {
    border: 0;
    height: 1px;
    background: rgba(255, 255, 255, 0.2);
    margin: 10px 0 20px;
  }

  form {
    margin-top: 15px;
    input {
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }
    textarea {
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 10px 15px;
      color: #fff;
      margin: 0 0 10px;
      font-size: 16px;
      resize: none;
      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }
  }
  h3 {
    color: #fff;
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 120px;

  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const CurrentMembers = styled.div`
  background: rgba(0, 0, 0, 0.2);
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0px;
  padding: 10px 10px;
  border: 0;
  border-radius: 4px;
  svg {
    width: 10%;
  }

  select {
    width: 30%;
  }

  div {
    width: 30%;
    display: flex;
    flex-direction: column;
    color: rgba(255, 255, 255, 0.7);
  }
`;
export const AddMembers = styled.div`
  input {
    background: rgba(0, 0, 0, 0.2);
    border: 0;
    border-radius: 4px;
    height: 44px;
    padding: 0 15px;
    color: #fff;
    margin: 0 0 10px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
  }
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

export const RegisterUser = styled.div`
  max-width: 600px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 15px;

  hr {
    border: 0;
    height: 1px;
    background: rgba(255, 255, 255, 0.2);
    margin: 10px 0 20px;
  }

  form {
    margin: 15px 15px;

    align-items: center;
  }
`;

export const UserData = styled.div`
  input {
    background: rgba(0, 0, 0, 0.2);
    width: 250px;
    border: 0;
    border-radius: 4px;
    height: 44px;
    padding: 0 15px;
    color: #fff;
    margin: 10px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
  }

  select {
    background: rgba(0, 0, 0, 0.2);
    width: 250px;
    border: 0;
    border-radius: 4px;
    height: 44px;
    padding: 0 15px;
    color: #fff;
    margin: 10px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
  }
`;
