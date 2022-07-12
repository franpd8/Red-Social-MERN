import React from 'react'
import { Input } from "antd";
import { useNavigate } from "react-router-dom";
import "./../Navbar.scss"
const { Search } = Input;
const SearchPost = () => {
    const navigate = useNavigate();
    const onSearch = (value) => {
        navigate("/search/posts/" + value);
      };
  return (
    <div><Search
    placeholder="Search for a post"
    className="searchBar"
    onSearch={onSearch}
    enterButton
  /></div>
  )
}

export default SearchPost