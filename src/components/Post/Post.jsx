import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { dislike, like } from "../../features/posts/postsSlice";

const Post = () => {
  const { posts } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const post = posts.map((post) => {
    console.log("esto es posts",posts)
    const isAlreadyLiked = post.likes?.includes(user?.user._id);

    const dateTimeAgo = moment(post.createdAt).fromNow();

    return (
      <div className="post" key={post._id}>
        A single post 
        <Link to={"/post/" + post._id}>
          <p>Title: {post.title}</p>
          <img className="post__img" src={post.img} /></Link>
          {isAlreadyLiked ? (
          <HeartFilled  style={{fontSize: 40+"px"}} onClick={()=> dispatch(dislike(post._id))  } />
        ) : (
          <HeartOutlined style={{fontSize: 40+"px"}} onClick={()=> dispatch(like(post._id))  } />
        )}


          <Link to={"/user/" + post.userId._id}>
            <div> Author: {post.userId.name}
          <img className="smallIcon__img"src={post.userId.avatar}/></div>
          </Link>
          <p> Date: {dateTimeAgo}</p>
          <p> Likes: {post.likes.length}</p>
        
      </div>
    );
  })
  .reverse();

  return <div className="home__posts__all">{post}</div>;
};

export default Post;
