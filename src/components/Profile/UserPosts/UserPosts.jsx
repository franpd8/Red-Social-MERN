import { useSelector } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";
function UserPosts({ userData }) {
  const posts = userData.postIds?.map((post) => {
    const dateTimeAgo = moment(post.createdAt).fromNow();
    return (
      <div className="userPosts__post" key={post._id}>
        <Link to={"/post/" + post._id}>
          <p>
            <img style={{ width: 100 + "%" }} src={post.img} />
          </p>
          <p> Title: {post.title}</p>
          <p> Date: {dateTimeAgo}</p>
        </Link>
      </div>
    );
  });
  return <div className="userPosts">{posts}</div>;
}

export default UserPosts;
