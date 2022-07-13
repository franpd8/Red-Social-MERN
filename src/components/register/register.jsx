import {  useNavigate,Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, reset } from "../../features/auth/authSlice";
import { notification } from "antd";
import { Button, Form, Input } from "antd";
import "./Register.scss"
const Register = () => {

  const dispatch = useDispatch();
  const { isSuccess, isError, message } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (isSuccess) {
      notification.success({
        message: "Nice!",
        description: message,
      });
      setTimeout(() => {
        navigate("/login");
      }, 1000);
     
    }
    if (isError) {
      notification.error({
        message: "Oops!",
        description: message,
      });
    }
    dispatch(reset());
  }, [isSuccess, isError, message]);
  const onFinish = (values) => {
    console.log("Success:", values);
    dispatch(register(values))
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

//   if(pathname == "/"){
// return null }

  return (
      
    <>
     <div className="register">
<div className="bckground">
  <img src="https://i.imgur.com/DnPioN4.jpg"/>
  
</div>
     
            <div className="register__form">
    <Form
       name="register"
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
         label="Full Name"
         name="name"
         rules={[
           {
             required: true,
             message: "Name is necessary",
           },
         ]}
       >
         <Input
           placeholder="Enter your name here"
         />
         
       </Form.Item>
       <Form.Item
         label="@alias"
         name="alias"
         rules={[
           {
             required: true,
             message: "Alias is necessary",
           },
         ]}
       >
         <Input
           placeholder="Enter your @alias here"
         />
         
       </Form.Item>
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
         <Input
           placeholder="Enter your email here"
       
         ></Input>
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
         <Input.Password
           placeholder="Enter your password here"
         />
       </Form.Item>
       <Form.Item
         name="confirm"
         label="Confirm your password"
         dependencies={["password"]}
         hasFeedback
         rules={[
           {
             required: true,
             message: "Please confirm your password!",
           },
           ({ getFieldValue }) => ({
             validator(_, value) {
               if (!value || getFieldValue("password") === value) {
                 return Promise.resolve();
               }
               return Promise.reject(
                 new Error("The two passwords that you entered do not match!")
               );
             },
           }),
         ]}
       >
         <Input.Password
           
           placeholder="Confirm your password"
         />
       </Form.Item>
       <Form.Item>
         <Button
           style={{ width: "100%" }}
           type="primary"
           htmlType="submit"
           className="login-form-button"
         >
           Create Account
         </Button>
       </Form.Item>
       <div className="login">
  
        <Link to="/login">Login</Link></div>
          
      
     </Form>
     </div></div>
    </>
  )
};
export default Register;
