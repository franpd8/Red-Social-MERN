import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostByName } from "../../features/posts/postsSlice";
import Post from "../Post/Post";

const Search = () => {
    const { title } = useParams();
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPostByName(title))
      }, [title]);
    
    return (
      <div>
          Search Results
          <Post/>
          </div>
    )
  }
  
  export default Search
  