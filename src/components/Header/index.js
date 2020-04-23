import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { useSelector } from "react-redux";

import { MdAccountCircle, MdMenu } from "react-icons/md";

import { Link } from "react-router-dom";

import logo from "../../assets/logo-full.png";
import { Container, Content, Profile } from "./styles";

export default function Header() {
  const profile = useSelector((state) => state.user.profile);
  const { t } = useTranslation();

  function handleLinkPermissionsVisible() {
    const roles = [];
    for (let x = 0; x < profile.roles.length; x++) {
      roles.push(profile.roles[x]);
    }
    if (roles.includes("ADMIN")) {
      return true;
    }
    return false;
  }

  function handleCreateGroupsVisible() {
    const roles = [];
    for (let x = 0; x < profile.roles.length; x++) {
      roles.push(profile.roles[x]);
    }
    if (roles.includes("TEACHER") || roles.includes("ADMIN")) {
      return true;
    }
    return false;
  }
  function handleRequestAccessVisible() {
    const roles = [];
    for (let x = 0; x < profile.roles.length; x++) {
      roles.push(profile.roles[x]);
    }
    if (roles.includes("STUDENT") && roles.length === 1) {
      return true;
    }
    return false;
  }

  const [linkPermissionsVisible] = useState(handleLinkPermissionsVisible());
  const [linkCreateGroupVisible] = useState(handleCreateGroupsVisible());
  const [linkRequestAccessVisible] = useState(handleRequestAccessVisible());

  console.log(linkPermissionsVisible);
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Fábrica Sim" />
          {linkPermissionsVisible && (
            <Link to="/permissions">{t("Permissões")}</Link>
          )}
          {linkCreateGroupVisible && (
            <Link to="/create-groups">{t("Criar grupo")}</Link>
          )}
          {linkRequestAccessVisible && (
            <Link to="/access-request">{t("Solicitar acesso")}</Link>
          )}
        </nav>
        <aside>
          <MdMenu id="menu" size={30} />
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">{t("Meu perfil")}</Link>
            </div>
            <MdAccountCircle id="account-ico" size={30} />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
