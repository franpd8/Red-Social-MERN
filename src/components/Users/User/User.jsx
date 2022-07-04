import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const User = () => {
    const { users } = useSelector((state) => state.users);

    const user = users.map((userdata) => {
     
         console.log(userdata)
    
        return (

          <div className="user" key={userdata._id}>
            A single user 
            <Link to={"/user/" + userdata._id}>
            <p>Name: {userdata.name}</p>
            <img className="smallIcon__img" src={userdata.avatar} />
            </Link>
          </div>
        );
      });

  return (
    <div className="users__all">{user}</div>
  )
}

export default User