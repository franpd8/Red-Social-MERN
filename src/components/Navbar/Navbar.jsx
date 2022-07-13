
import SearchPost from "../Search/SearchPost/SearchPost"
import "./Navbar.scss"
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="align">
    <div className="navbar"> 
    <Link to="/">
    <div className="logo">
      <div className="logoApp"> 
      <img src="https://icon-library.com/images/bird-icon/bird-icon-17.jpg"/> </div>
      <div className="logoName">Chirp</div>
    </div></Link>
    <div className="searchBar"><SearchPost /></div>
    </div>
    </div>
  )
}

export default Navbar