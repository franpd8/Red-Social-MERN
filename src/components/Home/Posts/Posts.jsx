import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts, reset } from "../../../features/posts/postsSlice";
import Post from "../../Post/Post";

import { Input } from "antd";

const { Search } = Input;

const Posts = () => {
  const { isLoading,posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const getPostsAndReset = async () => {
    await dispatch(getAllPosts());
    dispatch(reset());
  };

  useEffect(() => {
    getPostsAndReset();
  }, []);

  if (isLoading) {
    return <div className="home__posts"><h1>Cargando post...</h1>;</div>
  }
  return (
    <div className="home__posts">
      <h2>Posts</h2>

      <Post />
    </div>
  );
};

export default Posts;
