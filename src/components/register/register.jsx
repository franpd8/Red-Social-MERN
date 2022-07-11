import { useLocation} from"react-router"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, reset } from "../../features/auth/authSlice";
import { notification } from "antd";
import { Button, Form, Input } from "antd";

const Register = () => {

  const dispatch = useDispatch();
  const { isSuccess, isError, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isSuccess) {
      notification.success({
        message: "Éxito :)",
        description: message,
      });
    }
    if (isError) {
      notification.error({
        message: "Error :( ",
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
       <Form.Item
         label="Name"
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
           Crear cuenta
         </Button>
       </Form.Item>
      
     </Form>
    </>
  )
};
export default Register;
