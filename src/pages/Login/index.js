import React, { useContext } from "react";
import Layout from "src/components/global/Layout";
import { Button } from "antd";
import { logout, login } from "src/utils/auth";
import AuthContext from "src/storage/auth";
import LoginForm from "src/components/auth/LoginForm";

const Login = () => {
  const onFinish = ({ identifier, password, remember }) => {
    login({ identifier, password, remember });
  };
  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };
  const {
    loggedIn, user,
  } = useContext(AuthContext);
  const isAuthenticated = loggedIn && user;

  return (
    <Layout selectedTab={"5"}>
      <div className="site-layout-content">
        {!isAuthenticated ? (
          <LoginForm onFinish={onFinish} onFinishFailed={onFinishFailed} />
        ) : (
          <Button type="primary" onClick={logout}>
            Cerrar Sesión
          </Button>
        )}
      </div>
    </Layout>
  );
};

export default Login;
