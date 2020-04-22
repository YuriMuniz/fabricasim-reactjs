import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";
import logo from "../../assets/logo-full.png";

import listHelper from "../../util/listHelper";

import { Images } from "./styles";

export default function SignIn() {
  const { t } = useTranslation();

  const schema = Yup.object().shape({
    name: Yup.string().required(t("O nome é obrigatório")),
    email: Yup.string()
      .email(t("Insira um e-mail válido"))
      .required(t("O email é obrigatório")),
    occupation: Yup.string().required(t("A ocupação é obrigatória")),
    cellNumber: Yup.number().required(t("O celular é obrigatório")),
    country: Yup.string().required(t("O país é obrigatório")),
    state: Yup.string().required(t("O estado é obrigatório")),
    password: Yup.string()
      .min(6, t("A senha deve conter no mínimo 6 caracteres"))
      .required(t("A senha é obrigatória")),
    confirmPass: Yup.string().required(
      t("A confirmação da senha é obrigatória")
    ),
  });

  const [isBr, setIsBr] = useState(false);

  let state;
  if (isBr) {
    state = (
      <select placeholder={t("Estado")} size="number" defaultValue="Estado">
        <option value="1" disabled selected>
          Estado
        </option>
        {listHelper.States.map((s) => (
          <option key={s.key} value={s.key}>
            {s.view}
          </option>
        ))}
        ;
      </select>
    );
  } else {
    state = <Input name="state" type="text" placeholder={t("Estado")} />;
  }

  function handleCountryChange(event) {
    console.log(event.target.value);
    if (event.target.value === "BR") {
      setIsBr(true);
    } else {
      setIsBr(false);
    }
  }

  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <>
      <Images>
        <img src={logo} alt="Fábrica Sim" />
      </Images>

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder={t("Nome completo")} />
        <Input name="email" type="email" placeholder={t("E-mail")} />
        <Input name="occupation" type="text" placeholder={t("Ocupação")} />
        <Input name="cellNumber" type="text" placeholder={t("Celular")} />
        <select
          name="country"
          placeholder={t("País")}
          size="number"
          onChange={handleCountryChange}
        >
          <option disabled selected>
            País
          </option>
          {listHelper.Countries.map((c) => (
            <option key={c.value} value={c.value}>
              {c.view}
            </option>
          ))}
          ;
        </select>
        {state}
        <Input name="password" type="password" placeholder={t("Senha")} />
        <Input
          name="confirmPass"
          type="password"
          placeholder={t("Confirmar senha")}
        />

        <button type="submit">{t("Criar conta")} </button>

        <Link to="/">{t("Já tenho login")} </Link>
      </Form>
    </>
  );
}
