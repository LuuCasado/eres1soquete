import React from "react";
import Button from "src/components/global/Button";
import { Form, Input, Tooltip } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const RegisterForm = ({ onFinish }) => {
  const [form] = Form.useForm();

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        prefix: "0223",
      }}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "El E-mail no es válido",
          },
          {
            required: true,
            message: "Por favor, ingresa tu E-mail",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Contraseña"
        rules={[
          {
            required: true,
            message: "Ingresa tu contraseña",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirma tu Contraseña"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Confirma tu contraseña!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                // eslint-disable-next-line no-undef
                return Promise.resolve();
              }

              // eslint-disable-next-line no-undef
              return Promise.reject(new Error("Las contraseñas no coinciden!"));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="instagramUser"
        label={
          <span>
            Usuario de Instagram&nbsp;
            <Tooltip title="Como es tu usuario en instagram?">
              <QuestionCircleOutlined />
            </Tooltip>
          </span>
        }
        rules={[
          {
            required: false,
            message: "Por favor, ingresa tu usuario",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="residence"
        label="Ciudad"
        rules={[
          {
            required: true,
            message: "Por favor, ingresa tu ciudad de residencia",
          },
        ]}
      >
        <Input placeholder="Mar del Plata" />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Telefono"
        rules={[
          {
            required: true,
            message: "Por favor, ingresa tu numero!",
          },
        ]}
      >
        <Input placeholder="(0223)-555-5555" />
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          ¡Registrate!
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
