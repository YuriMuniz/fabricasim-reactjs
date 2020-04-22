import React, { useState } from "react";

import { Link } from "react-router-dom";

import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";
import logo from "../../assets/logo-full.png";

import listHelper from "../../util/listHelper";

import { Images } from "./styles";

export default function SignIn() {
  const schema = Yup.object().shape({
    name: Yup.string().required("O nome é obrigatório."),
    email: Yup.string()
      .email("Insira um e-mail válido.")
      .required("O email é Obrigatório."),
    occupation: Yup.string().required("A ocupação é obrigatória."),
    cellNumber: Yup.number().required("O celular é obrigatório."),
    country: Yup.string().required("O país é obrigatório."),
    state: Yup.string().required("O estado é obrigatório."),
    password: Yup.string()
      .min(6, "A senha deve conter no mínimo 6 caracteres.")
      .required("A senha é obrigatória."),
    confirmPass: Yup.string().required("A confirmação da senha é obrigatória."),
  });

  const [isBr, setIsBr] = useState(false);

  let state;
  if (isBr) {
    state = (
      <select placeholder="Estado" size="number" defaultValue="Estado">
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
    state = <Input name="state" type="text" placeholder="Estado" />;
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
        <Input name="name" type="text" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="E-mail" />
        <Input name="occupation" type="text" placeholder="Ocupação" />
        <Input name="cellNumber" type="text" placeholder="Celular" />
        <select
          name="country"
          placeholder="País"
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
        <Input name="password" type="password" placeholder="Senha" />
        <Input
          name="confirmPass"
          type="password"
          placeholder="Confirmar senha"
        />

        <button type="submit">Criar conta</button>

        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
