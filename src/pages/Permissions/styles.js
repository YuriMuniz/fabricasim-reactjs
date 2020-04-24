import styled from "styled-components";

import PerfectScrollbar from "react-perfect-scrollbar";

export const InputGroup = styled.div`
  width: 600px;
  display: flex;
`;

export const Container = styled.div`
  max-width: 800px;
  margin: 50px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  form {
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      width: 500px;
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
  position: absolute;
  width: 500px;
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

export const SelectedUser = styled.div`
  margin-top: 30px;
  width: 500px;
  margin-left: -10px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 15px 5px;
`;

export const Data = styled.div`
  color: rgba(255, 255, 255, 0.7);
  padding: 10px;
  font-size: 16px;

  button {
    width: 100%;
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

  p {
    margin-bottom: 15px;
  }
`;

export const Checkbox = styled.div`
  color: rgba(255, 255, 255, 0.7);
  p {
    display: flex;
    align-items: center;

    & + p {
      margin-top: 4px;
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
