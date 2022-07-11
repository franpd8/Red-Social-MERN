import { useLocation} from"react-router"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getUserInfo, logout, reset } from "../../features/auth/authSlice";
import { notification, Input } from "antd";


const Header = () => {
  const {pathname} = useLocation()
  const { user,userData, message, isSuccessLogOut } = useSelector((state) => state.auth);
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
    }   
    
  }, [isSuccessLogOut]);

  const onLogout = (e) => {
    
    dispatch(logout());
  };

// if(pathname == "/login"){
//   return null }


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
              <Link to="/profile">{userData.name}'s Profile </Link>{" "}
            </div>
            <div className="header-link" >
              <Link to="/login" onClick={onLogout}>
                Logout
              </Link>
            </div>
          </>
        ) : <>hola</>}
      </div>
    </nav>
    </div>
  );
};

export default Header;
