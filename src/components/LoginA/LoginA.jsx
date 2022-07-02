import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {login, reset} from '../../features/auth/authSlice'
import { notification } from "antd";
import { Button, Form, Input } from "antd";

const LoginA = () => {
   
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const { isError, isSuccess, message } = useSelector((state) => state.auth);
    const onFinish = (values) => {
      console.log("Success:", values);
      dispatch(login(values))
      // openNotification("succes","Success! :) ","top")
  
    };
    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };
    // const openNotification = (messageTitle,placement) => {
    //   ({
    //     message: messageTitle,
    //     description: message,
    //     placement,
    //   });
    // }
    useEffect(() => {
        if (isError) {
          notification.error({  message: "Error :(", description: message });
        }
        if (isSuccess) {
          notification.success({  message: "Éxito :) ", description: message,placement:"top" });
          
          navigate("/profile");
        }
        dispatch(reset());
      }, [isError, isSuccess, message]);
      
      

  return (
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
      
  )
}
export default LoginA
