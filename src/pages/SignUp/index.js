import React, { useState } from "react";

import { Link } from "react-router-dom";

import logo from "../../assets/logo-full.png";

import listHelper from "../../util/listHelper";

import { Images, Select, SelectState, InputState } from "./styles";

export default function SignIn() {
  // const [country, setCountry] = useState();
  const [isBr, setIsBr] = useState(false);

  function handleCountryChange(event) {
    console.log(event.target.value);
    if (event.target.value === "Brazil") {
      setIsBr(true);
    } else {
      setIsBr(false);
    }
  }

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
        <Select placeholder="País" size="number" onChange={handleCountryChange}>
          <option value="1" disabled selected>
            País
          </option>
          {listHelper.Countries.map((c) => (
            <option key={c.key} value={c.key}>
              {c.view}
            </option>
          ))}
          ;
        </Select>
        <SelectState isBr={isBr} placeholder="País" size="number">
          {listHelper.States.map((s) => (
            <option key={s.key} value={s.key}>
              {s.view}
            </option>
          ))}
          ;
        </SelectState>
        <InputState isBr={isBr} type="text" placeholder="Estado" />
        <input type="password" placeholder="Senha" />
        <input type="password" placeholder="Confirmar senha" />

        <button type="submit">Criar conta</button>

        <Link to="/">Já tenho login</Link>
      </form>
    </>
  );
}
