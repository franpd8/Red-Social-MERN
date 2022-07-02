import './App.scss';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Home from "./components/Home/Home";
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import RegisterA from './components/RegisterA/RegisterA';
import LoginA from './components/LoginA/LoginA';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loginA" element={<LoginA />} />
          <Route path="/register" element={<Register />} />
          <Route path="/registerA" element={<RegisterA />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
