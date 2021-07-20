import axios from "axios";
import { apiURL } from "src/utils/constants";
import { navigate } from "gatsby";

export const login = async ({ identifier, password, remember }) => {
  try {
    if (remember) {
      localStorage.setItem(
        "credentials",
        JSON.stringify({ identifier, password })
      );
    }
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

export const logout = async () => {
  localStorage.removeItem("auth");
  navigate("/Store");
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
