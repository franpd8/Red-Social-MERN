import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostById } from "../../../../features/posts/postsSlice";
const PostDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
  const {post} = useSelector((state) => state.posts )
  // console.log(post.comments)
console.log(post)
  useEffect(() => {
    dispatch(getPostById(id))
  }, [])

  console.log(post)
  console.log("array de comments", post.comments)

//   const comments = post.comments 
// comments.map(comment => console.log(comment))
 
const comment = post.comments?.map(comment => (
  <div key={comment._id}>
    <div>{comment.body}</div>
  </div>
))
  // const comment = post.comments.map( comment => 
  //   console.log(comment)) 
  
  return <div>Post Detail
      <h3>Titulo: {post.title}</h3>
      <p> Descripcion: {post.body}</p>
      <p> by: {post.userId.name}</p>
      <p> Comentario: {comment}</p>
 
  </div>;
};

export default PostDetail;
