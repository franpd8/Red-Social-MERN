import AddPost from "./AddPost/AddPost";
import Posts from "./Posts/Posts";
import SearchPost from "./Posts/SearchPost/SearchPost";
import { BackTop } from "antd";
import React, { useEffect } from "react";
import { UpSquareFilled } from '@ant-design/icons';


const style = {
  height: 60,
  width: 60,
  lineHeight: "72px",
  borderRadius: 4,
  backgroundColor: "#1088e9",
  color: "#fff",
  textAlign: "center",
  fontSize: 14,
};

const Home = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  <div
    style={{
      height: "600vh",
      padding: 16,
    }}
  ></div>;





  return (
    <div className="home">
      
      {user?<>
      <div className="postButton"><AddPost /></div>
      <h1>Home</h1>
      <SearchPost />
      <Posts /> </> :null }
      <BackTop>
        <div style={style}><UpSquareFilled  style={{ fontSize: 32 + "px" }} /></div>
      </BackTop>
    </div>
  );
};

export default Home;
