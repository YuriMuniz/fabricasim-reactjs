import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { Form, Input } from "@rocketseat/unform";

import * as Yup from "yup";

import { signInRequest } from "../../store/modules/auth/actions";

import logo from "../../assets/logo.png";

import lt from "../../assets/logo-text-white.png";
import { Images } from "./styles";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Insira um e-mail válido")
    .required("O email é Obrigatório"),
  password: Yup.string().required("A senha é obrigatória."),
});

export default function SignIn() {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <Images>
        <img src={logo} alt="Fábrica Sim" />

        <img
          style={{ width: "50%", marginTop: "10px" }}
          src={lt}
          alt="Fábrica Sim"
        />
      </Images>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />

        <button type="submit">{loading ? "Carregando..." : "Acessar"}</button>

        <Link to="/register">Criar conta</Link>
      </Form>
    </>
  );
}
