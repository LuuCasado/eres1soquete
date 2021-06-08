import React from "react";
import Layout from "src/components/global/Layout";
import { Form, Input, Button, Checkbox } from "antd";
import { login } from "src/utils/auth";
import { navigate } from "gatsby";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Login = () => {
  // TODO: remove components from screen
  // TODO: navigate out of login screen in case we are already logged in

  const onFinish = ({ identifier, password, remember }) => {
    console.log("Success:", { identifier, password, remember });
    login({ identifier, password, remember });
  };
  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };
  const credentials = JSON.parse(localStorage.getItem("credentials"));

  return (
    <Layout selectedTab={"4"}>
      <div className="site-layout-content">
        <Form
          {...layout}
          name="basic"
          initialValues={{
            ...credentials,
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Usuario"
            name="identifier"
            rules={[
              {
                required: true,
                message: "Por favor, ingresá tu usuario!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Contraseña"
            name="password"
            rules={[
              {
                required: true,
                message: "Por favor, ingresá tu contraseña!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Recuerdame</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Ingresá
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Layout>
  );
};

export default Login;
