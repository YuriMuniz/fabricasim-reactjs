import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: 760px) {
    form {
      height: 450px;
    }
  }

  @media (max-height: 501px) {
    height: 130%;
    background: #243943;
    form {
      margin: 10px 5px;
    }
  }

  @media (max-width: 330px) {
    form {
      height: 350px;

      input {
        font-size: 12px;
      }
      button {
        font-size: 12px;
      }
      a {
        font-size: 12px;
      }
    }
  }
`;

export const Images = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -50px;
  height: 60px;
`;

export const Select = styled.select`
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
`;

export const SelectState = styled.select`
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

  display: ${(props) => (props.isBr ? "block" : "none")};
`;

export const InputState = styled.input`
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

  display: ${(props) => (props.isBr ? "none" : "block")};
`;
