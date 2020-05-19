import styled, { keyframes } from "styled-components";

import { darken } from "polished";

import PerfectScrollbar from "react-perfect-scrollbar";

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;

export const Container = styled.div`
  max-width: 600px;
  margin: 20px auto;
  background: #243943;
`;

export const SpinnerTable = styled.div`
  display: flex;
  justify-content: center;
  svg {
    animation: ${rotate} 2s linear infinite;
    margin-left: 5px;
    color: #fff;
    margin-top: 50px;
  }
`;

export const Checkbox = styled.div`
  color: rgba(255, 255, 255, 0.7);

  p {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & + p {
      border-top: 1px solid rgba(255, 255, 255, 0.7);
    }
    &:hover {
      color: rgba(255, 255, 255, 0.9);
    }
  }

  span {
    font-size: 12px;
    margin-right: 5px;
  }

  input {
    width: 16px;
    height: 16px;
  }
`;

export const CheckboxEdit = styled.div`
  color: rgba(255, 255, 255, 0.7);

  p {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;

    & + p {
      border-top: 1px solid rgba(255, 255, 255, 0.7);
    }
    &:hover {
      color: rgba(255, 255, 255, 0.9);
    }
  }

  span {
    font-size: 12px;
    margin-right: 5px;
  }

  input {
    width: 16px;
    height: 16px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 10px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
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

    svg {
      width: 30px;
      height: 30px;
    }
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
    margin-right: 15px;

    #button-register-user {
      margin-left: -40px;
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

  @media (max-width: 330px) {
    margin-right: 15px;
    #button-register-user {
      margin-right: 0px;
      height: 40px;
      width: 40px;
      svg {
        width: 25px;
        height: 25px;
      }
    }
    #button-register-group {
      margin-left: -40px;
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
  width: 80%;

  input {
    width: 100%;
    background: rgba(0, 0, 0, 0.1);
    border: 0;
    border-radius: 4px;
    height: 44px;
    padding: 0px 40px;
    color: #fff;

    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
  }

  svg {
    margin-right: -35px;
    margin-bottom: -7px;
  }

  @media (max-width: 330px) {
    input {
      font-size: 12px;
    }
  }
`;

export const Table = styled.div`
  margin-top: 10px;
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
    div {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      height: 44px;
      width: 50%;
      padding: 10px;
      h5 {
        color: rgba(255, 255, 255, 0.7);
      }
      span {
        font-size: 12px;
        color: rgba(255, 255, 255, 0.7);
      }
      #owner {
        margin-top: 3px;
        font-size: 10px;
        color: rgba(255, 255, 255, 0.7);
      }
    }

    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }

    h5 {
    }

    #timestamp {
      width: 20%;
      color: rgba(255, 255, 255, 0.7);
      padding: 10px;
    }

    #edit {
      width: 10%;
    }

    #addmembers {
      width: 20%;
      display: none;
      font-size: 12px;
      background: #6095b2;
      border-radius: 4px;
      padding: 5px;
    }
    #addcourses {
      width: 20%;
      display: none;
      font-size: 12px;
      background: #6095b2;
      border-radius: 4px;
      margin: 0px 10px;
      padding: 5px;
    }
    #addfabricoin {
      width: 10%;
      display: none;
      font-size: 14px;
      background: #6095b2;
      border-radius: 4px;
      margin: 0px 10px;
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
      #addfabricoin {
        display: block;
      }
    }

    @media (max-width: 768px) {
      div {
        span {
          font-size: 10px;
        }
        #owner {
          font-size: 8px;
        }
      }

      #timestamp {
        display: none;
      }
      #addmembers {
        display: block;
        font-size: 10px;
        padding: 3px;
        width: 70px;
        margin: 0px 5px;
      }
      #addcourses {
        display: block;
        font-size: 10px;
        margin: 0px 5px;
        padding: 3px;
      }
      #addfabricoin {
        display: block;
        font-size: 10px;
        padding: 3px;
        margin-left: -12px;
      }
    }
  }
`;

export const TitleUser = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    color: rgba(255, 255, 255, 0.7);
    font-size: 12px;
  }
`;

export const AddFabricoin = styled.div`
  max-width: 600px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 15px;

  h3 {
    color: #fff;
  }

  h4 {
    color: #fff;
  }

  h5 {
    margin: 20px 0 0 0;
    color: rgba(255, 255, 255, 0.7);
  }

  form {
    display: flex;
    flex-direction: column;
    input {
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 10px 0 5px 0;

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
      margin: 10px 0 10px;
    }

    h2 {
      color: #fff;
    }
    h3 {
      color: #fff;
    }
  }
`;

export const NewGroup = styled.div`
  max-width: 600px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 15px;

  form {
    display: flex;
    flex-direction: column;
    input {
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 10px 0 5px 0;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      align-self: flex-end;

      height: 32px;
      width: 120px;
      background: #6095b2;
      font-weight: bold;
      color: rgba(255, 255, 255, 0.7);
      border: 0;
      border-radius: 4px;

      font-size: 14px;
      transition: background 0.2s;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 10px;
    }

    h2 {
      color: #fff;
    }
    h3 {
      color: #fff;
    }
  }
`;
export const HeaderGroup = styled.div`
  display: flex;
  border: 0;

  margin: 5px 0 5px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  justify-content: space-between;
  h1 {
    margin: 10px 0 10px;
    color: #fff;
  }

  button {
    margin-top: -50px;
    background: none;
    border: 0;
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
`;

export const TitleGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BoxLoad = styled.div`
  width: 120px;
  height: 22px;
  background: rgba(0, 0, 0, 0.1);
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
  span {
    width: 70%;
    color: #fff;
    font-weight: normal;
    font-size: 12px;
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

      font-size: 12px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, "#6095b2")};
      }
    }
  }
  @media (max-width: 760px) {
    span {
      width: 60%;

      margin-left: 5px;
    }
    div {
      width: 30%;
      display: flex;
      button {
      }
    }
  }

  @media (max-width: 330px) {
    span {
      width: 60%;
      font-size: 10px;
      margin-left: 5px;
    }
    div {
      width: 30%;
      display: flex;
      button {
        font-size: 10px;
        width: 30px;
        height: 25px;
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
  margin-top: 10px;
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
      #fabricoin-amount {
        width: auto;
        height: 22px;
        margin: 0 15px;
        background: #6095b2;
        padding: 3px 8px;
        color: rgba(255, 255, 255, 0.7);
        border: 0;
        border-radius: 4px;
        font-size: 14px;
        transition: background 0.2s;
        &:hover {
          background: ${darken(0.03, "#6095b2")};
        }
      }
      button {
        background: none;

        color: rgba(255, 255, 255, 0.7);
        border: 0;
        border-radius: 4px;
        margin-right: 10px;
        font-size: 12px;
        transition: background 0.2s;

        svg {
          width: 20px;
          height: 20px;
        }
      }
      #addfabricoin {
        width: 7%;
        height: 22px;
        margin: 0 15px;
        background: #6095b2;
        padding: 3px 8px;
        color: rgba(255, 255, 255, 0.7);
        border: 0;
        border-radius: 4px;
        font-size: 14px;
        transition: background 0.2s;
        &:hover {
          background: ${darken(0.03, "#6095b2")};
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

  @media (max-width: 330px) {
    h1 {
      font-size: 16px;
    }
    ul {
      li {
        span {
          font-size: 12px;
        }
        #user-cell {
          display: none;
        }
        #fabricoin-amount {
          width: auto;
          height: auto;
          font-size: 10px;
        }
        #addfabricoin {
          width: auto;
          height: auto;
          font-size: 10px;
        }
      }
    }
  }
`;
export const AddCourses = styled.div`
  #scrollcheckbox {
    padding-right: 20px;
    max-height: 210px;
  }
`;

export const AddMembers = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
      width: 80%;
      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }
    button {
      width: 15%;
      height: 44px;
      margin: 0 0 0 10px;
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
      width: 30px;
      height: 30px;
    }
  }
`;

export const Spinner = styled.div`
  padding-left: 8px;
  svg {
    animation: ${rotate} 2s linear infinite;

    color: #fff;
  }
`;

export const SpinnerCourseNewGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    animation: ${rotate} 2s linear infinite;

    color: #fff;
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
    margin-bottom: 15px;
  }

  hr {
    border: 0;
    height: 1px;
    background: rgba(255, 255, 255, 0.2);
    margin: 10px 0 10px;
  }
`;

export const ButtonSaveMember = styled.div`
  display: flex;
  flex-direction: column;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-end;
    margin-bottom: 10px;
    height: 32px;
    width: 120px;
    background: #6095b2;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.7);
    border: 0;
    border-radius: 4px;

    font-size: 14px;
    transition: background 0.2s;

    svg {
      animation: ${rotate} 2s linear infinite;
      margin-left: 10px;
      color: #fff;
    }

    &:hover {
      background: ${darken(0.03, "#6095b2")};
    }
  }
`;

export const CoursesEdit = styled.div`
  margin: 10px 0px;
  display: flex;
  flex-direction: column;
  width: 100%;

  #scrollcourses {
    padding: 0;
    max-height: 150px;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-end;
    margin-bottom: 10px;
    height: 32px;
    width: 120px;
    background: #6095b2;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.7);
    border: 0;
    border-radius: 4px;

    font-size: 14px;
    transition: background 0.2s;

    svg {
      animation: ${rotate} 2s linear infinite;
      margin-left: 10px;
      color: #fff;
    }

    &:hover {
      background: ${darken(0.03, "#6095b2")};
    }
  }
`;

export const AddCoursesEdit = styled.div`
  #scrollcheckboxeditgroup {
    max-height: 150px;
    padding-right: 20px;
  }
`;

export const CurrentCourses = styled.ul`
  background: rgba(0, 0, 0, 0.2);
  min-height: 44px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 0;
  border-radius: 4px;

  li {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    span {
      color: #fff;
      font-size: 12px;
    }

    & + li {
      border-top: 0.5px solid #eee;
    }
  }

  h4 {
    color: #fff;
  }
`;
