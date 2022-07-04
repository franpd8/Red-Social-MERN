import { useSelector } from "react-redux";
import moment from "moment";
const UserPosts = () => {
  const { user } = useSelector((state) => state.auth);
  const posts = user.user.postIds?.map((post) => {
    const dateTimeAgo = moment(post.createdAt).fromNow();
    return (
      <div className="userPosts__post" key={post._id}>
        {console.log("post mapeado", post)}
        <p> Title: {post.title}</p>
        <p> Date: {dateTimeAgo}</p>
      </div>
    );
  });
  return <div className="userPosts">{posts}</div>;
};

export default UserPosts;
