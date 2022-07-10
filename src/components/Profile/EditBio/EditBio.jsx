
import { useDispatch } from "react-redux";

import { Button, Form, Input } from "antd";
import { reset, updateUser } from "../../../features/users/usersSlice";
import { useState } from "react";
const { TextArea } = Input;
function EditBio({ userData }) {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);


  const onFinish = (values) => {
    const userWithId = { ...values, id: userData._id };
    setLoading(true);
   
    
    setTimeout(() => {
        setLoading(false);
        dispatch(updateUser(userWithId));
        dispatch(reset())
      }, 2000);

  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };


  return (
    <>
      <div className="userNameFollow"></div>
      <div className="userBio">
      <Form
        name="update user"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
    
      >
        <Form.Item name="name"        >
          <Input  showCount maxLength={20}  placeholder={userData.name} />
        </Form.Item>
        <Form.Item name="bio" >
          <TextArea  rows={4} showCount maxLength={100} placeholder={userData.bio} />
        </Form.Item>
        <Form.Item name="link">
          <Input placeholder="Link"/>
        </Form.Item>
        <Form.Item name="avatar">
          <Input placeholder="Your new profile picture" />
        </Form.Item>
        <Form.Item name="header" >
          <Input placeholder="Your new header image"
          />
        </Form.Item>
        <Form.Item>
          <Button
          id= "submitEditBtn"
            style={{ width: "100%" }}
            type="primary"
            htmlType="submit"
            className="login-form-button"
            loading={loading}
          >
            Save Changes
          </Button>
        </Form.Item>
       
      </Form>
      </div>
      {/*  */}

      
    </>
  );
}

export default EditBio;
