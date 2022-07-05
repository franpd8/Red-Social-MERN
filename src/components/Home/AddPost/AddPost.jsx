import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost, reset } from "../../../features/posts/postsSlice";
import { Link, useNavigate } from "react-router-dom";
import { Form, Input, Button, Modal, DatePicker, notification } from "antd";
const { TextArea } = Input;

const AddPost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, isSuccess, message } = useSelector((state) => state.posts);
  
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const showModal = () => {
    setVisible(true);
  };
  const createPostAndReset = async (postData) => {
    await dispatch(createPost(postData));
    dispatch(reset());
  };

  const handleCancel = () => {
    setVisible(false);
  };
  const openNotification = (type, messageTitle, placement) => {
    notification[type]({
      className: "notification-class",
      message: messageTitle,
      description: message,
      placement,
    });
  };
  useEffect(() => {
    if (isError) {
      openNotification("error", "Error :(", "top");
    }
    if (isSuccess) {
      openNotification("success", "Éxito :)", "top");
    }
    dispatch(reset());
  }, [message,isError,isSuccess]);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    // setLoading(true);
    dispatch(createPostAndReset(values)); 
   
   setTimeout(() => {
    setLoading(false);
    setVisible(false);
    form.resetFields();
    // navigate("/");
    
  }, 3000);
 
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal clicking here
      </Button>

      <Modal
        visible={visible}
        title="Modal for adding post"
        onCancel={handleCancel}
        footer={null}
      >
        <Form  form={form}
          name="form for creating a post "
          labelCol={{
            span: 24,
          }}
          wrapperCol={{
            span: 24,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Title of your new post"
            name="title"
            rules={[
              {
                required: true,
                message: "Your post must have a title",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Post description "
            name="body"
            rules={[
              {
                required: true,
                message: "Your post can't be empty",
              },
            ]}
          >
            <TextArea rows={6} />
          </Form.Item>
          <Form.Item>
            <Button
              style={{ width: "100%" }}
              htmlType="submit"
              className="login-form-button"
              type="primary"
              loading={loading}
            >
              Create Post
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddPost;
