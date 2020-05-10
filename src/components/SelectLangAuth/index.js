import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaAngleDown } from "react-icons/fa";
import {
  SelectLanguage,
  LanguageItem,
  LanguageItems,
  ContainerLanguage,
} from "./styles";
import brazil from "../../assets/brazil-icon-flag.png";
import spanish from "../../assets/spain-icon-flag.png";
import united from "../../assets/united-icon-flag-32.png";

export default function SelectLang() {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [selectFlag, setSelectFlag] = useState();
  const [visibleOptionsLanguages, setVisibleOptionsLanguages] = useState(false);

  const { t, i18n } = useTranslation();

  useState(handleLoadLanguage);

  function handleLoadLanguage() {
    const lng = i18n.language;
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
  }

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
  return (
    <ContainerLanguage>
      <SelectLanguage id="languageweb">
        <div>
          <img src={selectFlag} alt="flag" />
          <h5>{selectedLanguage}</h5>
        </div>
        <button type="button" onClick={handleVisibleOptionsLanguage}>
          <FaAngleDown size={15} />
        </button>
      </SelectLanguage>
      {visibleOptionsLanguages && (
        <LanguageItems id="languagesweb">
          <LanguageItem>
            <button type="button" onClick={() => changeLanguage("pt")}>
              <img src={brazil} alt="flag" />
              <h5>{t("Português")}</h5>
            </button>
          </LanguageItem>
          <LanguageItem>
            <button type="button" onClick={() => changeLanguage("en")}>
              <img src={united} alt="flag" />
              <h5>{t("Inglês")}</h5>
            </button>
          </LanguageItem>
          <LanguageItem>
            <button type="button" onClick={() => changeLanguage("es")}>
              <img src={spanish} alt="flag" />
              <h5>{t("Espanhol")}</h5>
            </button>
          </LanguageItem>
        </LanguageItems>
      )}
    </ContainerLanguage>
  );
}
