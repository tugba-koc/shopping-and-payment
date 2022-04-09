import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import "./styled.scss";

function LoginForm() {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <label htmlFor="username">Adınız Soyadınız</label>
      <Form.Item
        name={['isim']}

        rules={[
          {
            required: true,
          }
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} />
      </Form.Item>

      <label htmlFor="email">Email Adresiniz</label>
      <Form.Item
        name={['email']}

        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="email"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Devam Et
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
