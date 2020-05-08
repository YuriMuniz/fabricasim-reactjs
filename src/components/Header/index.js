import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { useSelector } from "react-redux";

import { MdAccountCircle, MdMenu } from "react-icons/md";

import { Link } from "react-router-dom";

import logo from "../../assets/logo-full.png";
import { Container, Content, Profile, MenuMobile } from "./styles";

export default function Header() {
  const profile = useSelector((state) => state.user.profile);
  const { t } = useTranslation();
  const [visibleMenuMobile, setVisibleMenuMobile] = useState(false);

  function handleVisibleMenuMobile() {
    setVisibleMenuMobile(!visibleMenuMobile);
  }

  const authorizateAccessRequest =
    profile.roles.some((e) => ["STUDENT"].includes(e)) &&
    profile.roles.length === 1;
  const authorizateCreateGroups = profile.roles.some((e) =>
    ["SUPER", "ADMIN+", "ADMIN"].includes(e)
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
            <Link to="/permissions">{t("PERMISSÕES")}</Link>
          )}
          {authorizateCreateGroups && <Link to="/groups">{t("GRUPOS")}</Link>}
        </nav>
        <aside>
          <button type="button" onClick={handleVisibleMenuMobile}>
            <MdMenu id="menu" size={30} />
          </button>

          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">{t("Meu perfil")}</Link>
            </div>
            <MdAccountCircle id="account-ico" size={30} />
          </Profile>
        </aside>
      </Content>
      {visibleMenuMobile && (
        <MenuMobile>
          {authorizatePermissions && (
            <Link to="/permissions">{t("Permissões")}</Link>
          )}
          {authorizateCreateGroups && <Link to="/groups">{t("Grupos")}</Link>}
          {!authorizateAccessRequest && (
            <Link to="/profile">{t("Meu perfil")}</Link>
          )}
        </MenuMobile>
      )}
    </Container>
  );
}
