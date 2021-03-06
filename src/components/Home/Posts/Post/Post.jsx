import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import {
  HeartOutlined,
  HeartFilled,
  DeleteOutlined,
  MoreOutlined ,
} from "@ant-design/icons";
import {
  dislikePost,
  likePost,
  reset,
  getPostById,
} from "../../../../features/posts/postsSlice";
import { useEffect, useState } from "react";
import { notification } from "antd";
import EditPost from "./EditPost/EditPost";
import "./Post.scss";

const Post = () => {
  const userLog = JSON.parse(localStorage.getItem("user"));
  const userLogId = userLog.user._id;
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
      openNotification("success", "Nice!", "top");
    }
    dispatch(reset());
  }, [isLiked, isDisliked, isDeleted]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = (id) => {
    dispatch(getPostById(id));
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
      const authorPostId = post.userId._id;
      return (
        <div className="post" key={post._id}>
         
            
              <div className="authorPost">
              <Link to={"/user/" + post.userId._id}>
                <div className="authorInfo">
                  <div className="authorAvatar">
                    <img src={post.userId.avatar} />
                  </div>
                  <div className="authorRefs">
                    <div className="authorName">{post.userId.name}</div>
                    <div className="authorAlias">{"@" + post.userId.alias}</div>
                  </div>
                </div>
                 </Link>
                <div className="authorButtons">
                  {userLogId == authorPostId ? (
                    <MoreOutlined 
                      style={{ fontSize: 40 + "px" }}
                      onClick={() => showModal(post._id)}
                    />
                  ) : null}
            
                </div>
              </div>
              <Link to={"/post/" + post._id}>
            <img className="post__img" src={post.img} />
            </Link>{" "}
         <div className="post__description">
         <Link to={"/post/" + post._id}>
         <div className="post__title">
            <p>{post.title}</p>
            <div className="post__date"><p> {dateTimeAgo}</p></div>
          </div>
          </Link>{" "}
          <div className="post__like__btn">
            
            {isAlreadyLiked ? <>
              <HeartFilled
                style={{ fontSize: 40 + "px" }}
                onClick={() => dispatch(dislikeAndReset(post._id))}
              /> <div className="like__counter">{post.likes.length} people liked this</div>
             </>: (
              <HeartOutlined
                style={{ fontSize: 40 + "px" }}
                onClick={() => dispatch(likeAndReset(post._id))}
              />
            )}
            </div>
          
          
          
          </div>
          
        </div>
      );
    })
    .reverse();

  return (
    <div className="home__posts__all">
      {post}
      <EditPost visible={isModalVisible} setVisible={setIsModalVisible} />
    </div>
  );
};

export default Post;
