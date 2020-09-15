import React, { useState } from "react";

import {
  MdSearch,
  MdGroupAdd,
  MdEdit,
  MdAddCircle,
  MdClose,
  MdWarning,
} from "react-icons/md";
import Truncate from "react-truncate";
import { FaSpinner, FaUser, FaUsers } from "react-icons/fa";

import { parseISO, format } from "date-fns";

import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

import { Form, Input as InputRocket } from "@rocketseat/unform";

import * as Yup from "yup";
import listHelper from "../../util/listHelper";
import api from "../../services/api";

import {
  Container,
  Header,
  Table,
  InputGroup,
  NewGroup,
  HeaderGroup,
  Courses,
  AddCourses,
  Members,
  AddMembers,
  Principal,
  Footer,
  EditGroup,
  CurrentMembers,
  Scroll,
  RegisterUser,
  UserData,
  EditGroupAddMembers,
  NotFoundUser,
  EditGroupAddCourses,
  CoursesEdit,
  CurrentCourses,
  AddCoursesEdit,
  Checkbox,
  CheckboxEdit,
  Spinner,
  SpinnerTable,
  SpinnerCourseNewGroup,
  ButtonSaveMember,
  TitleGroup,
  BoxLoad,
  AddFabricoin,
  TitleUser,
  QtdUsers,
} from "./styles";

export default function CreateGroups() {
  const [visibleTableGroups, setVisibleTableGroups] = useState(true);
  const [visibleNewGroup, setVisibleNewGroup] = useState(false);
  const [visibleEditGroup, setVisibleEditGroup] = useState(false);
  const [visibleRegisterUser, setVisibleRegisterUser] = useState(false);
  const [visibleAddMembers, setVisibleAddMembers] = useState(false);
  const [visibleAddCourses, setVisibleAddCourses] = useState(false);
  const [visibleAddFabricoinGroup, setVisibleAddFabricoinGroup] = useState(
    false
  );
  const [visibleAddFabricoinUser, setVisibleAddFabricoinUser] = useState(false);
  const [visibleNotFoundUser, setVisibleNotFoundUser] = useState(false);

  const [membersGroup, setMembersGroup] = useState([]);
  const [membersCacheGroup, setMembersCacheGroup] = useState([]);

  const [emailRegisterUser, setEmailResgisterUser] = useState();

  const [loading, setLoading] = useState(false);

  const [loadingGroups, setLoadingGroups] = useState(false);
  const [loadingMembers, setLoadingMembers] = useState(false);
  const [loadingAddMember, setLoadingAddMembers] = useState(false);
  const [loadingSaveMember, setLoadingSaveMembers] = useState(false);
  const [loadingCourses, setLoadingCourses] = useState(false);
  const [loadingSaveGroup, setLoadingSaveGroup] = useState(false);
  const [loadingCoursesInEditPage, setLoadingCoursesInEditPage] = useState(
    false
  );
  const [loadingAddFabricoin, setLoadingAddFabricoin] = useState(false);
  const [
    loadingSaveCoursesInEditPage,
    setLoadingSaveCoursesInEditPage,
  ] = useState(false);
  const [coursesGroup, setCoursesGroup] = useState([]);
  const [selectedUser, setSelectedUser] = useState();
  const [idSelectedGroup, setIdSelectedGroup] = useState();
  const [groupSelectEdit, setGroupSelectEdit] = useState();

  const { t } = useTranslation();

  const [courses, setCourses] = useState([]);

  const [coursesId, setCoursesId] = useState([]);

  const [groups, setGroups] = useState(handleListGroups);
  const [groupsLoad, setGroupsLoad] = useState([]);

  const [isEmpty, setIsEmpty] = useState(false);

  const [stateSelect, setStateSelect] = useState();
  const [countrySelect, setCountrySelect] = useState();
  const [isBr, setIsBr] = useState(false);

  const schema = Yup.object().shape({
    name: Yup.string().required(t("O nome é obrigatório")),
    email: Yup.string()
      .email(t("Insira um e-mail válido"))
      .required(t("O email é obrigatório")),
    cellNumber: Yup.string(),
    state: Yup.string(),
  });

  const schemaNewGroup = Yup.object().shape({
    description: Yup.string().required(t("A descrição é obrigatória")),
    resume: Yup.string().required(t("O resumo é obrigatório")),
  });

  const schemaAddFabricoin = Yup.object().shape({
    amount: Yup.number()
      .integer(t("Digite um número inteiro."))
      .required(t("A quantidade é obrigatória")),
  });
  const schemaAddFabricoinUser = Yup.object().shape({
    amount: Yup.number()
      .integer(t("Digite um número inteiro."))
      .required(t("A quantidade é obrigatória")),
  });
  // const schemaAddEmail = Yup.object().shape({
  //   email: Yup.string()
  //     .email(t("Insira um e-mail válido"))
  //     .required(t("O email é obrigatório")),
  // });

  async function handleListGroups() {
    setLoadingGroups(true);

    const g = await api.get("group");

    console.log(g);
    setGroups(g.data.groups);
    setGroupsLoad(g.data.groups);
    setLoadingGroups(false);
  }

  const handleChangeCourseInEditPage = (event) => {
    const ids = [];
    for (let x = 0; x < coursesId.length; x++) {
      ids.push(coursesId[x]);
    }

    const x = ids.includes(parseInt(event.target.value));
    console.log(x);
    if (x) {
      const result = ids.filter((id) => id !== parseInt(event.target.value));

      console.log(result);
      setCoursesId(result);

      const c = courses.filter((course) => result.includes(course.id));
      console.log(c);
      setCoursesGroup(c);
      console.log(coursesGroup);
      return;
    }

    ids.push(parseInt(event.target.value));

    const c = courses.filter((course) => ids.includes(course.id));
    console.log(c);
    setCoursesGroup(c);
    console.log(coursesGroup);

    setCoursesId(ids);
  };

  const handleChangeCourse = (event) => {
    console.log(event.target.value);
    console.log(coursesId);
    const courses = coursesId;
    console.log(courses);

    for (let x = 0; x < courses.length; x++) {
      if (courses[x].id === event.target.value) {
        console.log(courses);
        courses.splice(x, 1);
        setCoursesId(courses);
        return;
      }
    }

    const x = courses.some((c) => event.target.value.includes(c.id));
    if (x) {
      const result = courses.filter((c) => c !== event.target.value);
      setCoursesId(result);
      return;
    }

    courses.push({
      id: event.target.value,
    });

    console.log(courses);
    setCoursesId(courses);
  };

  async function handleClickNewGroup() {
    setVisibleTableGroups(false);
    setVisibleNewGroup(true);
    setLoadingCourses(true);

    setCoursesId([]);
    const c = await api.get("courses");

    setCourses(c.data);
    setLoadingCourses(false);
  }

  function handleClickClose() {
    setVisibleNewGroup(false);
    setVisibleTableGroups(true);
    setVisibleEditGroup(false);
    setVisibleRegisterUser(false);
    setVisibleAddCourses(false);
    setVisibleAddMembers(false);
    setVisibleNotFoundUser(false);
    setVisibleAddFabricoinGroup(false);
    setVisibleAddFabricoinUser(false);
  }

  async function handleClickEditGroup(event) {
    const id =
      event.currentTarget.children[event.currentTarget.children.length - 1]
        .innerHTML;

    const group = await api.get(`user-group/?id=${id}`, {});
    setGroupSelectEdit(group.data);

    setVisibleTableGroups(false);
    setVisibleEditGroup(true);
    console.log(id);
  }

  function handleClickRegisterUser() {
    setVisibleTableGroups(false);
    setVisibleAddMembers(false);
    setVisibleRegisterUser(true);
  }

  async function handleClickAddMembers(event) {
    setGroupSelectEdit();
    setIdSelectedGroup();
    setLoadingMembers(true);
    setVisibleTableGroups(false);
    setVisibleAddMembers(true);
    setIdSelectedGroup(event.target.value);

    const group = await api.get(`user-group/?id=${event.target.value}`, {});

    setGroupSelectEdit(group.data);
    console.log(group);
    setMembersGroup(group.data.users);
    setLoadingMembers(false);
  }
  async function handleClickAddFabricoinGroups(event) {
    setGroupSelectEdit();
    setVisibleTableGroups(false);
    setVisibleAddFabricoinGroup(true);
    setIdSelectedGroup(event.target.value);

    const group = await api.get(`user-group/?id=${event.target.value}`, {});

    setGroupSelectEdit(group.data);
    console.log(group);
  }

  function handleClickCloseAddFabricoinUser() {
    setVisibleAddMembers(true);
    setVisibleAddFabricoinUser(false);
  }

  async function handleClickAddFabricoinUser(event) {
    setSelectedUser();
    console.log(event.target.value);
    setVisibleAddMembers(false);
    setVisibleAddFabricoinUser(true);

    const user = await api.get(
      `application-users/?id=${event.target.value}`,
      {}
    );

    setSelectedUser(user.data);
    console.log(user);
  }

  async function handleClickAddCourses(event) {
    setGroupSelectEdit();
    setVisibleTableGroups(false);
    setVisibleAddCourses(true);
    setLoadingCoursesInEditPage(true);
    setIdSelectedGroup(event.target.value);
    const group = await api.get(`user-group/?id=${event.target.value}`, {});
    setGroupSelectEdit(group.data);

    const coursesSort = group.data.courses;
    function compare(a, b) {
      if (a.courseDescription < b.courseDescription) return -1;
      if (a.courseDescription > b.courseDescription) return 1;
      return 0;
    }

    coursesSort.sort(compare);

    setCoursesGroup(coursesSort);

    const c = await api.get("courses");
    const ids = [];
    for (let x = 0; x < group.data.courses.length; x++) {
      ids.push(group.data.courses[x].id);
    }

    setCoursesId(ids);
    setCourses(c.data);
    setLoadingCoursesInEditPage(false);
    console.log(coursesId);
  }

  function handleToHideAlert() {
    setVisibleNotFoundUser(false);
  }

  function handleStateChange(event) {
    setStateSelect(event.target.value);
  }

  function handleCountryChange(event) {
    // console.log(event.target.value);
    setCountrySelect(event.target.value);
    if (event.target.value === "BR") {
      setIsBr(true);
    } else {
      setIsBr(false);
    }
  }
  // function handleVerifyCourse(event) {
  //   console.log(event.target.value);
  //   const response = coursesGroup.some((c) =>
  //     event.target.value.includes(c.id)
  //   );
  //   console.log(response);
  //   return response;
  // }

  // function handleChangeCheckBox() {}

  // function handleGroupChange(event) {
  //   setIdSelectedGroup(event.target.value);
  // }

  async function handleSaveGroup({ description, resume }) {
    setLoadingSaveGroup(true);

    try {
      await api.post("group", {
        groupDescription: description,
        groupResume: resume,
        coursesId,
      });
      const g = await api.get("group");
      setGroups(g.data.groups);

      setVisibleNewGroup(false);
      setVisibleTableGroups(true);

      setCoursesId([]);
      toast.success(t("Grupo salvo"));
    } catch (err) {
      toast.error(t("Erro ao salvar grupo"));
      setLoadingSaveGroup(false);
    }
    setLoadingSaveGroup(false);
  }

  async function handleAddMembersCache({ email }) {
    if (email === "") {
      toast.error(t("O e-mail é obrigatório"));
      return;
    }
    setLoadingAddMembers(true);
    setVisibleNotFoundUser(false);
    console.log(membersGroup);
    setEmailResgisterUser(email);
    const user = await api.get(`user-profiles/?email=${email}`, {});
    console.log(user);
    if (user.data === null) {
      setVisibleNotFoundUser(true);
      setLoadingAddMembers(false);

      return;
    }
    for (let x = 0; x < membersGroup.length; x++) {
      if (membersGroup[x].id === user.data.userProfile.id) {
        toast.error(t("Esse e-mail já existe"));
        setLoadingAddMembers(false);
        return;
      }
    }
    const users = [];

    if (membersGroup.length === 0) {
      users.push({
        id: user.data.userProfile.id,
        userfirstName: user.data.userProfile.userFirstName,
        userCellNumber: user.data.userProfile.userCellNumber,
        email,
      });
      console.log(users);
      setMembersGroup(users);
      setMembersCacheGroup(users);
    } else {
      users.push(...membersGroup, {
        id: user.data.userProfile.id,
        userfirstName: user.data.userProfile.userFirstName,
        userCellNumber: user.data.userProfile.userCellNumber,
      });
      setMembersGroup(users);
      setMembersCacheGroup(users);
    }
    setLoadingAddMembers(false);
    console.log(membersGroup);
    console.log(membersGroup.length);
    // console.log(user);
  }

  async function handleSaveMembersInGroup() {
    setLoadingSaveMembers(true);
    const idMembers = [];

    for (let x = 0; x < membersGroup.length; x++) {
      idMembers.push({
        id: membersGroup[x].id,
      });
    }
    console.log(idMembers);
    try {
      await api.post("user-group", {
        idGroup: idSelectedGroup,
        idUsers: idMembers,
      });

      toast.success(t("Membros adicionados com sucesso"));
      handleClickClose();
    } catch (error) {
      toast.error(t("Erro ao adicionar membros ao grupo"));
      setLoadingSaveMembers(false);
    }
    setLoadingSaveMembers(false);
  }

  async function handleSaveCoursesInGroup() {
    setLoadingSaveCoursesInEditPage(true);
    const idCourses = [];
    for (let x = 0; x < coursesId.length; x++) {
      idCourses.push({
        id: coursesId[x],
      });
    }
    try {
      await api.post("course-group", {
        idGroup: idSelectedGroup,
        idCourses,
      });

      toast.success(t("Cursos adicionados com sucesso"));
      handleClickClose();
    } catch (error) {
      toast.error(t("Erro ao adicionar cursos ao grupo"));
      setLoadingSaveCoursesInEditPage(false);
    }

    setLoadingSaveCoursesInEditPage(false);
  }

  async function handleRemoveMember(event) {
    const id = parseInt(event.target.value);

    const users = [];
    for (let x = 0; x < membersGroup.length; x++) {
      if (membersGroup[x].id !== id) {
        users.push(membersGroup[x]);
      }
    }

    setMembersGroup(users);
  }

  async function handleSubmitRegisterUser(data) {
    setLoading(true);
    let state = "";
    console.log(data.cellNumber);
    if (countrySelect === "País") {
      toast.error(t("O país é obrigatório"));
      setLoading(false);
      return;
    }
    if (countrySelect === "BR") {
      if (stateSelect === undefined) {
        toast.error(t("O estado é obrigatório"));
        setLoading(false);
        return;
      }
      state = stateSelect;
    } else if (data.state === undefined || data.state === "") {
      toast.error(t("O estado é obrigatório"));
      setLoading(false);
      return;
    } else {
      state = data.state;
    }
    if (idSelectedGroup === undefined) {
      toast.error(t("Escolha um grupo"));
      setLoading(false);
      return;
    }

    const user = await api.get(`user-profiles/?email=${data.email}`, {});

    if (user.data !== null) {
      toast.error(t("Esse usuário já existe"));
      setLoading(false);
      return;
    }

    try {
      await api.post("user-group-course", {
        name: data.name,
        email: data.email,
        cellNumber: data.cellNumber,
        country: countrySelect,
        state,
        idGroup: idSelectedGroup,
      });
      const group = await api.get(`user-group/?id=${groupSelectEdit.id}`, {});
      // setGroupSelectEdit(group.data);
      // console.log(group);
      setMembersGroup(group.data.users);
      setLoading(false);
      setVisibleRegisterUser(false);
      setVisibleNotFoundUser(false);
      setVisibleAddMembers(true);

      toast.success(t("Usuário registrado"));
    } catch (error) {
      toast.error(t("Erro ao registrar usuário"));
    }
    setLoading(false);
  }

  async function handleSaveEditGroup(data) {
    console.log(groupSelectEdit.id);
    try {
      await api.put("group", {
        idGroup: groupSelectEdit.id,
        groupDescription: data.groupDescription,
        groupResume: data.groupResume,
      });
      handleListGroups();
      handleClickClose();
      toast.success(t("Grupo editado com sucesso"));
    } catch (err) {
      toast.error(t("Erro ao editar grupo"));
    }
  }

  async function searchUpdated(event) {
    const term = event.target.value === "" ? undefined : event.target.value;
    if (term === undefined) {
      setGroups(groupsLoad);
      return;
    }
    console.log(term);
    console.log(groupsLoad);
    const filter = groupsLoad.filter((group) => {
      return group.groupDescription.toLowerCase().includes(term.toLowerCase());
    });

    if (!filter) {
      setIsEmpty(true);
      setGroups();
      return;
    }

    setGroups(filter);
  }

  function handleChangeEmailRegisterUser(event) {
    setEmailResgisterUser(event.target.value);
  }

  async function handleSubmitAddFabricoinGroup({ amount }) {
    setLoadingAddFabricoin(true);
    try {
      const group = await api.get(`user-group/?id=${groupSelectEdit.id}`, {});
      console.log(group.data);
      if (group.data.users.length !== 0) {
        await api.post("add-fabricoin-users-group", {
          amount: parseFloat(amount),
          idGroup: groupSelectEdit.id,
        });

        handleClickClose();
        toast.success(t("Fabricoin atribuído com sucesso"));
      } else {
        toast.error(t("Não existe usuário no grupo."));
      }
    } catch (err) {
      setLoadingAddFabricoin(false);
      toast.error(t("Erro ao atribuir fabricoin."));
    }
    setLoadingAddFabricoin(false);
  }

  async function handleSubmitAddFabricoinUser({ amount }) {
    setLoadingAddFabricoin(true);
    try {
      await api.post("add-fabricoin-user", {
        amount: parseFloat(amount),
        userProfileId: selectedUser.userProfile.id,
      });
      const group = await api.get(`user-group/?id=${idSelectedGroup}`, {});

      setGroupSelectEdit(group.data);
      console.log(group);
      setMembersGroup(group.data.users);

      handleClickCloseAddFabricoinUser();
      toast.success(t("Fabricoin atribuído com sucesso"));
    } catch (err) {
      setLoadingAddFabricoin(false);
      toast.error(t("Erro ao atribuir fabricoin."));
    }
    setLoadingAddFabricoin(false);
  }

  return (
    <Container>
      {visibleTableGroups && (
        <Header>
          <InputGroup>
            <MdSearch size={25} color="#fff" />
            <input
              onChange={searchUpdated}
              type="text"
              placeholder={t("Pesquisar pelo nome")}
            />
          </InputGroup>

          <button
            id="button-register-group"
            type="button"
            onClick={handleClickNewGroup}
          >
            <MdGroupAdd />
          </button>
        </Header>
      )}

      {loadingGroups && (
        <SpinnerTable>
          <FaSpinner size={30} />{" "}
        </SpinnerTable>
      )}
      {visibleTableGroups && groups.length > 0 && (
        <Table>
          <Scroll>
            <ul>
              {groups.map((group) => (
                <li>
                  <div id="info">
                    <Truncate
                      element="h5"
                      width="110"
                      ellipsis={<span>...</span>}
                    >
                      {group.groupDescription}
                    </Truncate>

                    <span id="owner">{group.groupOwner.userfirstName}</span>
                  </div>
                  <QtdUsers id="qtd-users">
                    <FaUsers />
                    <h5>{group.users.length}</h5>
                  </QtdUsers>
                  
                  <h5 id="timestamp">
                    {format(parseISO(group.timestamp), "dd/MM/yyyy HH:mm")}
                  </h5>
                  <button
                    type="button"
                    id="addfabricoin"
                    value={group.id}
                    onClick={handleClickAddFabricoinGroups}
                  >
                    +f
                  </button>
                  <button
                    type="button"
                    id="addmembers"
                    value={group.id}
                    onClick={handleClickAddMembers}
                  >
                    {t("+Membros")}
                  </button>
                  <button
                    type="button"
                    id="addcourses"
                    value={group.id}
                    onClick={handleClickAddCourses}
                  >
                    {t("+Cursos")}
                  </button>
                  <button
                    id="edit"
                    type="button"
                    value={group.id}
                    onClick={handleClickEditGroup}
                  >
                    <MdEdit value={group.id} name={group.id} size={20} />
                    <small name={group.id}>{group.id}</small>
                  </button>
                </li>
              ))}
            </ul>
          </Scroll>
        </Table>
      )}

      {visibleNewGroup && (
        <NewGroup>
          <HeaderGroup>
            <h1>{t("Novo grupo")}</h1>
            <button type="button" onClick={handleClickClose}>
              <MdClose color="#fff" />{" "}
            </button>
          </HeaderGroup>
          <Form schema={schemaNewGroup} onSubmit={handleSaveGroup}>
            {loadingSaveGroup && (
              <button disabled type="submit">
                {t("Salvar")}
                <Spinner>
                  <FaSpinner size={20} />
                </Spinner>
              </button>
            )}
            {!loadingSaveGroup && <button type="submit">{t("Salvar")}</button>}

            <Principal>
              <InputRocket
                name="description"
                placeholder={t("Descrição")}
                type="text"
              />
              <InputRocket name="resume" placeholder={t("Resumo")} />
              <hr />
            </Principal>

            <Courses>
              <AddCourses>
                <h3>{t("Cursos")}</h3>
                <Scroll id="scrollcheckbox">
                  <Checkbox>
                    {loadingCourses && (
                      <SpinnerCourseNewGroup>
                        <FaSpinner size={20} />
                      </SpinnerCourseNewGroup>
                    )}
                    {courses.map((course) => (
                      <p>
                        <span>{course.courseDescription}</span>

                        <input
                          value={course.id}
                          type="checkbox"
                          onChange={handleChangeCourse}
                        />
                      </p>
                    ))}
                  </Checkbox>
                </Scroll>
              </AddCourses>
            </Courses>
          </Form>
        </NewGroup>
      )}
      {visibleEditGroup && (
        <EditGroup>
          <HeaderGroup>
            <h1>{t("Atualizar grupo")}</h1>
            <button type="button" onClick={handleClickClose}>
              <MdClose color="#fff" />{" "}
            </button>
          </HeaderGroup>
          <Form initialData={groupSelectEdit} onSubmit={handleSaveEditGroup}>
            <Principal>
              <InputRocket
                name="groupDescription"
                placeholder={t("Descrição")}
                type="text"
              />
              <InputRocket name="groupResume" placeholder={t("Resumo")} />
              <hr />
            </Principal>

            <Footer>
              <button type="submit">{t("Salvar")}</button>
              <button type="button" onClick={handleClickClose}>
                {t("Cancelar")}
              </button>
            </Footer>
          </Form>
        </EditGroup>
      )}

      {visibleAddMembers && (
        <EditGroupAddMembers>
          <HeaderGroup>
            <h1>{t("Adicionar membros")}</h1>
            <button type="button" onClick={handleClickClose}>
              <MdClose color="#fff" />{" "}
            </button>
          </HeaderGroup>

          <Members>
            <TitleGroup>
              {!groupSelectEdit && <BoxLoad />}
              {groupSelectEdit && <h3>{groupSelectEdit.groupDescription}</h3>}

              <ButtonSaveMember>
                {loadingSaveMember && (
                  <button
                    type="button"
                    disabled
                    onClick={handleSaveMembersInGroup}
                  >
                    {t("Salvar")} <FaSpinner size={20} />
                  </button>
                )}
                {!loadingSaveMember && (
                  <button type="button" onClick={handleSaveMembersInGroup}>
                    {t("Salvar")}
                  </button>
                )}
              </ButtonSaveMember>
            </TitleGroup>
            <h3>{t("Membros")}</h3>

            <Scroll id="scrollmembers">
              <CurrentMembers>
                {loadingMembers && (
                  <Spinner>
                    <FaSpinner size={20} />
                  </Spinner>
                )}
                {!loadingMembers && membersGroup.length === 0 && (
                  <h4>{t("Não existe usuário nesse grupo")}</h4>
                )}
                {!loadingMembers && membersGroup.length > 0 && (
                  <ul>
                    {membersGroup.map((user) => (
                      <li>
                        <FaUser />

                        <span>{user.userfirstName}</span>
                        <span id="user-cell">{user.userCellNumber}</span>

                        {user.fabricoinBalance && (
                          <>
                            <span id="fabricoin-amount">
                              {user.fabricoinBalance}
                            </span>

                            <button
                              type="button"
                              id="addfabricoin"
                              value={user.id}
                              onClick={handleClickAddFabricoinUser}
                            >
                              +f
                            </button>
                          </>
                        )}
                        {user.fabricoinBalance === 0 && (
                          <>
                            <span id="fabricoin-amount">
                              {user.fabricoinBalance}
                            </span>

                            <button
                              type="button"
                              id="addfabricoin"
                              value={user.id}
                              onClick={handleClickAddFabricoinUser}
                            >
                              +f
                            </button>
                          </>
                        )}

                        <button
                          type="button"
                          value={user.id}
                          onClick={handleRemoveMember}
                        >
                          {t("Remover")}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </CurrentMembers>
            </Scroll>
            <hr />
            <AddMembers>
              <Form onSubmit={handleAddMembersCache}>
                <InputRocket
                  name="email"
                  type="email"
                  placeholder={t("E-mail")}
                />
                <button type="submit">
                  {loadingAddMember && (
                    <Spinner>
                      <FaSpinner size={20} />
                    </Spinner>
                  )}
                  {!loadingAddMember && <MdAddCircle size={40} />}
                </button>
              </Form>
            </AddMembers>
            {visibleNotFoundUser && (
              <NotFoundUser>
                <MdWarning size={30} />
                <span>{t("Esse usuário não existe")}</span>
                <div>
                  <button type="button" onClick={handleClickRegisterUser}>
                    {t("Sim")}
                  </button>
                  <button type="button" onClick={handleToHideAlert}>
                    {t("Não")}
                  </button>
                </div>
              </NotFoundUser>
            )}
          </Members>
        </EditGroupAddMembers>
      )}

      {visibleAddCourses && (
        <EditGroupAddCourses>
          <HeaderGroup>
            <h1>{t("Adicionar cursos")}</h1>
            <button type="button" onClick={handleClickClose}>
              <MdClose color="#fff" />{" "}
            </button>
          </HeaderGroup>

          <CoursesEdit>
            <TitleGroup>
              {!groupSelectEdit && <BoxLoad />}
              {groupSelectEdit && <h3>{groupSelectEdit.groupDescription}</h3>}

              <ButtonSaveMember>
                {!loadingSaveCoursesInEditPage && (
                  <button type="button" onClick={handleSaveCoursesInGroup}>
                    {t("Salvar")}
                  </button>
                )}
                {loadingSaveCoursesInEditPage && (
                  <button
                    disabled
                    type="button"
                    onClick={handleSaveCoursesInGroup}
                  >
                    {t("Salvar")} <FaSpinner size={20} />
                  </button>
                )}
              </ButtonSaveMember>
            </TitleGroup>

            <Scroll id="scrollcourses">
              <CurrentCourses>
                {loadingCoursesInEditPage && (
                  <Spinner>
                    <FaSpinner size={20} />
                  </Spinner>
                )}
                {!loadingCoursesInEditPage && coursesGroup.length === 0 && (
                  <h4>{t("Não existe curso nesse grupo")}</h4>
                )}
                {!loadingCoursesInEditPage && coursesGroup.length > 0 && (
                  <>
                    {coursesGroup.map((course) => (
                      <li>
                        <span>{course.courseDescription}</span>
                      </li>
                    ))}
                  </>
                )}
              </CurrentCourses>
            </Scroll>
            <hr />
            <AddCoursesEdit>
              <h3>{t("Cursos")}</h3>
              <Scroll id="scrollcheckboxeditgroup">
                <CheckboxEdit>
                  {loadingCourses && (
                    <SpinnerCourseNewGroup>
                      <FaSpinner size={20} />
                    </SpinnerCourseNewGroup>
                  )}
                  {courses.map((course) => (
                    <p>
                      <span>{course.courseDescription}</span>
                      <input
                        value={course.id}
                        type="checkbox"
                        checked={coursesId.includes(course.id)}
                        onChange={handleChangeCourseInEditPage}
                        readOnly={false}
                      />
                    </p>
                  ))}
                </CheckboxEdit>
              </Scroll>
            </AddCoursesEdit>
          </CoursesEdit>
          <hr />
        </EditGroupAddCourses>
      )}

      {visibleRegisterUser && (
        <RegisterUser>
          <HeaderGroup>
            <h1>{t("Registrar usuário")}</h1>
            <button type="button" onClick={handleClickClose}>
              <MdClose color="#fff" />{" "}
            </button>
          </HeaderGroup>
          <Form schema={schema} onSubmit={handleSubmitRegisterUser}>
            <UserData>
              <div>
                <InputRocket
                  name="email"
                  type="email"
                  onChange={handleChangeEmailRegisterUser}
                  value={emailRegisterUser}
                  placeholder={t("E-mail")}
                />
                <InputRocket
                  name="name"
                  type="text"
                  placeholder={t("Nome completo")}
                />

                <InputRocket
                  name="cellNumber"
                  type="number"
                  placeholder={t("Celular")}
                />
              </div>
              <div>
                <select
                  size="number"
                  onChange={handleCountryChange}
                  defaultValue={t("País")}
                >
                  <option disabled selected>
                    {t("País")}
                  </option>
                  {listHelper.Countries.map((c) => (
                    <option key={c.value} value={c.value}>
                      {c.view}
                    </option>
                  ))}
                  ;
                </select>

                {isBr ? (
                  <select
                    size="number"
                    onChange={handleStateChange}
                    defaultValue="Estado"
                  >
                    <option disabled selected>
                      {t("Estado")}
                    </option>
                    {listHelper.States.map((s) => (
                      <option key={s.key} value={s.value}>
                        {s.view}
                      </option>
                    ))}
                    ;
                  </select>
                ) : (
                  <InputRocket
                    name="state"
                    type="text"
                    placeholder={t("Estado")}
                  />
                )}
              </div>
            </UserData>
            <hr />
            <Footer>
              {!loading && <button type="submit">{t("Salvar")}</button>}
              {loading && (
                <button type="submit" disabled="disabled">
                  {t("Salvar")} <FaSpinner size={20} />
                </button>
              )}
              <button type="button" onClick={handleClickClose}>
                {t("Cancelar")}
              </button>
            </Footer>
          </Form>
        </RegisterUser>
      )}

      {visibleAddFabricoinGroup && (
        <AddFabricoin>
          <HeaderGroup>
            <h1>{t("Adicionar fabricoin")}</h1>
            <button type="button" onClick={handleClickClose}>
              <MdClose color="#fff" />{" "}
            </button>
          </HeaderGroup>
          {!groupSelectEdit && <BoxLoad />}
          {groupSelectEdit && <h3>{groupSelectEdit.groupDescription}</h3>}
          <Form
            schema={schemaAddFabricoin}
            onSubmit={handleSubmitAddFabricoinGroup}
          >
            <h5>{t("Defina a quantidade de fabricoins grupo")}</h5>
            <InputRocket
              name="amount"
              type="number"
              placeholder={t("Quantidade")}
            />

            <hr />
            <Footer>
              {!loadingAddFabricoin && (
                <button type="submit">{t("Salvar")}</button>
              )}
              {loadingAddFabricoin && (
                <button type="submit" disabled="disabled">
                  {t("Salvar")} <FaSpinner size={20} />
                </button>
              )}
              <button type="button" onClick={handleClickClose}>
                {t("Cancelar")}
              </button>
            </Footer>
          </Form>
        </AddFabricoin>
      )}

      {visibleAddFabricoinUser && (
        <AddFabricoin>
          <HeaderGroup>
            <h1>{t("Adicionar fabricoin")}</h1>
            <button type="button" onClick={handleClickCloseAddFabricoinUser}>
              <MdClose color="#fff" />{" "}
            </button>
          </HeaderGroup>
          <TitleUser>
            {!selectedUser && <BoxLoad />}
            {selectedUser && <h4>{selectedUser.userProfile.userFirstName}</h4>}
            {!selectedUser && <BoxLoad />}
            {selectedUser && <span>{selectedUser.userName}</span>}
          </TitleUser>
          <Form
            schema={schemaAddFabricoinUser}
            onSubmit={handleSubmitAddFabricoinUser}
          >
            <h5>{t("Defina a quantidade de fabricoins usuário")}</h5>
            <InputRocket
              name="amount"
              type="number"
              placeholder={t("Quantidade")}
            />

            <hr />
            <Footer>
              {!loadingAddFabricoin && (
                <button type="submit">{t("Salvar")}</button>
              )}
              {loadingAddFabricoin && (
                <button type="submit" disabled="disabled">
                  {t("Salvar")} <FaSpinner size={20} />
                </button>
              )}
              <button type="button" onClick={handleClickCloseAddFabricoinUser}>
                {t("Cancelar")}
              </button>
            </Footer>
          </Form>
        </AddFabricoin>
      )}
    </Container>
  );
}
