import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { FaSpinner } from "react-icons/fa";

import { Link } from "react-router-dom";
import { Form, Input } from "@rocketseat/unform";

import * as Yup from "yup";

import { signInRequest } from "../../store/modules/auth/actions";

import logo from "../../assets/logo.png";

import lt from "../../assets/logo-text-white.png";
import { Images, Container } from "./styles";
import SelectLangAuth from "../../components/SelectLangAuth";

export default function SignIn() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    email: Yup.string()
      .email(t("Insira um e-mail válido"))
      .required(t("O e-mail é obrigatório")),
    password: Yup.string().required(t("A senha é obrigatória")),
  });

  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <SelectLangAuth />
      <Images>
        <img src={logo} alt="Fábrica Sim" />

        <img
          style={{ width: "50%", marginTop: "10px" }}
          src={lt}
          alt="Fábrica Sim"
        />
      </Images>

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder={t("Seu e-mail")} />
        <Input name="password" type="password" placeholder={t("Sua senha")} />

        {!loading && <button type="submit">{t("Acessar")}</button>}
        {loading && (
          <button type="submit" disabled="disabled">
            <FaSpinner id="spinner" size={20} />
          </button>
        )}

        <Link to="/register">{t("Criar conta")}</Link>
      </Form>
    </Container>
  );
}
