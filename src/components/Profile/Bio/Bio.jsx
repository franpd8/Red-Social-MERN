import moment from "moment";
import { CalendarOutlined, LinkOutlined, MailOutlined,EllipsisOutlined } from "@ant-design/icons";
import {followUser,reset,unFollowUser,} from "../../../features/users/usersSlice";
import "./Bio.scss";
import { useDispatch } from "react-redux";
import { useState } from "react";
import EditBio from "../EditBio/EditBio";
function Bio({ userData,imFollowed,imFollowing}) {
    const initialValue = true;
const [edit,SetEdit] = useState(initialValue);
  const createdTimeAgo = moment(userData.createdAt).fromNow();
  const user = userData._id
  const userLog = JSON.parse(localStorage.getItem("user"))
  const userLogId = userLog.user._id
 const avatar = userData.avatar
 const header = userData.header
 const dispatch = useDispatch();
 const FollowAndReset = (id) => {
    dispatch(followUser(id));
    dispatch(reset());
  };
  const unFollowAndReset = (id) => {
    dispatch(unFollowUser(id));
    dispatch(reset());
  };

  return (
    <div className="userProfile">
      <div className="userProfile__header">
        <img className="userHeader" src={header?header:"https://i.imgur.com/V1nLI5q.jpg"} />
      </div>
      <div className="userProfile__info">
      <div className="userButtons">
      
{ user == userLogId? <> <button className="editBtn" onClick={() => SetEdit((initial) => !initial)}>
          Edit profile
        </button  >  </> : <>{imFollowing ? <> 
        <button className="settingsBtn"><EllipsisOutlined /></button><button className="DMbtn" >
        <MailOutlined />
        </button>  
        <button className="unFollowBtn" onClick={() => unFollowAndReset(userData._id)}>
          Unfollow
        </button>
      </> : (
        <button className="followBtn" onClick={() => FollowAndReset(userData._id)}>Follow</button>
      )} </>}
      </div>


      {edit? <>
        <div className="userNameFollow">
        <div className="userBio">
          <div className="userName"> {userData.name} </div>
          {imFollowed? <><div className="userIsFollowing">follows you </div></>: null }
        
        <div className="userEmail">{userData.email}</div>
        {/* Comentado porque explota :(  */}
        {/* <div className="userStats">
          <div className="userFollowing">
            <span className="stats">{userData?.following.length}</span> Following{" "}
          </div>

          <div className="userFollowers">
            <span className="stats">{userData.followers.length}</span> Followers{" "}
          </div>
        </div> */}
        <div className="userDescription">{userData.bio}</div>
        <div className="userExtLink">
          <LinkOutlined /> {userData.link}
        </div>
        <div className="userMemberAgo">
          {" "}
          <CalendarOutlined /> Member Since {createdTimeAgo}{" "}
        </div>
        </div>
        </div>
      
      
      </> : <>
      
 <EditBio userData={userData} />
      
      
        
        
       </>  }

      
        
       




        
        
      </div>
      <div className="userAvatar">
        <img src={avatar?avatar:"https://i.imgur.com/Svw4Sam.png"} />
      </div>
      
    </div>
  );
}

export default Bio;
