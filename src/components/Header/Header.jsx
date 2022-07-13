import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getUserInfo, logout, reset } from "../../features/auth/authSlice";
import { notification, Input } from "antd";
import AddPost from "../Home/AddPost/AddPost";
import {
  HomeOutlined,
  SearchOutlined,
  UserOutlined,
  UploadOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import "./Header.scss";
const Header = () => {
  const { pathname } = useLocation();
  const { user, userData, message, isSuccessLogOut } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const openNotification = (type, messageTitle, placement) => {
    notification[type]({
      className: "notification-class",
      message: messageTitle,
      description: message,
      placement,
    });
  };

 const avatar = userData.avatar
  const onLogout = (e) => {
    openNotification("success", "Log out Succesfully :)", "top");
    setTimeout(() => {
      dispatch(logout());
    }, 2000);
  };

  // if(pathname == "/login"){
  //   return null }

  return (
    <div className="header">
      
      <nav className="header-box">
        <div>
          {user ? (
            <>

              <div className="userInfo">
              <Link to={"/profile"}>
                <div className="userDescription">
                  <div className="userAvatar">
                    <img src={avatar ? avatar : "https://i.imgur.com/Svw4Sam.png"} />
                    
                  </div>
                  <div className="userRefs">
                    <div className="userName">{userData.name}</div>
                    <div className="userAlias">{"@" + userData.alias}</div>
                  </div>
                </div>
                <div class="userStats">
                  <div class="userStat">
                    <span class="value">{userData.postIds.length}</span>
                    Posts
                  </div>
                  <div class="userStat">
                    <span class="value">{userData.followers.length}</span>
                    Followers
                  </div>
                  <div class="userStat">
                    <span class="value">{userData.following.length} </span>{" "}
                    Following
                  </div>
                </div>
                </Link>
              </div>
              

              <div className="headerNav">
                <div
                  className={
                    pathname == "/" ? "header-link selected" : "header-link"
                  }
                >
                  <Link to="/">
                    {" "}
                    <div className="header-icon">
                      <HomeOutlined />
                    </div>{" "}
                    Home
                  </Link>
                </div>
                <div
                  className={
                    pathname == "/users"
                      ? "header-link selected"
                      : "header-link"
                  }
                >
                  <Link to="/users">
                    <div className="header-icon">
                      <SearchOutlined />
                    </div>
                    People
                  </Link>
                </div>
                <div
                  className={
                    pathname == "/profile"
                      ? "header-link selected"
                      : "header-link"
                  }
                >
                  <Link to="/profile">
                    <div className="header-icon">
                      <UserOutlined />
                    </div>{" "}
                    Profile{" "}
                  </Link>{" "}
                </div>
                <div className="header-link">
                  <a>
                    <div className="header-icon">
                      <UploadOutlined />
                    </div>{" "}
                    <AddPost />
                  </a>
                </div>
                <div className="header-link">
                  <Link to="/login" onClick={onLogout}>
                    <div className="header-icon">
                      <LogoutOutlined />
                    </div>
                    Logout
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <>hola</>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
