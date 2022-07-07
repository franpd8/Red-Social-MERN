import AddPost from "./AddPost/AddPost";
import Posts from "./Posts/Posts";
import SearchPost from "./Posts/SearchPost/SearchPost";
import { BackTop } from "antd";
import React from "react";
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
  <div
    style={{
      height: "600vh",
      padding: 16,
    }}
  ></div>;
  return (
    <div className="home">
      
      <AddPost />
      <h1>Home</h1>
      <SearchPost />
      <h2>Here will display all Posts</h2>
      <Posts />
      <BackTop>
        <div style={style}><UpSquareFilled  style={{ fontSize: 32 + "px" }} /></div>
      </BackTop>
    </div>
  );
};

export default Home;
