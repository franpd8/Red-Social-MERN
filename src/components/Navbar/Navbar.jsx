
import SearchPost from "./SearchPost/SearchPost"
import "./Navbar.scss"
const Navbar = () => {
  return (

    <div className="navbar"> 
    <div className="logo">
      <div className="logoApp"> 
      <img src="https://icon-library.com/images/bird-icon/bird-icon-17.jpg"/> </div>
      <div className="logoName">Chirp</div>
    </div>
    <SearchPost />
    </div>
  )
}

export default Navbar