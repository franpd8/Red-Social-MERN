import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostById, reset } from "../../../../features/posts/postsSlice";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeftOutlined, MoreOutlined } from "@ant-design/icons";
import "./../../Posts.scss";
import EditPost from "../Post/EditPost/EditPost";

const PostDetail = () => {
  const navigate = useNavigate();
  const [load, setLoad] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.posts);

  const loadSys = async () => {
    window.scrollTo(0, 0);
    await dispatch(getPostById(id));
    await dispatch(reset());
    setLoad(true);
  };
  useEffect(() => {
    loadSys();
  }, []);

  const handleClick = () => {
    navigate(-1);
  };

  // Comentado porque rompe
  // let authorPostId = post.userId._id;
  
  // const [isModalVisible, setIsModalVisible] = useState(false);
  // const userLog = JSON.parse(localStorage.getItem("user"));
  // const userLogId = userLog.user._id;
 
  // console.log("usuario", userLogId);
  // console.log("author", authorPostId);
  // const showModal = () => {
  //   setIsModalVisible(true);
  // };

  //
  return !load ? (
    <div className="users">
      <div className="userDetail">
        <div className="usersLoader">
          <img src="https://i.imgur.com/WfjoPpa.gif" />
        </div>
      </div>
    </div>
  ) : (
    <div className="postDetail">
      <div className="back">
        <ArrowLeftOutlined onClick={handleClick} />
        <p className="postTitle">{post.title}</p>
      </div>
      <div className="post">
        <div className="postImage">
          <img src={post.img} />
        </div>
        <div className="postInfo">
          <div className="alignUser">
            <Link to={"/user/" + post.userId._id}>
              <div className="userInfo">
                <div className="userAvatar">
                  <img src={post.userId.avatar} />
                </div>
                <div className="userRefs">
                  <div className="userName">{post.userId.name}</div>
                  <div className="userAlias">{"@" + post.userId.alias}</div>
                </div>
              </div>
            </Link>

            {/* Comentado porque rompe
        {userLogId == authorPostId ? (
              <div className="editPost">
                <MoreOutlined className="editBtn" onClick={() => showModal()} />{" "}
              </div>
            ) : null} */}
          </div>

          <div className="postDescription">
            <p className="postBody">{post.body}</p>
           
          </div>
        </div>
      </div>
{/*  Comentado porque rompe
      <EditPost visible={isModalVisible} setVisible={setIsModalVisible} /> */}
    </div>
  );
};

export default PostDetail;
