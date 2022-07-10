import React, { createElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostById, reset } from "../../../../features/posts/postsSlice";
import CommenList from "./CommentList/CommenList";

const PostDetail = () => {
  const { isLoading } = useSelector((state) => state.posts);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPostById(id));
    dispatch(reset());
  }, []);

  if (isLoading) {
    return <h1>Cargando post...</h1>;
  }
  return (
    <div className="postDetail">
      Post Detail
      <h3>Titulo: {post.title}</h3>
      <div><img src={post.img}/></div>
      <p> Descripcion: {post.body}</p>
      
      Comentario: <div className="commentSection">
        <CommenList/>

        </div>
    </div>
  );
};

export default PostDetail;
