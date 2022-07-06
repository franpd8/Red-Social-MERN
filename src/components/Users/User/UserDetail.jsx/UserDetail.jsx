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
    window.scrollTo(0, 0)
    dispatch(getUserById(id));
    dispatch(reset());
  }, [id]);
  if (isLoading) {
    return  <div className="userDetail"><h1>Loading user...</h1></div>;
  }
  return (
    <div className="userDetail">
    <h1>Profile</h1>
      <p>Name: {userDetails.name}</p>
      <p>Email: {userDetails.email}</p>
      <img src={userDetails.avatar} />
      <Following userData={userDetails}/>
      <UserPosts userData={userDetails}/>
    </div>
  );
};

export default UserDetail;
