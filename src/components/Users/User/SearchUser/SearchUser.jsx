import React from 'react'
import { Input } from "antd";
import { useNavigate } from "react-router-dom";
const { Search } = Input;
const SearchUser = () => {
    const navigate = useNavigate();
    const onSearch = (value) => {
        navigate("/search/users/" + value);
      };
  return (
    <div><Search
    placeholder="Search for an user"
    className="searchBar"
    allowClear
    onSearch={onSearch}
    enterButton
  /></div>
  )
}

export default SearchUser