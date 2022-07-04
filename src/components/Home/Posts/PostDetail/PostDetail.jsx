
import React,{ createElement, useEffect, useState } from "react";
import moment from 'moment';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostById } from "../../../../features/posts/postsSlice";
import { DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined } from '@ant-design/icons';
import { Avatar, Comment, Tooltip, Button, Form, Input, List } from 'antd';

const PostDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
  const {post} = useSelector((state) => state.posts )

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);
  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction('liked');
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction('disliked');
  };

  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>,
    <span key="comment-basic-reply-to">Reply to</span>,
  ];
  useEffect(() => {
    dispatch(getPostById(id))
  }, [])

  console.log(post)
  console.log("array de comments", post.comments)

  // Mapping the comments
const comment = post.comments?.map(comment => (
  <div key={comment._id}>
      <Comment className="comment-box"
      actions={actions}
      author={<a>{comment.userId.name}</a>}
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
      content={
        <p>
          {comment.body}
        </p>
      }
      datetime={
        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
          <span>{moment().fromNow()}</span>
        </Tooltip>
      }
    />
  </div>
))
 
  return <div>Post Detail
      <h3>Titulo: {post.title}</h3>
      <p> Descripcion: {post.body}</p>
      <p> by: {post.userId.name}</p>
      Comentario: <div className="commentSection">{comment}</div>
      {/* <ReplyComment/> */}
  </div>;
};

export default PostDetail;
