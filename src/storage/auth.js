import React, { createContext } from "react";

const defaultState = {
  jwt: null,
  user: {},
  loggedIn: false,
};

const AuthContext = createContext(defaultState);

export const initAuth = () => {
  const persistedState = JSON.parse(localStorage.getItem("auth"));

  if (!persistedState) {
    localStorage.setItem("auth", JSON.stringify(defaultState));
    return defaultState;
  }
  return persistedState;
};

export default AuthContext