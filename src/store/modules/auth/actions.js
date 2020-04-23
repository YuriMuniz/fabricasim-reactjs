export function signInRequest(email, password) {
  return {
    type: "@auth/SIGN_IN_REQUEST",
    payload: { email, password },
  };
}

export function signInSuccess(token, user) {
  return {
    type: "@auth/SIGN_IN_SUCCESS",
    payload: { token, user },
  };
}

export function signUpRequest(
  name,
  email,
  occupation,
  cellNumber,
  country,
  state,
  password
) {
  return {
    type: "@auth/SIGN_UP_REQUEST",
    payload: { name, email, occupation, cellNumber, country, state, password },
  };
}

export function signUpSuccess() {
  return {
    type: "@auth/SIGN_UP_SUCCESS",
  };
}

export function signFailure() {
  return {
    type: "@auth/SIGN_FAILURE",
  };
}

export function signOut() {
  return {
    type: "@auth/SIGN_OUT",
  };
}
