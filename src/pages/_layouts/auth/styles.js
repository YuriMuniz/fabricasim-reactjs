import styled from "styled-components";

import { darken } from "polished";

export const Wrapper = styled.div`
  height: 100%;
  background: #243943;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  margin-top: 30px;
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    height: 100%;

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
      background: ${(props) => (props.disabled ? "#6095b2" : "#6095b2")};
      font-weight: bold;
      color: rgba(255, 255, 255, 0.7);
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${(props) =>
          props.disabled ? "#6095b2" : darken(0.03, "#6095b2")};
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

  @media (max-width: 768px) {
    height: 100%;
  }

  @media (max-width: 330px) {
    height: 100%;
    background: #243943;

    form {
      background: #243943;
    }
  }
`;
