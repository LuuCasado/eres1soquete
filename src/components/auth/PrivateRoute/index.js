import { useContext } from "react";
import AuthContext from "src/storage/auth";
import { navigate } from "gatsby";
import { privateRoutes } from "src/utils/constants";

const PrivateRoute = ({ children, location }) => {
  const {
    loggedIn, user
  } = useContext(AuthContext);
  const isAuthenticated = loggedIn && user;

  if (
    !isAuthenticated &&
    privateRoutes.includes(location.pathname.replaceAll("/", ""))
  ) {
    navigate("/Login");
    return null;
  }

  return children;
};
export default PrivateRoute;
