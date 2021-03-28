import React from "react";
import axios from "axios";
import { apiURL } from "src/utils/constants";

const defaultState = {
  jwt: null,
  user: {},
  loggedIn: false,
};

export const AuthContext = React.createContext();

export const initStorage = () => {
  const storage = JSON.parse(localStorage.getItem("auth"));
  if (!storage) {
    localStorage.setItem("auth", JSON.stringify(defaultState));
    return defaultState;
  }
  return storage;
};

export const wrapPageElement = ({ element }) => (
  <AuthContext.Provider value={{ auth: initStorage() }}>
    {element}
  </AuthContext.Provider>
);

export const login = async credentials => {
  try {
    const { data } = await axios.post(`${apiURL}/auth/local`, credentials);
    const { jwt, user } = data;
    localStorage.setItem("auth", JSON.stringify({ jwt, user, loggedIn: true }));
  } catch (e) {
    console.error(e);
  }
};

// TODO: add logout flow

// TODO: add register flow
