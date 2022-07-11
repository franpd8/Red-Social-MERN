import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from '../../features/auth/authSlice';
import { getAllUsers, reset } from '../../features/users/usersSlice';
import User from './User/User';
import { Avatar, List, Skeleton, Switch } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

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
       <User/>
        </div>
  )
}

export default Users