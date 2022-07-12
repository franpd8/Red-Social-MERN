import React, {useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostById, reset } from "../../../../features/posts/postsSlice";
import CommenList from "./CommentList/CommenList";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeftOutlined } from '@ant-design/icons';
import "./../../Posts.scss";


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

  const handleClick = () =>{
    navigate(-1)

  }

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
   <ArrowLeftOutlined  onClick={handleClick} />
    </div>
       <div className="post">
       <div className="postImage">
        <img src={post.img} />
      </div>
      <div className="postInfo">
      <div className="userInfo">
        <div className="userAvatar">
          <img src={post.userId.avatar} />
        </div>
        <div className="userRefs"><div className="userName">{post.userId.name}</div>
        <div className="userAlias">{"@"+post.userId.alias}</div>
        </div>
      </div>
      <div className="postDescription">
      <p className="postTitle">{post.title}</p>
      <p className="postBody">{post.body}</p>
      </div>
      </div>
       </div>

      {/* <div className="commentSection">
        <CommenList post={post} />
      </div> */}
    </div>
  );
};

export default PostDetail;
