import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import PostDetail from "./components/Home/Posts/PostDetail/PostDetail";
import Search from "./components/Search/Search";
import Users from "./components/Users/Users";
import UserDetail from "./components/Users/User/UserDetail.jsx/UserDetail";
import Posts from "./components/Home/Posts/Posts";
import PrivateZone from "./guards/PrivateZone";

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Header />
        <Routes>
        <Route path="/login" element={<Login />} />
        </Routes>
        <div className="margin">
        <Routes>
          <Route path="/" element={<Home />} />
         
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<PrivateZone>
                <Profile />
              </PrivateZone>} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/user/:id" element={<UserDetail />} />
          <Route path="/search/posts/:title" element={<Search />} />
          <Route path="/users" element={<Users />} />
          

        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
