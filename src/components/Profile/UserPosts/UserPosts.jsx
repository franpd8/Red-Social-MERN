import { HeartFilled, MessageFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./UserPosts.scss";
function UserPosts({ userData }) {
  const posts = userData.postIds?.map((post) => {
    return (
      <div className="userPosts__post" key={post._id}>
        <Link to={"/post/" + post._id}>
          <div className="container">
            <div className="overlay"></div>
            <div className="overlay__hover">
              <div className="likes">
                {" "}
                <HeartFilled /> {post.likes.length}
              </div>
              {/* <div className="comments">
                {" "}
                <MessageFilled /> {post.comments.length}
              </div> */}
            </div>
            <img
              className="image"
              style={{ width: 100 + "%" }}
              src={post.img}
            />
          </div>
          {/* <div className="postTitle"> {post.title}</div> */}
        </Link>
      </div>
    );
  }).reverse();
  return <div className="userPosts">{posts}</div>;
}

export default UserPosts;
