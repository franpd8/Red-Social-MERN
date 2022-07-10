import moment from "moment";
import { CalendarOutlined, LinkOutlined } from "@ant-design/icons";

import "./Bio.scss";
import { useSelector } from "react-redux";
function Bio({ userData }) {
  const createdTimeAgo = moment(userData.createdAt).fromNow();

  const { isLoading } = useSelector((state) => state.auth);

 

  return (
    <div className="userProfile">
      <div className="userProfile__header"></div>
      <div className="userProfile__info">
        <div className="userNameFollow">
          <div className="userName"> {userData.name} </div>
          <div className="userIsFollowing">follows you </div>
        </div>
        <div className="userEmail">{userData.email}</div>
        {/* <div className="userStats">
          <div className="userFollowing">
            <span className="stats">{userData?.following.length}</span> Following{" "}
          </div>

          <div className="userFollowers">
            <span className="stats">{userData.followers.length}</span> Followers{" "}
          </div>
        </div> */}
        <div className="userBio">{userData.bio}</div>
        <div className="userExtLink">
         
          <LinkOutlined /> Possible External Link
        </div>
        <div className="userMemberAgo">
          {" "}
          <CalendarOutlined /> Member Since {createdTimeAgo}{" "}
        </div>
      </div>
      <div className="userAvatar">
        <img src={userData.avatar} />
      </div>
    </div>
  );
}

export default Bio;
