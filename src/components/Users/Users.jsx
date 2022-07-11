import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from '../../features/auth/authSlice';
import { getAllUsers, reset } from '../../features/users/usersSlice';
import User from './User/User';
import { Avatar, List, Skeleton, Switch } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import "./Users.scss"
const Users = () => {
const { isLoading } = useSelector((state) => state.users);
  const dispatch = useDispatch();

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
   <div className="usersLoader">
     <img src="https://i.imgur.com/WfjoPpa.gif"/>
    </div> </div>
  }

  return (
    <div className="users">
       <User/>
        </div>
  )
}

export default Users