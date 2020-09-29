import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { useSelector } from "react-redux";

import { MdAccountCircle, MdMenu } from "react-icons/md";

import { Link } from "react-router-dom";
import SelectLang from "../SelectLang";

import logo from "../../assets/logo-delorenzo-2.png";

import brazil from "../../assets/brazil-icon-flag.png";
import spanish from "../../assets/spain-icon-flag.png";
import united from "../../assets/united-icon-flag-32.png";

import { Container, Content, Profile, MenuMobile } from "./styles";

export default function Header() {
  const profile = useSelector((state) => state.user.profile);
  const { t, i18n } = useTranslation();
  const [visibleMenuMobile, setVisibleMenuMobile] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Português");
  const [selectFlag, setSelectFlag] = useState(brazil);
  const [visibleOptionsLanguages, setVisibleOptionsLanguages] = useState(false);

  const changeLanguage = (lng) => {
    setVisibleOptionsLanguages(false);
    i18n.changeLanguage(lng);
    if (lng === "en") {
      setSelectedLanguage(t("Inglês"));
      setSelectFlag(united);
    }
    if (lng === "es") {
      setSelectedLanguage(t("Espanhol"));
      setSelectFlag(spanish);
    }

    if (lng === "pt") {
      setSelectedLanguage(t("Português"));
      setSelectFlag(brazil);
    }
  };

  function handleVisibleOptionsLanguage() {
    setVisibleOptionsLanguages(!visibleOptionsLanguages);
  }

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

  const authorizatePowerBi = profile.roles.some((e) =>
  ["SUPER", "ADMIN+", "ADMIN", "TEACHER"].includes(e)
);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Delorenzo" />
          {authorizatePermissions && (
            <Link to="/permissions">{t("PERMISSÕES")}</Link>
                        
          )}
           {authorizatePermissions && (
            <Link to="/reports">{t("RELATÓRIOS")}</Link>
                        
          )}
          {authorizateCreateGroups && <Link to="/groups">{t("GRUPOS")}</Link>}
          {/* {authorizatePowerBi && <Link to="/groups">{t("Power Bi")}</Link>} */}
        </nav>
        <aside>
          <button type="button" onClick={handleVisibleMenuMobile}>
            <MdMenu id="menu" size={30} />
          </button>
          <div id="selectlangweb">
            <SelectLang />
          </div>
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
          <div id="select">
            <SelectLang />
          </div>
          <div id="links">
            {authorizatePermissions && (
              <Link to="/permissions">{t("Permissões")}</Link>
            )}
            {authorizateCreateGroups && <Link to="/groups">{t("Grupos")}</Link>}

            <Link to="/profile">{t("Meu perfil")}</Link>
          </div>
        </MenuMobile>
      )}
    </Container>
  );
}
