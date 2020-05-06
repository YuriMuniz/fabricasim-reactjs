import styled, { keyframes } from "styled-components";

import PerfectScrollbar from "react-perfect-scrollbar";
import { darken } from "polished";

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;

export const IconSpinner = styled.div`
  margin-top: 5px;
  svg {
    animation: ${rotate} 2s linear infinite;
    align-items: center;
    margin-left: -30px;

    color: rgba(255, 255, 255, 0.7);
  }
`;

export const InputGroup = styled.div`
  width: 100%;
  display: flex;
`;

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 400px) {
    margin: 10px auto;
  }

  form {
    margin-top: 30px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    input {
      background: rgba(0, 0, 0, 0.1);
      width: 80%;
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0px 50px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }
    button {
      padding: 10px;
      width: 15%;
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
    }

    svg {
      margin-right: -40px;
      margin-top: 7px;
    }
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 350px;
  padding: 5px 15px;
`;

export const Users = styled.div`
  width: 100%;
  margin-left: -10px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 15px 5px;
`;

export const User = styled.ul`
  & + div {
    margin-top: 4px;
    padding-top: 4px;
    border-top: 1px solid #fff;
    color: #fff;
  }
  span {
    color: rgba(255, 255, 255, 0.7);
  }

  li {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.7);
    height: 40px;
    padding-top: 12px;
    font-size: 16px;
    &:hover {
      opacity: 0.7;
      & + li {
        border-top: 1px solid rgba(255, 255, 255, 0.7);
      }
    }

    & + li {
      margin-top: 4px;
      padding-top: 12px;
      border-top: 1px solid #fff;
    }
  }
`;

export const ContentUser = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SelectedUser = styled.div`
  margin-top: 30px;
  width: 100%;
  margin-left: -10px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 15px 5px;

  button {
    width: 100%;
    max-width: 500px;
    align-self: center;
    margin: 20px 0 0;
    height: 44px;
    background: #6095b2;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.7);
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2;
  }

  @media (max-width: 768px) {
    margin-left: 0px;
  }
`;

export const Data = styled.div`
  color: rgba(255, 255, 255, 0.7);
  padding: 10px;

  p {
    margin-bottom: 15px;
  }
`;

export const Checkbox = styled.div`
  padding: 10px;
  color: rgba(255, 255, 255, 0.7);

  p {
    display: flex;
    justify-content: space-between;

    & + p {
      margin-top: 6px;
      padding-top: 10px;
      border-top: 1px solid rgba(255, 255, 255, 0.7);
    }
  }

  span {
    margin-right: 5px;
  }

  input {
    width: 16px;
    height: 16px;
  }
`;
