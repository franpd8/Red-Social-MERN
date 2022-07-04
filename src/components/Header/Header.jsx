import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout, reset } from "../../features/auth/authSlice";
import { notification, Input } from "antd";
import Home from "../Home/Home";

const { Search } = Input;

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
  const onSearch = (value) => {
    navigate("/search/" + value);
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
    <nav>
      <p>
        <Link to="/">home</Link>
      </p>
      <p>
        <Link to="/users">userlist</Link>
      </p>

      <Search
        placeholder="Search for a post"
        className="searchBar"
        allowClear
        onSearch={onSearch}
        enterButton
      />

      <div>
        {user ? (
          <>
            <div>
              <Link to="/" onClick={onLogout}>
                Logout
              </Link>
            </div>
            <div>
              <Link to="/profile">{user.user.name}'s Profile </Link>{" "}
            </div>
          </>
        ) : (
          <>
            <span>
              <Link to="/login">Login</Link>
            </span>
            <span>
              <Link to="/register">Register</Link>
            </span>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
