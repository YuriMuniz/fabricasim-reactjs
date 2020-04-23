import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";

import { Form, Input } from "@rocketseat/unform";
import { updateProfileRequest } from "../../store/modules/user/actions";
import { signOut } from "../../store/modules/auth/actions";

import listHelper from "../../util/listHelper";

import { Container } from "./styles";

export default function Profile() {
  const profile = useSelector((state) => state.user.profile);
  console.log(profile);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.auth.loading);

  const schema = Yup.object().shape({
    name: Yup.string().required(t("O nome é obrigatório")),
    occupation: Yup.string().required(t("A ocupação é obrigatória")),
    cellNumber: Yup.string().required(t("O celular é obrigatório")),
    // country: Yup.string().required(t("O país é obrigatório")),
    state: Yup.string(),
  });
  function verifyCountry() {
    if (profile.country === "BR") {
      return true;
    }
    return false;
  }

  const [isBr, setIsBr] = useState(verifyCountry());
  const [countrySelect, setCountrySelect] = useState(profile.country);
  const [stateSelect, setStateSelect] = useState(profile.state);

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

    const user = {
      name: data.name,
      email: profile.email,
      occupation: data.occupation,
      cellNumber: data.cellNumber,
      country: countrySelect,
      state,
      roles: profile.roles,
    };

    dispatch(updateProfileRequest(user));
    console.log(countrySelect);
    console.log(state);
    console.log(data);
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Form initialData={profile} schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder={t("Nome completo")} />
        <Input name="occupation" type="text" placeholder={t("Ocupação")} />
        <Input name="cellNumber" type="number" placeholder={t("Celular")} />
        <hr />
        <select
          value={countrySelect}
          size="number"
          onChange={handleCountryChange}
          defaultValue={t("País")}
        >
          <option>{t("País")}</option>
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
            value={stateSelect}
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

        <button type="submit">
          {loading ? `${t("Carregando")}...` : t("Atualizar perfil")}{" "}
        </button>
      </Form>
      <button type="button" onClick={handleSignOut}>
        {t("Sair")}
      </button>
    </Container>
  );
}
