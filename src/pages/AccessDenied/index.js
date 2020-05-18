import React from "react";
import { useTranslation } from "react-i18next";

import { Container } from "./styles";

export default function AccessDenied() {
  const { t } = useTranslation();
  return (
    <Container>
      <div>
        <h3>{t("Sua conta de usuário foi criada")}</h3>
      </div>
    </Container>
  );
}
