import React from "react";
import axios from "axios";
import { apiURL } from "src/utils/constants";
import { navigate } from "gatsby";

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

export const login = async ({ identifier, password }) => {
  try {
    const {
      data: { jwt, user },
    } = await axios.post(`${apiURL}/auth/local`, {
      identifier,
      password,
    });
    localStorage.setItem("auth", JSON.stringify({ jwt, user, loggedIn: true }));
    navigate("/Store");
  } catch (e) {
    console.error(e);
  }
};

export const register = async ({ username, email, password }) => {
  try {
    const {
      data: { jwt, user },
    } = await axios.post(`${apiURL}/auth/local/register`, {
      username,
      email,
      password,
    });
    localStorage.setItem("auth", JSON.stringify({ jwt, user, loggedIn: true }));
    navigate("/Store");
  } catch (e) {
    console.error(e);
  }
};

// TODO: add logout flow

// TODO: add register flow
