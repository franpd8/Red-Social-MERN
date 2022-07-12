import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserById, reset } from "../../../../features/users/usersSlice";
import { notification } from "antd";
import { getUserInfo } from "../../../../features/auth/authSlice";
import Bio from "../../../Profile/Bio/Bio";
import { Tabs } from "antd";
import Following from "../../../Profile/Following/Following";
import Follower from "../../../Profile/Follower/Follower";
import UserPosts from "../../../Profile/UserPosts/UserPosts";
import "./../../Users.scss";
const { TabPane } = Tabs;

const UserDetail = () => {
  const {
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
  const [load, setLoad] = useState(false);

  let imFollowing;
  if (load) {
    // list of people the user has as followers
    const userFollowers = userDetails?.followers?.map((user) => user._id);
    const loggedUserId = userData._id;
    imFollowing = userFollowers.includes(loggedUserId);
  }

  const loadSys = async () => {
    window.scrollTo(0, 0);
    await dispatch(getUserById(id));
    await dispatch(getUserInfo());
    setLoad(true);
  };
  useEffect(() => {
    loadSys();
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

  return !load ? (
    <div className="users">
      {/* <div className="userDetail"> */}
        <div className="usersLoader">
          <img src="https://i.imgur.com/WfjoPpa.gif" />
        </div>{" "}
      </div>
    // </div>
  ) : (
    <div className="userDetail">
      <Bio userData={userDetails} imFollowing={imFollowing} />
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Posts" key="1">
          <UserPosts userData={userDetails} />
        </TabPane>
        <TabPane tab="Following" key="2">
          <Following userData={userDetails} />
        </TabPane>
        <TabPane tab="Followers" key="3">
          <Follower userData={userDetails} />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default UserDetail;
