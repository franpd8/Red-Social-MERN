import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";

const Post = () => {
  const { posts } = useSelector((state) => state.posts);
  const post = posts.map((post) => {
    const dateTimeAgo = moment(post.createdAt).fromNow();
    console.log(post)

    return (
      <div className="post" key={post._id}>
        <Link to={"/post/" + post._id}>
          <p>{post.title}</p>
          <img className="post__img" src={post.img} />
          <div> Author: {post.userId.name}
          <img className="smallIcon__img"src={post.userId.avatar}/></div>
          <p> Date: {dateTimeAgo}</p>
        </Link>
      </div>
    );
  });

  return <div>{post}</div>;
};

export default Post;
