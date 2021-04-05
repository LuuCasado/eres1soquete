import Layout from "src/components/global/Layout";
import React from "react";
import RegisterForm from "src/components/store/RegisterForm";

const Register = () => {
  const onFinish = values => {
    console.log("Received values of form: ", values);
  };
  return (
    <Layout selectedTab={"3"}>
      <div className="site-layout-content">
        <RegisterForm onFinish={onFinish} />
      </div>
    </Layout>
  );
};

export default Register;
