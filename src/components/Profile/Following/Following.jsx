import { Link } from "react-router-dom";
function Following ({userData}) {
    console.log(userData)
   
  const following = userData.following?.map((user) => {
    return (
      <div key={user._id}>
     <Link to={"/user/" + user._id}>
        <p> {user.name}</p>
        <p>
          <img className="smallIcon__img" src={user.avatar} />
        </p>
        </Link>
      </div>
    );
  });
  return <div>{
    following
    }</div>;
};

export default Following;
