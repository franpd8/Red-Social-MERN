import { useLocation} from"react-router"
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate,Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Login.scss"
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

    <> <div className="login">
<div className="bckground">
  <img src="https://i.imgur.com/XzFF73r.jpg"/>
  
</div>
<div className="login__form">
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
      <div className="clam">
<h2> What's going on? <br/>
Join <span className="logo">Chirp</span> </h2>
</div>
      
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
          type="primary"
          className="login-form-button"
        >
          Login
        </Button>
      </Form.Item>
      <div className="register">
              <Link to="/register">Register</Link>
            </div>
    </Form>
    </div>
    </div>
    </>
  );
};
export default Login;
