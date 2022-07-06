import { Link } from "react-router-dom";
function Following({ userData }) {
  const following = userData.following?.map((user) => {
    return (
      <div className="following__user" key={user._id}>
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
    <div className="following">
      <p>im following</p>
      <div className="following__box">{following}</div>
    </div>
  );
}

export default Following;
