import { useSelector } from "react-redux";
import moment from 'moment'
import Following from "./Following/Following";
import UserPosts from "./UserPosts/UserPosts";
const Profile = () => {
    const { user } = useSelector((state) => state.auth);
    console.log("usuario",user.user)
    console.log("usuarios que sigo", user.user.following)

    const createdTimeAgo = moment(user.user.createdAt).fromNow();   
  return (
    <div>
     <h1>Profile</h1>
     <p>Name: {user.user.name}</p>
     <p>Email: {user.user.email}</p>
     <img src={user.user.avatar}/>

    <p> Member since: {createdTimeAgo} </p>
    <p> Following: ({user.user.following.length})</p> <Following/>
    <div><UserPosts/></div>
    
    </div>
  )
}

export default Profile