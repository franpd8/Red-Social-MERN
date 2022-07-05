import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserById, reset } from "../../../../features/users/usersSlice";
import Following from "../../../Profile/Following/Following";
import Profile from "../../../Profile/Profile";
import UserPosts from "../../../Profile/UserPosts/UserPosts";

const UserDetail = () => {
  const { isLoading } = useSelector((state) => state.users);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(getUserById(id));
    dispatch(reset());
  }, []);
  if (isLoading) {
    return <h1>Loading user...</h1>;
  }
  return (
    <div>
    <h1>Profile</h1>
      <p>Name: {userDetails.name}</p>
      <p>Email: {userDetails.email}</p>
      <img src={userDetails.avatar} />
      {/* React crashes over here  */}
     {isLoading? console.log("esta cargando") : (  console.log("ya ha cargado"), <UserPosts userData={userDetails}/>)} 


    </div>
  );
};

export default UserDetail;
