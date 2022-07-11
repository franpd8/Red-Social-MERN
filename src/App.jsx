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
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

        {/* <div className="margin"> */}
        <Routes>
          <Route
            path="/"
            element={
              <PrivateZone>
                <Header />
                <div className="margin">
                  <Home />
                </div>
              </PrivateZone>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateZone>
                <Header />
                <div className="margin">
                  <Profile />
                </div>
              </PrivateZone>
            }
          />
          <Route
            path="/posts"
            element={
              <>
                <Header />
                <div className="margin">
                  <Posts />
                </div>
              </>
            }
          />
          <Route
            path="/post/:id"
            element={
              <>
                <Header />
                <div className="margin">
                  <PostDetail />
                </div>
              </>
            }
          />
          <Route
            path="/user/:id"
            element={
              <>
                <Header />
                <div className="margin">
                  <UserDetail />
                </div>
              </>
            }
          />
          <Route
            path="/search/posts/:title"
            element={
              <>
                <Header />
                <div className="margin">
                  <Search />
                </div>
              </>
            }
          />
          <Route
            path="/users"
            element={
              <>
                <Header />
                <div className="margin">
                  <Users />
                </div>
              </>
            }
          />
        </Routes>
        {/* </div> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
