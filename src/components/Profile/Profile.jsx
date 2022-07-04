import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import moment from "moment";
import { getUserInfo, reset} from "../../features/auth/authSlice";
import Following from "./Following/Following";
import UserPosts from "./UserPosts/UserPosts";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const { userData } = useSelector((state) => state.auth);
  const { isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch()
  
  const getAllUserInfoAndReset = async () => {
    await dispatch(getUserInfo()); 
    dispatch(reset());
   };

  useEffect(() => {
    getAllUserInfoAndReset()

  }, [])
  
  if (isLoading) {
    return <h1>Loading User Details...</h1>;
  }
  const createdTimeAgo = moment(user.user.createdAt).fromNow();
  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {user.user.name}</p>
      <p>Email: {user.user.email}</p>
      <img src={user.user.avatar} />
      <p> Member since: {createdTimeAgo} </p>
      <p> Following: ({user.user.following.length})</p>
      <Following userData={userData}/>
      <div>
        <UserPosts userData={userData} />
      </div>
    </div>
  );
};

export default Profile;
