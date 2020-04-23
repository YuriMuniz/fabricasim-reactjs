import { takeLatest, call, put, all } from "redux-saga/effects";

import { toast } from "react-toastify";

import { signInSuccess, signFailure, signUpSuccess } from "./actions";

import history from "../../../services/history";

import api from "../../../services/api";

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, "sessions", {
      email,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    const roles = [];
    for (let x = 0; x < user.roles.length; x++) {
      roles.push(user.roles[x]);
    }
    if (roles.includes("STUDENT") && roles.length === 1) {
      history.push("/access-request");
    }
    if (roles.includes("TEACHER")) {
      history.push("/create-groups");
    }
    if (
      roles.includes("ADMIN") ||
      roles.includes("ADMIN+") ||
      roles.includes("SUPER")
    ) {
      history.push("/permissions");
    }
  } catch (err) {
    toast.error("Falha na autenticação, verifique seus dados");
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const {
      name,
      email,
      occupation,
      cellNumber,
      country,
      state,
      password,
    } = payload;

    yield call(api.post, "users", {
      name,
      email,
      occupation,
      cellNumber,
      country,
      state,
      password,
    });

    yield put(signUpSuccess());

    history.push("/");
  } catch (err) {
    toast.error("Falha no cadastro, verifique os dados e tente novamente.");
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push("/");
}

export default all([
  takeLatest("persist/REHYDRATE", setToken),
  takeLatest("@auth/SIGN_IN_REQUEST", signIn),
  takeLatest("@auth/SIGN_UP_REQUEST", signUp),
  takeLatest("@auth/SIGN_OUT", signOut),
]);
