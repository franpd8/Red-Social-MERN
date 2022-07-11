import { Link } from "react-router-dom";
function Following({ userData }) {
  const following = userData.following?.map((user) => {
    const avatar = user.avatar;
    return (
      <div className="following__user" key={user._id}>
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
    <div className="following">
      <div className="following__box">{following}</div>
    </div>
  );
}
export default Following;
