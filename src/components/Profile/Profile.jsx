import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { getUserInfo, reset } from "../../features/auth/authSlice";
import Following from "./Following/Following";
import UserPosts from "./UserPosts/UserPosts";
import Follower from "./Follower/Follower";
import { Tabs } from "antd";
import Bio from "./Bio/Bio";
const { TabPane } = Tabs;

const Profile = () => {
  const { userData, isLoading } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const getAllUserInfoAndReset = async () => {
    await dispatch(getUserInfo());
    dispatch(reset());
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getAllUserInfoAndReset();
  }, []);

  if (isLoading) {
    return (
      <div className="profile">
        <h1>Loading User Details...</h1>
      </div>
    );
  }
  
  return (
    <div className="profile">
    

<Bio userData={userData}/>
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
  );
};

export default Profile;
