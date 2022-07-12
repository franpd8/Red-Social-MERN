import React, { useEffect, useState } from "react";
import {  DeleteOutlined} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, Form,  Input,  Popconfirm } from "antd";
import { updatePost,deletePost } from "../../../../../features/posts/postsSlice";
const { TextArea } = Input;

const EditPost = ({ visible, setVisible }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const { post } = useSelector((state)=> state.posts)
  const handleCancel = () => {setVisible(false);};
  const dispatch = useDispatch();

  const text = 'Are you sure to delete this post?';
  const confirm = () => {
    deleteAndClose()
  };
  const deleteAndClose = () =>{
    dispatch(deletePost(post._id))
    setVisible(false);
  }
  const onFinish = (values) => {
    const postWithId = { ...values, id: post._id };
    dispatch(updatePost(postWithId));
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    }, 2000);
  };
  const onFinishFailed = (errorInfo) => {console.log("Failed:", errorInfo);  };

  useEffect(() => {
    const postToEdit = {...post};
    form.setFieldsValue(postToEdit);
  }, [post]);

  return (
    <Modal
      title="Edit Post Modal"
      visible={visible}
      onCancel={handleCancel}
      footer={[]}
    >
      <Form
        form={form}
        name="form for updating a post "
        labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 24,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >

<Popconfirm placement="right" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
        <div className="alignBtn">
          <Button  className="deleteBtn"> 
                    <DeleteOutlined
                   />
                  </Button>
                  </div>
      </Popconfirm>

      
       
        <Form.Item
          label="Update your post's title"
          name="title"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Post description "
          name="body"
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
            >
              Edit Post
            </Button>
          )}
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditPost;
