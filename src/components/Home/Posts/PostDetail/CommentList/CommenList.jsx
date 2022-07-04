import React, { createElement, useEffect, useState } from "react";
import moment from "moment";
import {
  DislikeFilled,
  DislikeOutlined,
  LikeFilled,
  LikeOutlined,
} from "@ant-design/icons";
import { Avatar, Comment, Tooltip, Button, Form, Input, List } from "antd";
import { useSelector } from "react-redux";

const CommenList = () => {
  const { post } = useSelector((state) => state.posts);
  // const [likes, setLikes] = useState(0);
  // const [dislikes, setDislikes] = useState(0);
  // const [action, setAction] = useState(null);
  // const like = () => {
  //   setLikes(1);
  //   setDislikes(0);
  //   setAction("liked");
  // };

  // const dislike = () => {
  //   setLikes(0);
  //   setDislikes(1);
  //   setAction("disliked");
  // };

  // const actions = [
  //   <Tooltip key="comment-basic-like" title="Like">
  //     <span onClick={like}>
  //       {createElement(action === "liked" ? LikeFilled : LikeOutlined)}
  //       <span className="comment-action">{likes}</span>
  //     </span>
  //   </Tooltip>,
  //   <Tooltip key="comment-basic-dislike" title="Dislike">
  //     <span onClick={dislike}>
  //       {React.createElement(
  //         action === "disliked" ? DislikeFilled : DislikeOutlined
  //       )}
  //       <span className="comment-action">{dislikes}</span>
  //     </span>
  //   </Tooltip>,
  //   <span key="comment-basic-reply-to">Reply to</span>,
  // ];

  const comment = post.comments?.map((comment) => (
    <div key={comment._id}>
      <Comment
        className="comment-box"
        //   actions={actions}
        author={<a>{comment.userId.name}</a>}
        avatar={
          <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
        }
        content={
          <>
            <p>{comment.body}</p>
          </>
        }
        datetime={
          <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
            <span>{moment().fromNow()}</span>
          </Tooltip>
        }
      />
    </div>
  ));

  return <div>{comment}</div>;
};

export default CommenList;
