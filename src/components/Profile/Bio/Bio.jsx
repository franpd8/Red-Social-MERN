import moment from "moment";
import "./Bio.scss"
function Bio({ userData }) {
    const createdTimeAgo = moment(userData.createdAt).fromNow();
  return (
    <div className="userProfile">
        <div className="userProfile__header">
        </div>
        <div className="userProfile__info">
            <div className="userNameFollow">
                <div className="userName">{userData.name}  </div>
                <div className="userIsFollowing">te sigue</div>
                </div>
        
        <div className="userEmail">{userData.email}</div>
        <div className="userBio">{userData.bio}</div>
        <div className="userMemberAgo">  Member Since  {createdTimeAgo} </div>
        </div>
       
        <div className="userAvatar"><img src={userData.avatar} /></div>
        
        
      </div>
  )
}

export default Bio