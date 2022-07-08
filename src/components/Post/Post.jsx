import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import {
  HeartOutlined,
  HeartFilled,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import {
  deletePost,
  dislikePost,
  likePost,
  reset,
  getPostById,
} from "../../features/posts/postsSlice";
import { useEffect, useState } from "react";
import { notification } from "antd";
import EditPost from "./EditPost/EditPost";


const Post = () => {
  const userLog = JSON.parse(localStorage.getItem("user"))
  const  userLogId = userLog.user._id
  const { message, posts, isLiked, isDisliked, isDeleted } = useSelector(
    (state) => state.posts
  );
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const openNotification = (type, messageTitle, placement) => {
    notification[type]({
      className: "notification-class",
      message: messageTitle,
      description: message,
      placement,
    });
  };
  useEffect(() => {
    if (isLiked || isDisliked || isDeleted) {
      openNotification("success", "holis", "top");
    }
    dispatch(reset());
  }, [isLiked, isDisliked, isDeleted]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = (id) => {
    dispatch(getPostById(id))
    setIsModalVisible(true);
  };
  const post = posts
    .map((post) => {
      const isAlreadyLiked = post.likes?.includes(user?.user._id);
      const dislikeAndReset = (postid) => {
        dispatch(dislikePost(postid));
        dispatch(reset());
      };
      const likeAndReset = (postid) => {
        dispatch(likePost(postid));
        dispatch(reset());
      };

      const dateTimeAgo = moment(post.createdAt).fromNow();
      const  authorPostId = post.userId._id
      return (
        <div className="post" key={post._id}>
          A single post
          <Link to={"/post/" + post._id}>
            <p>Title: {post.title}</p>
            <img className="post__img" src={post.img} />
          </Link>
          {isAlreadyLiked ? (
            <HeartFilled 
              style={{ fontSize: 40 + "px" }}
              onClick={() => dispatch(dislikeAndReset(post._id))}
            />
          ) : (
            <HeartOutlined
              style={{ fontSize: 40 + "px" }}
              onClick={() => dispatch(likeAndReset(post._id))}
            />
          )}{" "}
          
         
          {userLogId == authorPostId?<EditOutlined   style={{ fontSize: 40 + "px" }} onClick={() => showModal(post._id)} />:null }

        {userLogId == authorPostId?<DeleteOutlined
            style={{ fontSize: 40 + "px" }}
            onClick={() => dispatch(deletePost(post._id))}
          />:null }
        
        
         
          <Link to={"/user/" + post.userId._id}>
            <div>
              {" "}
              Author: {post.userId.name}
              <img className="smallIcon__img" src={post.userId.avatar} />
            </div>
          </Link>
          <p> Date: {dateTimeAgo}</p>
          <p> Likes: {post.likes.length}</p>
        </div>
      );
    })
    .reverse();

  return <div className="home__posts__all">
    {post}
    <EditPost visible={isModalVisible} setVisible={setIsModalVisible} />

  </div>;
};

export default Post;
