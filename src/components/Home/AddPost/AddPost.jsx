import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost, reset } from "../../../features/posts/postsSlice";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Modal, notification} from "antd";
import EditPost from "../Posts/Post/EditPost/EditPost";

const { TextArea } = Input;

const AddPost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, isSuccess, message } = useSelector((state) => state.posts);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const showModal = () => {
    setVisible(true);
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
      openNotification("error", "Oops!", "top");
    }
    if (isSuccess) {
      openNotification("success", "Nice!", "top");
    }
    dispatch(reset());
  }, [isError, isSuccess]);

  const onFinish = async (values) => {
    setLoading(true);
    setTimeout(() => {
      form.resetFields();
      setVisible(false);
      setLoading(false);
    }, 1000);
   await dispatch(createPost(values));
    dispatch(reset());   
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div onClick={showModal}>
        Create Post
      </div>
<EditPost/>
      <Modal
        visible={visible}
        title="Modal for adding post"
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          form={form}
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
          <Form.Item
            label="Picture of your post"
            name="img"
            rules={[
              {
                required: true,
                message: "Your post must have a title",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item shouldUpdate className="submit">
          {() => (
            <Button
              style={{ width: "100%" }}
              htmlType="submit"
              className="login-form-button"
              type="primary"
              loading={loading}
              disabled={
                !form.isFieldsTouched(true) ||
                form.getFieldsError().filter(({ errors }) => errors.length)
                  .length > 0
              }
            >
              Create Post
            </Button>
            )}
          </Form.Item>
        </Form>
      </Modal>
      
    </>
  );
};

export default AddPost;
