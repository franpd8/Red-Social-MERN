import { Link } from "react-router-dom";
function Follower({ userData }) {
  const follower = userData.followers?.map((user) => {
    return (
      <div className="follower__user" key={user._id}>
        <Link to={"/user/" + user._id}>
          <p> {user.name}</p>
          <p>
            <img className="smallIcon__img" src={user.avatar} />
          </p>
        </Link>
      </div>
    );
  });
  return (
    <div className="follower">
      <p>My followers</p>
      <div className="follower__box">{follower}</div>
    </div>
  );
}

export default Follower;
