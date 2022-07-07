import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Modal, Form, InputNumber, Input } from "antd";
const { TextArea } = Input;

const EditPost = ({ visible, setVisible }) => {
  const [form] = Form.useForm();
  const handleCancel = () => {
    setVisible(false);
  };
  const [loading, setLoading] = useState(false);
  const onFinish = (values) => {
    console.log(values);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    }, 2000);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Modal
      title="Edit Book"
      visible={visible}
      onCancel={handleCancel}
      footer={[]}
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
        <Form.Item label="Picture of your post" name="img">
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
  );
};

export default EditPost;
