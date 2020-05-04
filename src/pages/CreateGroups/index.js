import React, { useState } from "react";

import {
  MdSearch,
  MdGroupAdd,
  MdEdit,
  MdAddCircle,
  MdClose,
  MdPersonAdd,
  MdWarning,
} from "react-icons/md";

import { FaSpinner, FaUser } from "react-icons/fa";

import { parseISO, format, addHours } from "date-fns";

import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

import { Form, Input as InputRocket } from "@rocketseat/unform";

import Input from "@material-ui/core/Input";

import FormControl from "@material-ui/core/FormControl";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
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
  ButtonGroup,
  EditGroupAddMembers,
  NotFoundUser,
  EditGroupAddCourses,
  CoursesEdit,
  CurrentCourses,
  AddCoursesEdit,
} from "./styles";

export default function CreateGroups() {
  const useStyles = makeStyles((theme) => ({
    formControl: {
      minWidth: 500,
      maxWidth: 500,
      "&:before": {
        // normal
        borderBottom: `1px solid #eee`,
        color: "#fff",
      },
      "&:after": {
        // focused
        borderBottom: `1px solid #eee`,
        color: "#fff",
      },
      "&:hover:not(.Mui-disabled):not(.Mui-focused):not(.Mui-error):before": {
        // hover
        borderBottom: `3px solid #eee`,
        color: "#fff",
      },
    },
    select: {
      color: "#fff",
    },
  }));

  const classes = useStyles();

  const [visibleTableGroups, setVisibleTableGroups] = useState(true);
  const [visibleNewGroup, setVisibleNewGroup] = useState(false);
  const [visibleEditGroup, setVisibleEditGroup] = useState(false);
  const [visibleRegisterUser, setVisibleRegisterUser] = useState(false);
  const [visibleAddMembers, setVisibleAddMembers] = useState(false);
  const [visibleAddCourses, setVisibleAddCourses] = useState(false);

  const [visibleNotFoundUser, setVisibleNotFoundUser] = useState(false);

  const [membersGroup, setMembersGroup] = useState([]);
  const [membersCacheGroup, setMembersCacheGroup] = useState([]);

  const [loading, setLoading] = useState(false);

  const [coursesGroup, setCoursesGroup] = useState([]);

  const [idSelectedGroup, setIdSelectedGroup] = useState();
  const [groupSelectEdit, setGroupSelectEdit] = useState();

  const { t } = useTranslation();

  const [courses, setCourses] = useState([]);

  const [coursesId, setCoursesId] = useState([]);

  const [groups, setGroups] = useState(handleListGroups);

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

  const roles = ["MANAGER", "VIEWER", "STUDENT"];

  async function handleListGroups() {
    const g = await api.get("group");

    setGroups(g.data.groups);
  }

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 315,
      },
    },
  };

  const handleChangeCourse = (event) => {
    console.log(event.target.value);
    setCoursesId(event.target.value);
  };

  async function handleClickNewGroup() {
    setVisibleNewGroup(true);
    setVisibleTableGroups(false);
    setCoursesId([]);
    const c = await api.get("courses");

    setCourses(c.data);
  }

  function handleClickClose() {
    setVisibleNewGroup(false);
    setVisibleTableGroups(true);
    setVisibleEditGroup(false);
    setVisibleRegisterUser(false);
    setVisibleAddCourses(false);
    setVisibleAddMembers(false);
    setVisibleNotFoundUser(false);
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
    setVisibleTableGroups(false);
    setVisibleAddMembers(true);
    setIdSelectedGroup(event.target.value);
    const group = await api.get(`user-group/?id=${event.target.value}`, {});

    console.log(group);
    setMembersGroup(group.data.users);
  }

  async function handleClickAddCourses(event) {
    setVisibleTableGroups(false);
    setVisibleAddCourses(true);
    setIdSelectedGroup(event.target.value);
    const group = await api.get(`user-group/?id=${event.target.value}`, {});
    setCoursesGroup(group.data.courses);
    const c = await api.get("courses");
    const ids = [];
    for (let x = 0; x < group.data.courses.length; x++) {
      ids.push(group.data.courses[x].id);
    }

    setCoursesId(ids);
    setCourses(c.data);
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

  function handleGroupChange(event) {
    setIdSelectedGroup(event.target.value);
  }

  async function handleSaveGroup({ description, resume }) {
    console.log(description);
    console.log(resume);
    const idCourses = [];
    for (let x = 0; x < coursesId.length; x++) {
      idCourses.push({
        id: coursesId[x],
      });
    }

    try {
      await api.post("group", {
        groupDescription: description,
        groupResume: resume,
        coursesId: idCourses,
      });
      const g = await api.get("group");
      setGroups(g.data.groups);

      setVisibleNewGroup(false);
      setVisibleTableGroups(true);

      setCoursesId([]);
      toast.success(t("Grupo salvo"));
    } catch (err) {
      toast.error(t("Erro ao salvar grupo"));
    }
  }

  async function handleAddMembersCache({ email }) {
    console.log(membersGroup);

    const user = await api.get(`user-profiles/?email=${email}`, {});
    console.log(user);
    if (user.data === null) {
      setVisibleNotFoundUser(true);
      return;
    }
    for (let x = 0; x < membersGroup.length; x++) {
      if (membersGroup[x].id === user.data.userProfile.id) {
        toast.error(t("Esse e-mail já existe"));
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

    console.log(membersGroup);
    console.log(membersGroup.length);
    // console.log(user);
  }

  async function handleSaveMembersInGroup() {
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
    }
  }

  async function handleSaveCoursesInGroup() {
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
    }
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
      setLoading(false);
      handleClickClose();
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
    // setLoadingSearchEmail(true);
    // setVisibleUsers(true);
    // setVisibleUserSelected(false);
    // setSearchTerm(event.target.value);
    const term = event.target.value === "" ? undefined : event.target.value;
    if (term === undefined) {
      handleListGroups();
      return;
    }

    const filteredGroup = await api.post("group-filter", {
      description: term,
    });

    setGroups(filteredGroup.data);

    // if (usersFilteredEmail.data.length === 0) {
    //   setIsEmpty(true);
    //   setVisibleUserSelected(false);
    // } else {
    //   setIsEmpty(false);
    // }

    // setUsers(usersFilteredEmail.data);
    // setLoadingSearchEmail(false);
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
          <ButtonGroup>
            <button
              id="button-register-user"
              type="button"
              onClick={handleClickRegisterUser}
            >
              <MdPersonAdd />
            </button>
            <button
              id="button-register-group"
              type="button"
              onClick={handleClickNewGroup}
            >
              <MdGroupAdd />
            </button>
          </ButtonGroup>
        </Header>
      )}

      {visibleTableGroups && groups.length > 0 && (
        <Table>
          <Scroll>
            <ul>
              {groups.map((group) => (
                <li>
                  <h5 id="description">{group.groupDescription}</h5>{" "}
                  <h5 id="timestamp">
                    {format(
                      addHours(parseISO(group.timestamp), 3),
                      "dd/MM/yyyy HH:mm"
                    )}
                  </h5>
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
                <FormControl className={classes.formControl}>
                  <h3>{t("Cursos")}</h3>
                  <Select
                    className={classes.select}
                    labelId="demo-mutiple-name-label"
                    id="demo-mutiple-name"
                    multiple
                    value={coursesId}
                    onChange={handleChangeCourse}
                    input={<Input classes={classes} />}
                    MenuProps={MenuProps}
                  >
                    {courses.map((course) => (
                      <MenuItem key={course.id} value={course.id}>
                        {course.courseDescription}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </AddCourses>
            </Courses>
            <hr />
            <Footer>
              <button type="submit">{t("Salvar")}</button>
              <button type="button" onClick={handleClickClose}>
                {t("Cancelar")}
              </button>
            </Footer>
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
          <h3>{t("Membros")}</h3>
          <Members>
            <Scroll id="scrollmembers">
              <CurrentMembers>
                {membersGroup.length === 0 && (
                  <h4>{t("Não existe usuário nesse grupo")}</h4>
                )}
                {membersGroup.length > 0 && (
                  <ul>
                    {membersGroup.map((user) => (
                      <li>
                        <FaUser />

                        <span>{user.userfirstName}</span>
                        <span>{user.userCellNumber}</span>
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

            <AddMembers>
              <Form onSubmit={handleAddMembersCache}>
                <InputRocket
                  name="email"
                  type="email"
                  placeholder={t("E-mail")}
                />
                <button type="submit">
                  <MdAddCircle size={40} />
                </button>
              </Form>
            </AddMembers>
            {visibleNotFoundUser && (
              <NotFoundUser>
                <MdWarning size={30} />
                <h5>{t("Esse usuário não existe")}</h5>
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
          <hr />
          <Footer>
            <button type="button" onClick={handleSaveMembersInGroup}>
              {t("Salvar")}
            </button>
            <button type="button" onClick={handleClickClose}>
              {t("Cancelar")}
            </button>
          </Footer>
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
          <h3>{t("Cursos atuais")}</h3>
          <CoursesEdit>
            <Scroll id="scrollcourses">
              <CurrentCourses>
                {coursesGroup.length === 0 && (
                  <h4>{t("Não existe curso nesse grupo")}</h4>
                )}
                {coursesGroup.length > 0 && (
                  <ul>
                    {coursesGroup.map((course) => (
                      <li>
                        <img
                          src={
                            course.courseImage ||
                            "https://www.freepik.com/free-icon/image-interface-tile-symbol_755589.htm#page=1&query=no%20image&position=9"
                          }
                          alt="Course"
                        />

                        <span>{course.courseDescription}</span>
                        <span>{course.courseResume}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </CurrentCourses>
            </Scroll>
            <hr />
            <AddCoursesEdit>
              <FormControl className={classes.formControl}>
                <h3>{t("Adicionar Cursos")}</h3>
                <Select
                  className={classes.select}
                  labelId="demo-mutiple-name-label"
                  id="demo-mutiple-name"
                  multiple
                  value={coursesId}
                  onChange={handleChangeCourse}
                  input={<Input classes={classes} />}
                  MenuProps={MenuProps}
                >
                  {courses.map((course) => (
                    <MenuItem key={course.id} value={course.id}>
                      {course.courseDescription}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </AddCoursesEdit>
          </CoursesEdit>
          <hr />
          <Footer>
            <button type="button" onClick={handleSaveCoursesInGroup}>
              {t("Salvar")}
            </button>
            <button type="button" onClick={handleClickClose}>
              {t("Cancelar")}
            </button>
          </Footer>
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
                  name="name"
                  type="text"
                  placeholder={t("Nome completo")}
                />
                <InputRocket
                  name="email"
                  type="email"
                  placeholder={t("E-mail")}
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
                <select onChange={handleGroupChange}>
                  <option disabled selected>
                    {t("Cursos")}
                  </option>
                  {groups.map((group) => (
                    <option key={group.id} value={group.id}>
                      {group.groupDescription}
                    </option>
                  ))}
                </select>
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
    </Container>
  );
}
