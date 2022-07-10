import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { followUser, getUserById, reset, unFollowUser } from "../../../../features/users/usersSlice";
import { notification } from "antd";
import Following from "../../../Profile/Following/Following";
import Profile from "../../../Profile/Profile";
import UserPosts from "../../../Profile/UserPosts/UserPosts";
import { getUserInfo } from "../../../../features/auth/authSlice";

const UserDetail = () => {
  
   const [followButton, setFollowButton] = useState(false);
   const {isLoading,users,isError,isSuccess,message,isFollowing,isUnFollowing,userDetails} = useSelector((state) => state.users);
   const { userData} = useSelector((state) => state.auth);

   // list of people the user is following
   const userId= userDetails._id
   const userFollowing = userDetails.following?.map( user => user._id)
    // console.log("gente que sigue el perfil",userFollowing)

  //   logged user info  del local storage (MAL)
  const user = JSON.parse(localStorage.getItem("user"));
const loggedUser = userData
const loggedUserFollowing = loggedUser.following?.map(user => user._id)
//  console.log("gente que sigue el usuario logueado", loggedUserFollowing)

const imFollowing = loggedUserFollowing.includes(userId)
console.log("¿Sigo a este usuario", imFollowing)

  const { id } = useParams();
  const dispatch = useDispatch();

  


  const getAllUserInfoAndReset = async () => {
    await dispatch(getUserInfo());
    dispatch(reset());
  };
  const FollowAndReset = (id) => {
    dispatch(followUser(id));
    setFollowButton((initial) => !initial)
    dispatch(reset());
  };
  const unFollowAndReset = (id) => {
    dispatch(unFollowUser(id));
    setFollowButton((initial) => !initial)
    dispatch(reset());
  };
  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(getUserById(id));
    getAllUserInfoAndReset();
    dispatch(reset());
  }, [id]);

  const openNotification = (type, messageTitle, placement) => {
    notification[type]({
      className: "notification-class",
      message: messageTitle,
      description: message,
      placement,
    });
  };
  useEffect(() => {
    if (isError) {
      openNotification("error", "Error :(", "top");
    }
    if (isSuccess) {
      openNotification("success", "Éxito :)", "top");
    }
    if (isFollowing){
      openNotification("success", "Now following", "top");
    }
    dispatch(reset());
  }, [isError, isSuccess,isFollowing,isUnFollowing]);

  if (isLoading) {
    return  <div className="userDetail"><h1>Loading user...</h1></div>;
  }
  return (
    <div className="userDetail">
    <h1>Profile</h1>
      <p>Name: {userDetails.name}</p>
      <p>Email: {userDetails.email}</p>
      <img src={userDetails.avatar} />

      {imFollowing?<button onClick={() => unFollowAndReset(userDetails._id)}>Unfollow</button> : <button onClick={() => FollowAndReset(userDetails._id)}>Follow</button>}

      <Following userData={userDetails}/>
      <UserPosts userData={userDetails}/>
    </div>
  );
};

export default UserDetail;
