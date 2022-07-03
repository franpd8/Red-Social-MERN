import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostByName } from "../../features/posts/postsSlice";
import Post from "../Post/Post";

const Search = () => {
    const { postName } = useParams();
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(postName);
        dispatch(getPostByName(postName))
      }, [postName]);
    
    return (
      <div>
          Search Results
          <Post/> </div>
    )
  }
  
  export default Search
  