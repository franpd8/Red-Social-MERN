import { useLocation} from"react-router"
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate,Link } from "react-router-dom";
import { useEffect, useState } from "react";


import { getUserInfo, login, reset } from "../../features/auth/authSlice";
import { notification } from "antd";
import { Button, Form, Input } from "antd";

const Login = () => {
  const {pathname} = useLocation()
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, isSuccess, message } = useSelector((state) => state.auth);
  useEffect(() => {
    if (isError) {
      openNotification("error", "Oops!", "top");
    }
    if (isSuccess) {
      openNotification("success", "Nice!", "top");
      navigate("/profile");
      dispatch(getUserInfo());
    }
    dispatch(reset());
  }, [isError, isSuccess, message]);

// if(pathname == "/login"){
// return null }
  

  const onFinish =  (values) => {
    console.log("Success:", values);
     dispatch(login(values));
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };


  const openNotification = (type, messageTitle, placement) => {
    notification[type]({
      className: "notification-class",
      message: messageTitle,
      description: message,
      placement,
    });
  };
  
  return (

    <>
   
            <span>
              <Link to="/register">Register</Link>
            </span>

    <Form
      name="login"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      labelCol={{
        span: 24,
      }}
      wrapperCol={{
        span: 24,
      }}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Email is necessary",
            type: "email",
          },
        ]}
      >
        <Input placeholder="Enter your email here"></Input>
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password placeholder="Enter your password here" />
      </Form.Item>
      <Form.Item>
        <Button
          style={{ width: "100%" }}
          htmlType="submit"
          className="login-form-button"
        >
          Iniciar sesion
        </Button>
      </Form.Item>
    </Form>
    </>
  );
};
export default Login;
