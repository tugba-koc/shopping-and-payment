import React from 'react';
import { Form, Input, Button } from 'antd';
import { Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleChange, selectUser, sendUser, selectStatus } from "../../redux/user/userSlice";
import "./styled.scss";
import Spinner from '../Spinner/Spinner';
import Error from '../Error/Error';

function LoginForm() {

  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  let status = useSelector(selectStatus);

  let history = useNavigate();

  const [redirect, setRedirect] = React.useState(false)

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!', 
      number: '${label} is not a valid number!',
    }
  };

  const onFinish = (values) => {
    dispatch(handleChange(values));
    dispatch(sendUser(JSON.stringify(user))); 
    setRedirect(true)
  };

  React.useEffect(() => {
    if (redirect) {
      history("/packages")
      localStorage.setItem("fullName", user.fullName);
    }
  }, [redirect, user.fullName, history]);

  if (status === "loading") {
    return <Spinner />
  } else if(status === "failed") {
    return <Error />
  }
  return (
    <>

      <Col span={12} offset={6}>
        <Form
          onFinish={onFinish}
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          validateMessages={validateMessages}
        >
          <label htmlFor="username">Adınız Soyadınız</label>
          <Form.Item
            name={['fullName']}
            rules={[
              {
                required: true,
                message: "Lütfen alanı boş bırakmayınız.",
              },
            ]}
          >
            <Input name="fullName" prefix={<UserOutlined className="site-form-item-icon" />} />
          </Form.Item>

          <label htmlFor="email">Email Adresiniz</label>
          <Form.Item
            name={['email']}
            rules={[
              {
                required: true,
                message: "Lütfen alanı boş bırakmayınız.",
              },
              {
                type: 'email',
                message: 'Lütfen geçerli bir email adresi giriniz.',
              }
            ]}
          >
            <Input
              name="email"
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
      </Col>
    </>
  );
};

export default LoginForm;
