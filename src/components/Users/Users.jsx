import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers, reset } from '../../features/users/usersSlice';
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
    return <h1>Loading users...</h1>;
  }

  return (
    <div >
       <User/>
        </div>
  )
}

export default Users