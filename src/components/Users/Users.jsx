import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers, getUserById, reset } from '../../features/users/usersSlice';
import User from './User/User';

const Users = () => {
const { isLoading,isFollowing,userDetails } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const userLog = JSON.parse(localStorage.getItem("user"))
  const  userLogId = userLog.user._id
  // const userFollowing = userDetails.following?.map( user => user._id)
  // console.log("hola",userFollowing)


  const getUsersAndReset = async () => {
    await dispatch(getAllUsers())
    await dispatch(getUserById(userLogId))
    dispatch(reset())
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
       <User/>
        </div>
  )
}

export default Users