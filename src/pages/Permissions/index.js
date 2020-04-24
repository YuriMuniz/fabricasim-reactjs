import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Form, Input } from "@rocketseat/unform";
import { MdSearch } from "react-icons/md";

import api from "../../services/api";

import {
  Container,
  Users,
  User,
  InputGroup,
  Scroll,
  SelectedUser,
  Data,
  Checkbox,
} from "./styles";

export default function Permissions() {
  const { t } = useTranslation();
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState(null);
  const profile = useSelector((state) => state.user.profile);
  const [userSelected, setUserSelected] = useState("");

  const [isEmpty, setIsEmpty] = useState(true);

  const [roles, setRoles] = useState([]);

  const [isStudent, setIsStudent] = useState(false);
  const [isTeacher, setIsTeacher] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminMore, setIsAdminMore] = useState(false);

  const [disabledStudent, setDisabledStudent] = useState(true);
  const [disabledTeacher, setDisabledTeacher] = useState(true);
  const [disabledAdmin, setDisabledAdmin] = useState(true);
  const [disabledAdminMore, setDisabledAdminMore] = useState(true);

  async function searchUpdated(event) {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
    const term = event.target.value === "" ? undefined : event.target.value;

    const usersFilteredEmail = await api.post("user-filter", {
      email: term,
    });

    if (usersFilteredEmail.data.length === 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }

    setUsers(usersFilteredEmail.data);
  }
  function handleSubmit() {}

  async function handleClickUser(event) {
    // console.log(event.tagert.value);
    const r = [];
    const rolesUserLogged = [];
    const user = await api.get(
      `application-users/?id=${event.target.value}`,
      {}
    );
    for (let x = 0; x < user.data.roles.length; x++) {
      r.push(user.data.roles[0].name);
    }

    if (r.includes("ADMIN+")) {
      setIsAdminMore(true);
    }
    if (r.includes("ADMIN")) {
      setIsAdmin(true);
    }
    if (r.includes("TEACHER")) {
      setIsTeacher(true);
    }
    if (r.includes("STUDENT")) {
      setIsStudent(true);
    }

    for (let x = 0; x < profile.roles.length; x++) {
      rolesUserLogged.push(profile.roles[x]);
    }
    console.log(rolesUserLogged);
    if (rolesUserLogged.includes("SUPER")) {
      setDisabledAdminMore(false);
      setDisabledAdmin(false);
      setDisabledTeacher(false);
      setDisabledStudent(false);
    }
    if (rolesUserLogged.includes("ADMIN+")) {
      setDisabledAdmin(false);
      setDisabledTeacher(false);
      setDisabledStudent(false);
    }
    if (rolesUserLogged.includes("ADMIN")) {
      setDisabledTeacher(false);
      setDisabledStudent(false);
    }

    setRoles(r);
    setUserSelected(user.data);
  }

  function handleClickCheckBoxAdminMore() {
    setIsAdminMore(!isAdminMore);
  }
  function handleClickCheckBoxAdmin() {
    setIsAdmin(!isAdmin);
  }

  function handleClickCheckBoxTeacher() {
    setIsTeacher(!isTeacher);
  }
  function handleClickCheckBoxStudent() {
    setIsStudent(!isStudent);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <MdSearch size="30" color="#fff" />
          <Input
            name="term"
            placeholder={t("Pesquisar")}
            onChange={searchUpdated}
          />
        </InputGroup>
        <Users>
          <Scroll>
            <User>
              {isEmpty && <span>Nenhum resultado.</span>}
              {users.map((user) => (
                <li
                  onClick={handleClickUser}
                  key={user.id}
                  value={user.userProfile.id}
                >
                  {user.userName}
                </li>
              ))}
            </User>
          </Scroll>
        </Users>
      </Form>
      <SelectedUser>
        <Data>
          <p>{userSelected && userSelected.userProfile.userFirstName}</p>
          <p>{userSelected.userName}</p>

          <Checkbox>
            <p>
              <span>ADMIN+</span>
              <input
                disabled={disabledAdminMore}
                checked={isAdminMore}
                type="checkbox"
                onClick={handleClickCheckBoxAdminMore}
              />
            </p>
            <p>
              <span>ADMIN</span>
              <input
                disabled={disabledAdmin}
                checked={isAdmin}
                type="checkbox"
                onClick={handleClickCheckBoxAdmin}
              />
            </p>
            <p>
              <span>TEACHER</span>
              <input
                disabled={disabledTeacher}
                checked={isTeacher}
                type="checkbox"
                onClick={handleClickCheckBoxTeacher}
              />
            </p>
            <p>
              <span>STUDENT</span>
              <input
                disabled={disabledStudent}
                checked={isStudent}
                type="checkbox"
                onClick={handleClickCheckBoxStudent}
              />
            </p>
          </Checkbox>
          <button type="button">Salvar</button>
        </Data>
      </SelectedUser>
    </Container>
  );
}
