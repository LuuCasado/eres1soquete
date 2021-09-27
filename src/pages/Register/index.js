import Layout from "src/components/global/Layout";
import React from "react";
import RegisterForm from "src/components/auth/RegisterForm";
import { register } from "src/utils/auth";

const Register = () => {
  const onFinish = values => {
    const { email, password } = values;
    register({ username: email, email, password });
  };
  return (
    <Layout >
      <div className="site-layout-content">
        <RegisterForm onFinish={onFinish} />
      </div>
    </Layout>
  );
};

export default Register;
