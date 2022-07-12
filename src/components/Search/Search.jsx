import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostByName } from "../../features/posts/postsSlice";
import Post from "../Home/Posts/Post/Post";
import "./Search.scss"
const Search = () => {
    const { title } = useParams();
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPostByName(title))
      }, [title]);
    
    return (
      <div className="Search__all">
        <h2>Results that matched your "{title}" search</h2>
          <Post/>
          </div>
    )
  }
  
  export default Search
  