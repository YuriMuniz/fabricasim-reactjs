import React from "react";
import { useTranslation } from "react-i18next";

import { useSelector } from "react-redux";

import { MdAccountCircle, MdMenu } from "react-icons/md";

import { Link } from "react-router-dom";

import logo from "../../assets/logo-full.png";
import { Container, Content, Profile } from "./styles";

export default function Header() {
  const profile = useSelector((state) => state.user.profile);
  const { t } = useTranslation();

  const authorizateAccessRequest =
    profile.roles.some((e) => ["STUDENT"].includes(e)) &&
    profile.roles.length === 1;
  const authorizateCreateGroups = profile.roles.some((e) =>
    ["SUPER", "ADMIN+", "ADMIN", "TEACHER"].includes(e)
  );
  const authorizatePermissions = profile.roles.some((e) =>
    ["SUPER", "ADMIN+", "ADMIN"].includes(e)
  );

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Fábrica Sim" />
          {authorizatePermissions && (
            <Link to="/permissions">{t("Permissões")}</Link>
          )}
          {authorizateCreateGroups && (
            <Link to="/create-groups">{t("Criar grupo")}</Link>
          )}
          {authorizateAccessRequest && (
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
