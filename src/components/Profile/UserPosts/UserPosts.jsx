import { useSelector } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";
function UserPosts ({userData}) {
  // const { userData } = useSelector((state) => state.auth);
  console.log("userData",userData)

  const posts = userData.postIds?.map((post) => {
    const dateTimeAgo = moment(post.createdAt).fromNow();
    return (
      <div className="userPosts__post" key={post._id}>
        {/* {console.log("post mapeado", post)} */}
        <Link to={"/post/" + post._id}>
        <p>
          <img className="smallIcon__img" src={post.img} />
        </p>
        <p> Title: {post.title}</p>
        <p> Date: {dateTimeAgo}</p>
        

        </Link>
      </div>
    );
  });
  return <div className="userPosts">
    {posts}
    
    </div>;
};

export default UserPosts;
