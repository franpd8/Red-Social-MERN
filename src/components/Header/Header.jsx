import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout,reset } from "../../features/auth/authSlice";
import { notification,Input} from "antd";
import Home from "../Home/Home";

const { Search } = Input;

const Header = () => {
  const { user,message } = useSelector((state) => state.auth);
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

  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
    if (e.key === "Enter") {
      console.log(text);
    }
  };
  const onSearch = (value) => {
    console.log(value);

    navigate('/search/'+ value)
  } 


  const onLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/login");
    notification.success({  message: "Desconectado con éxito :) ", description: message });
    // openNotification('Success','Logout succesfull :)','top')
    console.log(message)
    // dispatch(reset());
  };

  

  return (
    <nav>
     
      <span> <Link to="/">home</Link></span>
      {/* <input onKeyUp={handleChange} placeholder="search post" name="text" /> */}
      <Search placeholder="input search text" className="searchBar" onSearch={onSearch} enterButton />
    
      <div>
        {user ? (
          <>
            <span>
              <Link to="/" onClick={onLogout}>Logout</Link>
            </span>
            <span>
              <Link to="/profile">{user.user.name}</Link>{" "}
            </span>
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
