import React from "react";

import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";

import lt from "../../assets/logo-text-white.png";
import { Images } from "./styles";

export default function SignIn() {
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
      <form>
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua senha" />

        <button type="submit">Acessar</button>

        <Link to="/register">Criar conta</Link>
      </form>
    </>
  );
}
