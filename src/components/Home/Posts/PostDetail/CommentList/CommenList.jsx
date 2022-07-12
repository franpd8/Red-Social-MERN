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

function CommenList({ post }) {
  console.log("array de comments",post.comments)
  const comment = post.comments?.map((comment) => (
    <div key={comment._id}>
      {console.log(comment)}
      {/* <Comment
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
      /> */}
    </div>
  ));

  return <div>{comment}</div>;
}

export default CommenList;
