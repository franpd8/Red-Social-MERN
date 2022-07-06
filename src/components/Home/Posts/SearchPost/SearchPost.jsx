import React from 'react'
import { Input } from "antd";
import { useNavigate } from "react-router-dom";
const { Search } = Input;
const SearchPost = () => {
    const navigate = useNavigate();
    const onSearch = (value) => {
        navigate("/search/" + value);
      };
  return (
    <div><Search
    placeholder="Search for a post"
    className="searchBar"
    allowClear
    onSearch={onSearch}
    enterButton
  /></div>
  )
}

export default SearchPost