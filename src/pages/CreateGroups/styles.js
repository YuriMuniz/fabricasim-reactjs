import styled, { keyframes } from "styled-components";

import { darken } from "polished";

import PerfectScrollbar from "react-perfect-scrollbar";

export const Container = styled.div`
  max-width: 600px;
  margin: 20px auto;
  background: #243943;
`;

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
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
    margin: 5px 5px 10px -20px;
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
      width: 30px;
      height: 30px;
    }
  }

  #button-register-group {
    margin: 5px 0px 10px 0px;
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
      width: 30px;
      height: 30px;
    }
  }

  @media (max-width: 768px) {
    margin-right: 20px;

    #button-register-user {
      height: 40px;
      width: 40px;
      svg {
        width: 25px;
        height: 25px;
      }
    }
    #button-register-group {
      height: 40px;
      width: 40px;
      svg {
        width: 25px;
        height: 25px;
      }
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
  small {
    display: none;
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

    h5 {
      color: rgba(255, 255, 255, 0.7);
      padding: 10px;
    }
    #description {
      width: 60%;
    }

    #timestamp {
      width: 20%;
    }

    #edit {
      width: 5%;
    }

    #addmembers {
      width: 15%;
      display: none;
      font-size: 12px;
      background: #6095b2;
      border-radius: 4px;
      padding: 5px;
    }
    #addcourses {
      width: 15%;
      display: none;
      font-size: 12px;
      background: #6095b2;
      border-radius: 4px;
      margin-left: 5px;
      padding: 5px;
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

    &:hover {
      background: rgba(0, 0, 0, 0.2);

      #timestamp {
        display: none;
      }
      #addmembers {
        display: block;
      }
      #addcourses {
        display: block;
      }
    }

    @media (max-width: 768px) {
      #addmembers {
        font-size: 10px;
      }
      #addcourses {
        font-size: 10px;
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
  span {
    color: #fb6f91;
    align-self: flex-start;
    margin: 0 0 10px;
    font-weight: bold;
  }
`;
export const Courses = styled.div`
  margin: 0px 0px;
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

export const Members = styled.div`
  margin: 10px 0px;
  display: flex;
  flex-direction: column;
  width: 100%;

  #scrollmembers {
    max-height: 150px;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    display: flex;
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

    svg {
      animation: ${rotate} 2s linear infinite;
      margin-left: 5px;
      color: rgba(255, 255, 255, 0.7);
    }

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

export const EditGroupAddMembers = styled.div`
  max-width: 600px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 15px;

  h3 {
    color: #fff;
  }

  hr {
    border: 0;
    height: 1px;
    background: rgba(255, 255, 255, 0.2);
    margin: 10px 0 20px;
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 450px;
  padding-right: 10px;
`;

export const NotFoundUser = styled.div`
  background: rgba(0, 0, 0, 0.2);
  height: 44px;
  display: flex;

  align-items: center;
  padding: 0 10px;
  border: 0;
  border-radius: 4px;

  svg {
    width: 10%;
    color: #fff;
  }
  h5 {
    width: 70%;
    color: #fff;
    font-weight: normal;
  }

  div {
    width: 20%;
    button {
      margin-left: 10px;
      height: 32px;
      width: 40px;
      background: #6095b2;

      color: rgba(255, 255, 255, 0.7);
      border: 0;
      border-radius: 4px;

      font-size: 14px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, "#6095b2")};
      }
    }
  }
`;

export const CurrentMembers = styled.div`
  background: rgba(0, 0, 0, 0.2);
  min-height: 44px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 0;
  border-radius: 4px;

  ul {
    width: 100%;
    li {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 0;
      svg {
        color: #fff;
        width: 10%;
      }
      span {
        color: #fff;
        width: 30%;
      }
      button {
        background: none;

        color: rgba(255, 255, 255, 0.7);
        border: 0;
        border-radius: 4px;
        margin-right: 10px;
        font-size: 14px;
        transition: background 0.2s;

        svg {
          width: 20px;
          height: 20px;
        }
      }

      & + li {
        border-top: 0.5px solid #eee;
      }
    }
  }

  h4 {
    color: #fff;
  }
`;
export const AddCourses = styled.div`
  /* select {
    background: rgba(0, 0, 0, 0.2);
    border: 0;
    border-radius: 4px;
    height: 44px;
    padding: 0 0;
    color: #fff;

    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
  } */
`;

export const AddMembers = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  form {
    display: flex;
    flex-direction: row;
    width: 100%;

    input {
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      margin-top: 15px;
      width: 90%;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }
    button {
      width: 8%;
      height: 44px;
      margin: 15px 0 0 10px;
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
    }

    svg {
      width: 30px;
      height: 30px;
    }
  }
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
  display: flex;
  height: 100%;

  span {
    color: #fb6f91;
    align-self: flex-start;
    margin: 0 0 10px;
    font-weight: bold;
  }
  div {
    display: flex;
    flex-direction: column;
  }
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
    border: 0;
    width: 250px;
    border-radius: 4px;
    height: 44px;
    padding: 0 15px;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.7);
    margin: 10px;

    option {
      color: rgba(255, 255, 255, 0.7);
      background: #243943;
      display: flex;
      white-space: pre;
      min-height: 20px;
      padding: 0px 2px 1px;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const EditGroupAddCourses = styled.div`
  max-width: 600px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 15px;

  h3 {
    color: #fff;
  }

  hr {
    border: 0;
    height: 1px;
    background: rgba(255, 255, 255, 0.2);
    margin: 10px 0 20px;
  }
`;

export const CoursesEdit = styled.div`
  margin: 10px 0px;
  display: flex;
  flex-direction: column;
  width: 100%;

  #scrollcourses {
    max-height: 150px;
  }
`;

export const AddCoursesEdit = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  form {
    display: flex;
    flex-direction: row;
    width: 100%;

    input {
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      margin-top: 15px;
      width: 90%;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }
    button {
      width: 8%;
      height: 44px;
      margin: 15px 0 0 10px;
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
    }

    svg {
      width: 30px;
      height: 30px;
    }
  }
`;

export const CurrentCourses = styled.div`
  background: rgba(0, 0, 0, 0.2);
  min-height: 44px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 0;
  border-radius: 4px;

  ul {
    width: 100%;
    li {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 10px 0;
      img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
      }
      span {
        color: #fff;
        width: 30%;
      }
      button {
        background: none;

        color: rgba(255, 255, 255, 0.7);
        border: 0;
        border-radius: 4px;
        margin-right: 10px;
        font-size: 14px;
        transition: background 0.2s;

        svg {
          width: 20px;
          height: 20px;
        }
      }

      & + li {
        border-top: 0.5px solid #eee;
      }
    }
  }

  h4 {
    color: #fff;
  }
`;
