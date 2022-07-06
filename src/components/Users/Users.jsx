import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers, reset } from '../../features/users/usersSlice';
import SearchPost from '../Home/Posts/SearchPost/SearchPost';
import SearchUser from './User/SearchUser/SearchUser';
import User from './User/User';

const Users = () => {
const { isLoading } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const getUsersAndReset = async () => {
    await dispatch(getAllUsers());
    dispatch(reset());
  };

  useEffect(() => {
    getUsersAndReset();
  }, []);

  if (isLoading) {
    return<div className="users"> <h1>Loading users...</h1></div>
  }

  return (
    <div className="users">
        <h2> Here will display all  Users </h2>
        <div>
            <SearchUser/>
            <SearchPost/>
            </div>
    
       <User/>
        </div>
  )
}

export default Users