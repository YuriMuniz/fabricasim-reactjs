import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
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

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

    select {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      font-size: 14px;
      color: rgba(255, 255, 255, 0.7);
      margin: 0 0 10px;

      option {
        color: rgba(255, 255, 255, 0.7);
        background: #243943;
        display: flex;
        white-space: pre;
        min-height: 20px;
        padding: 0px 2px 1px;
      }
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #6095b2;
      font-weight: bold;
      color: rgba(255, 255, 255, 0.7);
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, "#91CBDA")};
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;
      margin-bottom: 30px;

      &:hover {
        opacity: 1;
      }
    }
  }
  > button {
    width: 100%;
    margin: 5px 0 0;
    height: 44px;
    background: #f64c75;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.7);
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;
    margin-bottom: 50px;

    &:hover {
      background: ${darken(0.05, "#f64c75")};
    }
  }
`;
