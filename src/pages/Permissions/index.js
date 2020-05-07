import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Form, Input } from "@rocketseat/unform";
import { MdSearch } from "react-icons/md";
import { toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa";

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
  ContentUser,
  IconSpinner,
} from "./styles";

export default function Permissions() {
  const { t } = useTranslation();
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState(null);
  const profile = useSelector((state) => state.user.profile);
  const [userSelected, setUserSelected] = useState("");

  const [loadingSearchEmail, setLoadingSearchEmail] = useState(false);

  const [isEmpty, setIsEmpty] = useState(true);

  const [visibleUserSelected, setVisibleUserSelected] = useState(false);

  const [visibleUsers, setVisibleUsers] = useState(false);

  const authorizateSuper = profile.roles.some((e) => ["SUPER"].includes(e));

  const authorizateAdminMore = profile.roles.some((e) =>
    ["SUPER", "ADMIN+"].includes(e)
  );

  const authorizateAdmin = profile.roles.some((e) =>
    ["SUPER", "ADMIN+", "ADMIN"].includes(e)
  );
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [isTeacher, setIsTeacher] = useState();
  const [isAdmin, setIsAdmin] = useState();

  const [isAdminMore, setIsAdminMore] = useState();
  const [usersLoad, setUsersLoad] = useState(loadUsers);
  const [index, setIndex] = useState();

  async function loadUsers() {
    setLoadingUsers(true);
    const usersFilteredEmail = await api.post("user-filter", {
      email: "",
    });
    setUsersLoad(usersFilteredEmail);
    setLoadingUsers(false);
    console.log(usersFilteredEmail);
  }

  async function keyUp(event) {
    // setIndex(event.target.value.length);

    setLoadingSearchEmail(true);
    setVisibleUsers(true);
    setVisibleUserSelected(false);
    setSearchTerm(event.target.value);

    const term = event.target.value === "" ? undefined : event.target.value;
    // console.log(usersLoad.data);
    const filter = usersLoad.data.filter((user) => {
      return user.userName.toLowerCase().includes(term.toLowerCase());
    });
    console.log(filter);
    if (filter.length === 0) {
      setIsEmpty(true);
      setVisibleUserSelected(false);
    } else {
      setIsEmpty(false);
    }
    setLoadingSearchEmail(false);

    setUsers(filter);
  }

  // async function searchUpdated(event) {
  //   // setI(event.target.value.length);
  //   console.log(event.target);
  //   setLoadingSearchEmail(true);
  //   setVisibleUsers(true);
  //   setVisibleUserSelected(false);
  //   setSearchTerm(event.target.value);
  //   const term = event.target.value === "" ? undefined : event.target.value;

  //   const usersFilteredEmail = await api.post("user-filter", {
  //     email: term,
  //   });

  //   if (usersFilteredEmail.data.length === 0) {
  //     setIsEmpty(true);
  //     setVisibleUserSelected(false);
  //   } else {
  //     setIsEmpty(false);
  //   }

  //   setUsers(usersFilteredEmail.data);
  //   setLoadingSearchEmail(false);
  // }

  // async function triggerChange(event) {
  //   setIndex(event.target.value.length);
  //   setLoadingSearchEmail(true);
  //   setVisibleUsers(true);
  //   setVisibleUserSelected(false);
  //   setSearchTerm(event.target.value);

  //   const term = event.target.value === "" ? undefined : event.target.value;

  //   const usersFilteredEmail = await api.post("user-filter", {
  //     email: term,
  //     index: event.target.value.length,
  //   });
  //   console.log(index);
  //   if (usersFilteredEmail.data.usersFilter.length === 0) {
  //     setIsEmpty(true);
  //     setVisibleUserSelected(false);
  //   } else {
  //     setIsEmpty(false);
  //   }

  //   setUsers(usersFilteredEmail.data);
  //   setLoadingSearchEmail(false);
  // }

  function handleSubmit() {}

  async function handleClickUser(event) {
    setVisibleUsers(false);
    setVisibleUserSelected(true);
    setIsAdminMore(false);
    setIsAdmin(false);
    setIsTeacher(false);

    // console.log(event.tagert.value);
    console.log(profile.roles);

    const user = await api.get(
      `application-users/?id=${event.target.value}`,
      {}
    );

    const r = [];
    user.data.roles.forEach(function (val, index) {
      r.push(val.name);
    });

    // console.log(user.data.roles);
    if (r.includes("TEACHER")) {
      setIsTeacher(true);
    }
    if (r.includes("ADMIN")) {
      setIsAdmin(true);
    }

    if (r.includes("ADMIN+")) {
      setIsAdminMore(true);
    }

    setUserSelected(user.data);
  }

  async function handleSubmitRoles() {
    console.log(profile);
    if (authorizateAdmin) {
      const r = [];
      if (isAdminMore) {
        r.push({ id: 6 });
      }
      if (isAdmin) {
        r.push({ id: 1 });
      }
      if (isTeacher) {
        r.push({ id: 2 });
      }

      try {
        await api.post("user-role", {
          userId: userSelected.id,
          roles: r,
        });
        toast.success(t("Permissão salva"));
      } catch (error) {
        toast.success(t("Erro ao atribuir permissão"));
      }
    } else {
      toast.success(t("Você não tem permissão"));
    }
  }

  function handleChange(event) {
    if (event.target.value === "admin+") {
      setIsAdminMore(!isAdminMore);
    }
    if (event.target.value === "admin") {
      setIsAdmin(!isAdmin);
    }
    if (event.target.value === "teacher") {
      setIsTeacher(!isTeacher);
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        {loadingUsers && (
          <InputGroup>
            <MdSearch size="30" color="#fff" />

            <Input
              disabled
              name="term"
              placeholder={t("Pesquisar pelo e-mail")}
              onKeyUp={keyUp}
            />
            <IconSpinner>
              <FaSpinner size={20} />
            </IconSpinner>
          </InputGroup>
        )}
        {!loadingUsers && (
          <InputGroup>
            <MdSearch size="30" color="#fff" />

            <Input
              name="term"
              placeholder={t("Pesquisar pelo e-mail")}
              onChange={keyUp}
            />
            <IconSpinner>
              {loadingSearchEmail && <FaSpinner size={20} />}
            </IconSpinner>
          </InputGroup>
        )}
      </Form>
      {visibleUsers && (
        <Users>
          <Scroll>
            <User>
              {isEmpty && <span>{t("Nenhum resultado")}</span>}
              {users.index === index && (
                <div>
                  {users.map((user) => (
                    <li
                      onClick={handleClickUser}
                      key={user.id}
                      value={user.userProfile.id}
                    >
                      {user.userName}
                    </li>
                  ))}
                </div>
              )}
            </User>
          </Scroll>
        </Users>
      )}

      {visibleUserSelected && (
        <SelectedUser>
          <ContentUser>
            <Data>
              <p>{userSelected && userSelected.userProfile.userFirstName}</p>
              <p>{userSelected.userName}</p>
            </Data>
            <Checkbox>
              {authorizateSuper && (
                <p>
                  <span>ADMIN+</span>
                  {userSelected && (
                    <input
                      // disabled={disabledAdminMore}
                      value="admin+"
                      checked={isAdminMore}
                      type="checkbox"
                      onChange={handleChange}
                    />
                  )}
                </p>
              )}
              {authorizateAdminMore && (
                <p>
                  <span>ADMIN</span>
                  {userSelected && (
                    <input
                      value="admin"
                      checked={isAdmin}
                      type="checkbox"
                      onChange={handleChange}
                    />
                  )}
                </p>
              )}
              {authorizateAdmin && (
                <p>
                  <span>TEACHER</span>
                  {userSelected && (
                    <input
                      value="teacher"
                      checked={isTeacher}
                      type="checkbox"
                      onChange={handleChange}
                    />
                  )}
                </p>
              )}
            </Checkbox>
          </ContentUser>
          <button type="button" onClick={handleSubmitRoles}>
            {t("Salvar")}
          </button>
        </SelectedUser>
      )}
    </Container>
  );
}
