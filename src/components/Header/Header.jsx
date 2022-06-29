
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";

const Header = () => {

    const { user } = useSelector((state) => state.auth);
    const navigate= useNavigate()
    const dispatch= useDispatch()

    const onLogout = (e) => {
      e.preventDefault();
      dispatch(logout());
      navigate("/login");
    };
    
  

    return (
      <nav>
      <span>header</span>
      <div>
        {user ? 
          <span>
            <Link to="/" onClick={onLogout}>Logout</Link>
          </span>
         : 
          <>
            <span><Link to="/login">Login</Link></span>
            <span><Link to="/register">Register</Link></span>
          </>
        }
      </div>
    </nav>

    )
  }
  
  export default Header