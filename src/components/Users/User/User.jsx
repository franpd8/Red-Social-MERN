import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  followUser,
  reset,
  unFollowUser,
} from "../../../features/users/usersSlice";
import { notification } from "antd";

const User = () => {
  const { users, isError, isSuccess, message, isFollowing, isUnFollowing } =
    useSelector((state) => state.users);
  const { userData } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const openNotification = (type, messageTitle, placement) => {
    notification[type]({
      className: "notification-class",
      message: messageTitle,
      description: message,
      placement,
    });
  };
  const FollowAndReset = (id) => {
    dispatch(followUser(id));
    // setFollowButton((initial) => !initial)
    dispatch(reset());
  };
  const unFollowAndReset = (id) => {
    dispatch(unFollowUser(id));
    // setFollowButton((initial) => !initial)
    dispatch(reset());
  };

  useEffect(() => {
    if (isError) {
      openNotification("error", "Error :(", "top");
    }
    if (isSuccess) {
      openNotification("success", "Éxito :)", "top");
    }
    if (isFollowing) {
      openNotification("success", "Now following", "top");
    }
    dispatch(reset());
  }, [isError, isSuccess, isFollowing, isUnFollowing]);


  const user = users.map((userdata) => {
    const userId = userdata._id;
    const avatar = userdata.avatar

    const userFollowers = userdata.followers?.map((user) => user._id);
    const loggedUserId = userData._id;
    let imFollowing = userFollowers.includes(loggedUserId);
    console.log("¿le sigo?", imFollowing)
  


    return (
      <div className="user" key={userdata._id}>
        <Link to={"/user/" + userdata._id}>
        <div className="userAvatar">
          <img className="userImg" src={avatar?avatar:"https://i.imgur.com/Svw4Sam.png"}/></div>
          <div className="userName">{userdata.name}</div>
        </Link>

<div className="userStats">
        <div className="userFollowers">{userdata.followers.length} Followers</div>
        <div className="userFollowing">{userdata.following.length}  Following</div>
        </div>
        <div className="userBtn">
        {imFollowing ? (
          <button className="btn" onClick={() => unFollowAndReset(userdata._id)}>
            Unfollow
          </button>
        ) : (
          <button  className="btn" onClick={() => FollowAndReset(userdata._id)}>Follow</button>
        )}
        </div>
      </div>

      
    );
  });
  return <div className="users__all">{user}</div>;
};

export default User;
