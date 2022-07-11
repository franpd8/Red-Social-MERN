import { Link } from "react-router-dom";
function Follower({ userData }) {
  const follower = userData.followers?.map((user) => {
    const avatar = user.avatar;
    return (
      <div className="follower__user" key={user._id}>
        <Link to={"/user/" + user._id}>
        <div className="userImg">
            <img
              className="img"
              src={avatar ? avatar : "https://i.imgur.com/Svw4Sam.png"}
            />
          </div>
          <div className="userName"> {user.name}</div>
        </Link>
      </div>
    );
  });
  return (
    <div className="follower">
      <div className="follower__box">{follower}</div>
    </div>
  );
}

export default Follower;
