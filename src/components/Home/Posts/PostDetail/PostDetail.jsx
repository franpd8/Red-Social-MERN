import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostById } from "../../../../features/posts/postsSlice";
const PostDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
  const {post} = useSelector((state) => state.posts )
  // console.log(post.comments)

  useEffect(() => {
    dispatch(getPostById(id))
  }, [])
  

  return <div>Post Detail
      <h3>Titulo: {post.title}</h3>
      <p> Descripcion: {post.body}</p>
      {/* <p> Comentario: {post.comments}</p> */}
  </div>;
};

export default PostDetail;
