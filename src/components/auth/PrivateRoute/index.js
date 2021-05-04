import { useContext } from "react";
import { navigate } from "gatsby";
import { privateRoutes } from "src/utils/constants";
import { AuthContext } from "src/utils/auth";

const PrivateRoute = ({ children, location }) => {
  const authState = useContext(AuthContext);
  const isAuthenticated = authState.loggedIn && authState.user;

  if (!isAuthenticated && privateRoutes.includes(location.pathname)) {
    navigate("/Login");
    return null;
  }

  return children;
};
export default PrivateRoute;
