import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { getUserInfo } from "../../features/auth/authSlice";


import Following from "./Following/Following";
import UserPosts from "./UserPosts/UserPosts";
import Follower from "./Follower/Follower";
import { Tabs } from "antd";
import Bio from "./Bio/Bio";
import { notification } from "antd";
import { reset } from "../../features/users/usersSlice";

const { TabPane } = Tabs;

const Profile = () => {
  const { userData} = useSelector((state) => state.auth);
  const { users,isError, isSuccess, message} = useSelector((state) => state.users);
  const [load, setLoad] = useState(false)
  const dispatch = useDispatch();
  const getAllUserInfoAndReset = async () => {
    await dispatch(getUserInfo());
    dispatch(reset());
  };
  const loadSys = async() => {
    window.scrollTo(0, 0);
    await getAllUserInfoAndReset();
     setLoad(true)
  }

  useEffect(() => {
    loadSys()
  }, [users]);

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
    
    dispatch(reset());
  }, [isError, isSuccess]);

  return (
    !load?
    <div className="users">
    <div className="usersLoader">
    <img src="https://i.imgur.com/WfjoPpa.gif"/>
   </div> </div>



      :
        <div className="profile">
          <Bio className="bio" userData={userData}/>
    
            <Tabs defaultActiveKey="1" centered>
              <TabPane tab="Posts" key="1">
            <UserPosts userData={userData} />
          </TabPane>
          <TabPane tab="Following" key="2">
            <Following userData={userData} />
          </TabPane>
          <TabPane tab="Followers" key="3">
            <Follower userData={userData} />
          </TabPane>
        </Tabs>
      </div>
  )


  }
export default Profile;
