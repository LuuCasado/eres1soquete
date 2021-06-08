import React from "react";
import Layout from "src/components/global/Layout";
import { Button } from "antd";
import { logout, login, AuthContext } from "src/utils/auth";
import { useContext } from "react";
import LoginForm from "src/components/auth/LoginForm";

const Login = () => {
  const onFinish = ({ identifier, password, remember }) => {
    login({ identifier, password, remember });
  };
  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };
  const {
    auth: { loggedIn, user },
  } = useContext(AuthContext);
  const isAuthenticated = loggedIn && user;

  return (
    <Layout selectedTab={"4"}>
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
