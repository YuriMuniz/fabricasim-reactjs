import React, { useState } from "react";

import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";

import { Form, Input } from "@rocketseat/unform";
import listHelper from "../../util/listHelper";

import { Container } from "./styles";

export default function Profile() {
  const profile = useSelector((state) => state.user.profile);
  console.log(profile);
  const { t } = useTranslation();
  // const dispatch = useDispatch();

  const loading = useSelector((state) => state.auth.loading);

  const schema = Yup.object().shape({
    name: Yup.string().required(t("O nome é obrigatório")),
    email: Yup.string()
      .email(t("Insira um e-mail válido"))
      .required(t("O email é obrigatório")),
    occupation: Yup.string().required(t("A ocupação é obrigatória")),
    cellNumber: Yup.string().required(t("O celular é obrigatório")),
    // country: Yup.string().required(t("O país é obrigatório")),
    state: Yup.string(),
    password: Yup.string()
      .min(6, t("A senha deve conter no mínimo 6 caracteres"))
      .required(t("A senha é obrigatória")),
    confirmPass: Yup.string().required(
      t("A confirmação da senha é obrigatória")
    ),
  });

  const [isBr, setIsBr] = useState(false);
  const [countrySelect, setCountrySelect] = useState();
  const [stateSelect, setStateSelect] = useState();

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

  function handleSubmit(data) {}

  return (
    <Container>
      <Form initialData={profile} schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder={t("Nome completo")} />
        <Input name="email" type="email" placeholder={t("E-mail")} />
        <Input name="occupation" type="text" placeholder={t("Ocupação")} />
        <Input name="cellNumber" type="number" placeholder={t("Celular")} />
        <hr />
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
          <Input name="state" type="text" placeholder={t("Estado")} />
        )}

        <hr />
        <Input
          name="oldPassword"
          type="password"
          placeholder={t("Sua senha atual")}
        />
        <Input
          name="password"
          type="password"
          placeholder={t("Sua nova senha")}
        />
        <Input
          name="confirmPass"
          type="password"
          placeholder={t("Confirmar nova senha")}
        />

        <button type="submit">
          {loading ? `${t("Carregando")}...` : t("Atualizar perfil")}{" "}
        </button>
      </Form>
      <button type="button">{t("Sair")}</button>
    </Container>
  );
}
