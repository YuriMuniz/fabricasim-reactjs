import React from "react";

import { MdAccountCircle } from "react-icons/md";

import { Link } from "react-router-dom";

import logo from "../../assets/logo-full.png";
import { Container, Content, Profile } from "./styles";

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Fábrica Sim" />
          <Link to="/permissions">PERMISSÕES</Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>Nome</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <MdAccountCircle size={30} />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
