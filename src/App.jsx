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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/user/:id" element={<UserDetail />} />
          <Route path="/search/posts/:title" element={<Search />} />
          <Route path="/users" element={<Users />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
