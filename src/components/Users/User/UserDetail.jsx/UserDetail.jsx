import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  followUser,
  getUserById,
  reset,
  unFollowUser,
} from "../../../../features/users/usersSlice";
import { notification } from "antd";
import Following from "../../../Profile/Following/Following";
import Profile from "../../../Profile/Profile";
import UserPosts from "../../../Profile/UserPosts/UserPosts";
import { getUserInfo } from "../../../../features/auth/authSlice";
import Bio from "../../../Profile/Bio/Bio";

const UserDetail = () => {
  const {
    isLoading,
    isError,
    isSuccess,
    message,
    isFollowing,
    isUnFollowing,
    userDetails,
  } = useSelector((state) => state.users);
  const { userData } = useSelector((state) => state.auth);
  const { id } = useParams();
  const dispatch = useDispatch();

  const getAllUserInfoAndReset = async () => {
    await dispatch(getUserInfo());
    dispatch(reset());
  };
  // const FollowAndReset = (id) => {
  //   dispatch(followUser(id));

  //   dispatch(reset());
  // };
  // const unFollowAndReset = (id) => {
  //   dispatch(unFollowUser(id));

  //   dispatch(reset());
  // };
  useEffect(() => {
    window.scrollTo(0, 0);
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
    if (isFollowing) {
      openNotification("success", "Now following", "top");
    }
    dispatch(reset());
  }, [isError, isSuccess, isFollowing, isUnFollowing]);

  // list of people the user is following
  const userId = userDetails._id;
  const userFollowing = userDetails?.following?.map((user) => user._id);
  const loggedUser = userData;
  // list of people the logged user is following
  const loggedUserId = userData._id;
  const loggedUserFollowing = loggedUser.following?.map((user) => user._id);
  // const imFollowed = userFollowing.includes(loggedUserId);
  const imFollowing = loggedUserFollowing.includes(userId);

  if (isLoading) {
    return (
      <div className="userDetail">
        <h1>Loading user...</h1>
      </div>
    );
  }
  return (
    <div className="userDetail">
      <Bio userData={userDetails} 
      // imFollowed={imFollowed} 
      imFollowing={imFollowing} 
      />
      {/* {imFollowing ? (
        <button className="followBtn" onClick={() => unFollowAndReset(userDetails._id)}>
          Unfollow
        </button>
      ) : (
        <button onClick={() => FollowAndReset(userDetails._id)}>Follow</button>
      )} */}
      <Following userData={userDetails} />
      <UserPosts userData={userDetails} />
    </div>
  );
};

export default UserDetail;
