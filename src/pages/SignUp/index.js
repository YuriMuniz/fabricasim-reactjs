import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";

import logo from "../../assets/logo-full.png";

import { signUpRequest } from "../../store/modules/auth/actions";

import listHelper from "../../util/listHelper";

import SelectLangAuth from "../../components/SelectLangAuth";

import { Images, Container } from "./styles";

export default function SignIn() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
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

  function handleSubmit(data) {
    let state = "";
    if (countrySelect === "País") {
      toast.error(t("O país é obrigatório"));
      return;
    }
    if (countrySelect === "BR") {
      if (stateSelect === undefined) {
        toast.error(t("O estado é obrigatório"));
        return;
      }
      state = stateSelect;
    } else if (data.state === undefined || data.state === "") {
      toast.error(t("O estado é obrigatório"));
      return;
    } else {
      state = data.state;
    }

    if (data.password !== data.confirmPass) {
      toast.error(t("As senhas não coincidem"));
      return;
    }

    dispatch(
      signUpRequest(
        data.name,
        data.email,
        data.occupation,
        data.cellNumber,
        countrySelect,
        state,
        data.password
      )
    );
    console.log(state);
    console.log(stateSelect);
    console.log(countrySelect);
    console.log(data);
  }

  return (
    <Container>
      <SelectLangAuth />
      <Images>
        <img src={logo} alt="Fábrica Sim" />
      </Images>

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder={t("Nome completo")} />
        <Input name="email" type="email" placeholder={t("E-mail")} />
        <Input name="occupation" type="text" placeholder={t("Ocupação")} />
        <Input name="cellNumber" type="number" placeholder={t("Celular")} />

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
        <Input name="password" type="password" placeholder={t("Senha")} />
        <Input
          name="confirmPass"
          type="password"
          placeholder={t("Confirmar senha")}
        />

        <button type="submit">
          {loading ? `${t("Carregando")}...` : t("Criar conta")}{" "}
        </button>

        <Link to="/">{t("Já tenho login")} </Link>
      </Form>
    </Container>
  );
}
