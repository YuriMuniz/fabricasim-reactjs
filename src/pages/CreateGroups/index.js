import React, { useState } from "react";

import {
  MdSearch,
  MdGroupAdd,
  MdEdit,
  MdAddCircle,
  MdClose,
  MdPersonAdd,
} from "react-icons/md";

import { FaUserMinus, FaUser } from "react-icons/fa";
import { Form } from "@rocketseat/unform";

import Input from "@material-ui/core/Input";

import MenuItem from "@material-ui/core/MenuItem";

import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";

import {
  Container,
  Header,
  Table,
  InputGroup,
  NewGroup,
  HeaderGroup,
  Members,
  Principal,
  Footer,
  EditGroup,
  CurrentMembers,
  AddMembers,
  Scroll,
  RegisterUser,
  UserData,
  ButtonGroup,
} from "./styles";

export default function CreateGroups() {
  const [visibleTableGroups, setVisibleTableGroups] = useState(true);
  const [visibleNewGroup, setVisibleNewGroup] = useState(false);
  const [visibleEditroup, setVisibleEditGroup] = useState(false);
  const [visibleRegisterUser, setVisibleRegisterUser] = useState(false);

  const [roleName, setRoleName] = useState([]);

  // const roles = ["MANAGER", "VIEWER", "STUDENT"];

  const roles = ["MANAGER", "VIEWER", "STUDENT"];

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

  const handleChange = (event) => {
    setRoleName(event.target.value);
  };

  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setRoleName(value);
  };

  function handleClickNewGroup() {
    setVisibleNewGroup(true);
    setVisibleTableGroups(false);
    setVisibleEditGroup(false);
    setVisibleRegisterUser(false);
  }

  function handleClickClose() {
    setVisibleNewGroup(false);
    setVisibleTableGroups(true);
    setVisibleEditGroup(false);
    setVisibleRegisterUser(false);
  }

  function handleClickEditGroup() {
    setVisibleNewGroup(false);
    setVisibleTableGroups(false);
    setVisibleEditGroup(true);
    setVisibleRegisterUser(false);
  }

  function handleClickRegisterUser() {
    setVisibleNewGroup(false);
    setVisibleTableGroups(false);
    setVisibleEditGroup(false);
    setVisibleRegisterUser(true);
  }

  return (
    <Container>
      {visibleTableGroups && (
        <Header>
          <InputGroup>
            <MdSearch size={25} color="#fff" />
            <input type="text" placeholder="Pesquisar pelo nome" />
          </InputGroup>
          <ButtonGroup>
            <button
              id="button-register-user"
              type="button"
              onClick={handleClickRegisterUser}
            >
              <MdPersonAdd size="30" />
            </button>
            <button
              id="button-register-group"
              type="button"
              onClick={handleClickNewGroup}
            >
              <MdGroupAdd size="30" />
            </button>
          </ButtonGroup>
        </Header>
      )}

      {visibleTableGroups && (
        <Table>
          <ul>
            <li>
              <h5 id="description">UFPE MC 2020.2</h5>{" "}
              <h5 id="timestamp">24/04/2020 07:23h</h5>{" "}
              <button type="button" onClick={handleClickEditGroup}>
                <MdEdit size={20} />
              </button>{" "}
            </li>
            <li>
              <h5 id="description">UPE MC 2020.1</h5>{" "}
              <h5 id="timestamp">27/04/2020 09:23h</h5>{" "}
              <button type="button" onClick={handleClickEditGroup}>
                <MdEdit size={20} />
              </button>{" "}
            </li>
          </ul>
        </Table>
      )}

      {visibleNewGroup && (
        <NewGroup>
          <HeaderGroup>
            <h1>Novo grupo</h1>
            <button type="button" onClick={handleClickClose}>
              <MdClose color="#fff" />{" "}
            </button>
          </HeaderGroup>
          <Form>
            <Principal>
              <input placeholder="Descrição" type="text" />
              <textarea placeholder="Resumo" />
              <hr />
            </Principal>
            <h3>Membros</h3>
            <Members>
              <AddMembers>
                <input type="email" placeholder="E-mail" />
                <MdAddCircle size={40} />
              </AddMembers>
            </Members>
            <hr />
            <Footer>
              <button type="submit">Salvar</button>
              <button type="button" onClick={handleClickClose}>
                Cancelar
              </button>
            </Footer>
          </Form>
        </NewGroup>
      )}
      {visibleEditroup && (
        <EditGroup>
          <HeaderGroup>
            <h1>Atualizar grupo</h1>
            <button type="button" onClick={handleClickClose}>
              <MdClose color="#fff" />{" "}
            </button>
          </HeaderGroup>
          <Form>
            <Principal>
              <input placeholder="Descrição" type="text" />
              <textarea placeholder="Resumo" />
              <hr />
            </Principal>
          </Form>
          <h3>Membros</h3>
          <Members>
            <Scroll>
              <CurrentMembers>
                <FaUser />
                <div>
                  <span>Yuri Muniz</span>
                  <span>y.munizgonzalez@gmail.com</span>
                </div>

                <Select
                  labelId="demo-mutiple-checkbox-label"
                  id="demo-mutiple-checkbox"
                  multiple
                  value={roleName}
                  onChange={handleChange}
                  input={<Input />}
                  renderValue={(selected) => selected.join(", ")}
                  MenuProps={MenuProps}
                >
                  {roles.map((role) => (
                    <MenuItem key={role} value={role}>
                      <Checkbox checked={roleName.indexOf(role) > -1} />
                      <ListItemText primary={role} />
                    </MenuItem>
                  ))}
                </Select>

                <FaUserMinus />
              </CurrentMembers>
              <CurrentMembers>
                <FaUser />
                <div>
                  <span>Yuri Muniz</span>
                  <span>y.munizgonzalez@gmail.com</span>
                </div>

                <Select
                  labelId="demo-mutiple-checkbox-label"
                  id="demo-mutiple-checkbox"
                  multiple
                  value={roleName}
                  onChange={handleChange}
                  input={<Input />}
                  renderValue={(selected) => selected.join(", ")}
                  MenuProps={MenuProps}
                >
                  {roles.map((role) => (
                    <MenuItem key={role} value={role}>
                      <Checkbox checked={roleName.indexOf(role) > -1} />
                      <ListItemText primary={role} />
                    </MenuItem>
                  ))}
                </Select>

                <FaUserMinus />
              </CurrentMembers>
              <CurrentMembers>
                <FaUser />
                <div>
                  <span>Yuri Muniz</span>
                  <span>y.munizgonzalez@gmail.com</span>
                </div>

                <Select
                  labelId="demo-mutiple-checkbox-label"
                  id="demo-mutiple-checkbox"
                  multiple
                  value={roleName}
                  onChange={handleChange}
                  input={<Input />}
                  renderValue={(selected) => selected.join(", ")}
                  MenuProps={MenuProps}
                >
                  {roles.map((role) => (
                    <MenuItem key={role} value={role}>
                      <Checkbox checked={roleName.indexOf(role) > -1} />
                      <ListItemText primary={role} />
                    </MenuItem>
                  ))}
                </Select>

                <FaUserMinus />
              </CurrentMembers>
            </Scroll>
            <AddMembers>
              <input type="email" placeholder="E-mail" />
              <MdAddCircle size={40} />
            </AddMembers>
          </Members>
          <hr />
          <Footer>
            <button type="submit">Salvar</button>
            <button type="button" onClick={handleClickClose}>
              Cancelar
            </button>
          </Footer>
        </EditGroup>
      )}

      {visibleRegisterUser && (
        <RegisterUser>
          <HeaderGroup>
            <h1>Registrar usuário</h1>
            <button type="button" onClick={handleClickClose}>
              <MdClose color="#fff" />{" "}
            </button>
          </HeaderGroup>
          <Form>
            <UserData>
              <input placeholder="Nome" type="text" />
              <input placeholder="País" type="text" />
              <input placeholder="E-mail" type="text" />
              <input placeholder="Estado" type="text" />
              <input placeholder="Celular" type="text" />

              <select placeholder="Grupo">
                <option>UFPE MC 2020.2</option>
                <option>UPE MC 2020.1</option>
              </select>
            </UserData>
          </Form>
          <hr />
          <Footer>
            <button type="submit">Salvar</button>
            <button type="button" onClick={handleClickClose}>
              Cancelar
            </button>
          </Footer>
        </RegisterUser>
      )}
    </Container>
  );
}
