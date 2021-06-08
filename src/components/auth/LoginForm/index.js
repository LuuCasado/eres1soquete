import React from "react";
import { Form, Input, Button, Checkbox } from "antd";

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

const LoginForm = ({ onFinish, onFinishFailed }) => {
  const credentials = JSON.parse(localStorage.getItem("credentials"));

  return (
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
  );
};

export default LoginForm;
