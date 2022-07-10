import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from '../../features/auth/authSlice';
import { getAllUsers, getUserById, reset } from '../../features/users/usersSlice';
import User from './User/User';
import { Avatar, List, Skeleton, Switch } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const Users = () => {
const { isLoading,isFollowing } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  // const userFollowing = userDetails.following?.map( user => user._id)
  // console.log("hola",userFollowing)


  const getUsersAndReset = async () => {
    await dispatch(getAllUsers())
    await dispatch(getUserInfo());
    dispatch(reset())
  };

  useEffect(() => {
    getUsersAndReset();
  }, []);

  if (isLoading) {
    return<div className="users"> 
    <LoadingOutlined
    style={{
      fontSize: 24,
    }}
    spin
  />
    <Skeleton.Image />
<Skeleton
    avatar
    paragraph
  />
  

  
    </div>
  }

  return (
    <div className="users">
        <h2> Here will display all  Users </h2>
       <User/>
        </div>
  )
}

export default Users