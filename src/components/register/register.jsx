import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, reset } from "../../features/auth/authSlice";
import { notification } from "antd";
import { Button, Form, Input } from "antd";
import { MailOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";

const Register = () => {
  const dispatch = useDispatch();
  const { isSuccess, isError, message } = useSelector((state) => state.auth);

      const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
      password2: "",
    });
    const { name, email, password, password2 } = formData;
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

//   comentardesde aqui
// --------------------------------
//   const onFinish = (values) => {
//     console.log("Success:", values);
//     dispatch(register(values))

//   };

//   const onFinishFailed = (errorInfo) => {
//     console.log("Failed:", errorInfo);
//   };

    const onChange = (e) => {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };
    const onSubmit = (e) => {
      e.preventDefault();
      if (password !== password2) {
        return notification.error({
          message: "Error",
          description: "Passwords do not match",
        });
      } else {
        return dispatch(register(formData));
      }
    };

  return (
      
    <>
     {/* <><Form
        name="signup"
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
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Username is necessary",
            },
          ]}
        >
          <Input
            placeholder="Enter your username here"
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
        <Form.Item>
          <Button
            style={{ width: "100%" }}
            type="default"
            className="login-form-button"
          >
            Iniciar sesion
          </Button>
        </Form.Item>
      </Form> </> */}

    <form onSubmit={onSubmit}>
      <div className="userLabel">Name</div>
      <input type="text" name="name" value={name} onChange={onChange}   required/>
      <div className="userLabel">Email</div>
      <input type="email" name="email" value={email} onChange={onChange}   required />
      <div className="userLabel">Password</div>
      <input
        type="password"
        name="password"
        value={password}
        required
        onChange={onChange}
      />
      <div className="userLabel">Confirm Password</div>
      <input
        type="password"
        name="password2"
        value={password2}
        required
        onChange={onChange}
      />
      <button type="submit">Register</button>
    </form>
    </>
  )
};
export default Register;
