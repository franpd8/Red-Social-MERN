import { useSelector } from "react-redux";
import moment from 'moment'
import Following from "./Following/Following";
const Profile = () => {
    const { user } = useSelector((state) => state.auth);
    console.log("usuario",user.user)
    console.log("usuarios que sigo", user.user.following)

    const updateTimeAgo = moment(user.user.updateAt).fromNow();

    const following = user.user.following?.map(user => (
      <div key={user._id}>{console.log("usuario mapeado",user)}
      <p> {user.name}</p>
      <p> <img className = "smallIcon__img" src={user.avatar}/></p>
      </div>
    ))
  
    
   
  return (
    <div>
     <h1>Profile</h1>
     <p>{user.user.name}</p>
     <p>{user.user.email}</p>
     <img src={user.user.avatar}/>

    <p> Last update:{updateTimeAgo} </p>
    <p> Following: ({following.length})</p> <Following/>
    
    </div>
  )
}

export default Profile