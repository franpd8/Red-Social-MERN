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
  // list of people the logged user is following
  const loggedUserFollowing = userData.following?.map((user) => user._id);
  const user = users.map((userdata) => {
    const userId = userdata._id;
    //  check if you are following the user
    const imFollowing = loggedUserFollowing.includes(userId);
    const avatar = userdata.avatar


    return (
      <div className="user" key={userdata._id}>
        A single user
        <Link to={"/user/" + userdata._id}>
          <p>Name: {userdata.name}</p>
          <img className="smallIcon__img" src={avatar?avatar:"https://i.imgur.com/Svw4Sam.png"}/>
        </Link>
        {imFollowing ? (
          <button onClick={() => unFollowAndReset(userdata._id)}>
            Unfollow
          </button>
        ) : (
          <button onClick={() => FollowAndReset(userdata._id)}>Follow</button>
        )}
        <p>DM</p>
        <p> Followers: {userdata.followers.length}</p>
        <p> Following: {userdata.following.length}</p>
      </div>
    );
  });
  return <div className="users__all">{user}</div>;
};

export default User;
