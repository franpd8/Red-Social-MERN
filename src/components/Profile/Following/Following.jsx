

function Following ({userData}) {
   
  const following = userData.following?.map((user) => {
    return (
      <div key={user._id}>
    
        <p> {user.name}</p>
        <p>
          <img className="smallIcon__img" src={user.avatar} />
        </p>
      </div>
    );
  });
  return <div>{
    following
    }</div>;
};

export default Following;
