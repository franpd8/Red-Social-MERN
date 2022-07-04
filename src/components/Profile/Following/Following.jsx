import { useSelector } from "react-redux";

const Following = () => {
  const { user } = useSelector((state) => state.auth);
  const following = user.user.following?.map((user) => {
    return (
      <div key={user._id}>
        {/* {console.log("usuario mapeado", user)} */}
        <p> {user.name}</p>
        <p>
          {" "}
          <img className="smallIcon__img" src={user.avatar} />
        </p>
      </div>
    );
  });
  return <div>{following}</div>;
};

export default Following;
