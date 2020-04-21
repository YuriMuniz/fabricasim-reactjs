import React from "react";

import { Link } from "react-router-dom";

import logo from "../../assets/logo-full.png";

import { Images } from "./styles";

export default function SignIn() {
  return (
    <>
      <Images>
        <img src={logo} alt="Fábrica Sim" />
      </Images>

      <form>
        <input type="email" placeholder="Nome completo" />
        <input type="email" placeholder="E-mail" />
        <input type="text" placeholder="Ocupação" />
        <input type="text" placeholder="Celular" />
        <input type="text" placeholder="País" />
        <input type="text" placeholder="Estado" />
        <input type="password" placeholder="Senha" />
        <input type="password" placeholder="Confirmar senha" />

        <button type="submit">Criar conta</button>

        <Link to="/">Já tenho login</Link>
      </form>
    </>
  );
}
