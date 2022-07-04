import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllPosts, reset } from "../../../features/posts/postsSlice"
import Post from "../../Post/Post"

const Posts = () => {
    const { isLoading } = useSelector((state) => state.posts);
    const dispatch = useDispatch()

    const getPostsAndReset = async () => {
        await dispatch(getAllPosts()); 
        dispatch(reset()) 
       };

    useEffect(() => {
         getPostsAndReset();
       }, []);
       if (isLoading) {
        return <h1>Cargando post...</h1>;
      }
    return (
      <div className="home__posts">
          <h2>Posts</h2>
          <Post/>
      </div>
    )
  }
  
  export default Posts
  