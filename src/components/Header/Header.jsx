import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout, reset } from "../../features/auth/authSlice";
import { notification, Input } from "antd";
import Home from "../Home/Home";


const Header = () => {
  const { user, message, isSuccessLogOut } = useSelector((state) => state.auth);
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
  
  useEffect(() => {
    if (isSuccessLogOut) {
      openNotification("success","Log out Succesfully :)","top")
      navigate("/login");
    }
    dispatch(reset());
  }, [isSuccessLogOut]);

  const onLogout = (e) => {
    dispatch(logout());
  };

  return (
    <div className="header">
    <nav className="header-box">
      <div>
        {user ? (
          <>
          <div className="header-link" >
        <Link   to="/">home</Link>
      </div>
      <div className="header-link" >
        <Link  to="/users">userlist</Link>
      </div>

            <div className="header-link" >
              <Link to="/" onClick={onLogout}>
                Logout
              </Link>
            </div>
            <div className="header-link" >
              <Link to="/profile">{user.user.name}'s Profile </Link>{" "}
            </div>
          </>
        ) : (
          <>
            {/* <span>
              <Link to="/login">Login</Link>
            </span>
            <span>
              <Link to="/register">Register</Link>
            </span> */
            }

            Bienvenido imagen 
          </>
        )}
      </div>
    </nav>
    </div>
  );
};

export default Header;
