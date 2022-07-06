import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts, reset } from "../../../features/posts/postsSlice";
import Post from "../../Post/Post";
import { Link, useNavigate } from "react-router-dom";
import { notification, Input } from "antd";
import SearchPost from "./SearchPost/SearchPost";
const { Search } = Input;

const Posts = () => {
  const { isLoading,posts } = useSelector((state) => state.posts);

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
{/* 
      <Search
        placeholder="Search for a post"
        className="searchBar"
        allowClear
        onSearch={onSearch}
        enterButton
      /> */}
    
      <Post />
    </div>
  );
};

export default Posts;
