import axios from "axios";

const API_URL = "http://localhost:8080";

const getAllUsers = async () => {
  const res = await axios.get(API_URL + "/users/all");
  return res.data;
};

const getUserById = async (id) => {
  const user = JSON.parse(localStorage.getItem("user"));
    const res = await axios.get(API_URL + "/users/id/" + id,{
      headers: {
        authorization: user?.token,
      }});
    return res.data;
  };
  

  const followUser = async (userId) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const res = await axios.put(API_URL + "/users/follow/" + userId,
    {},
    {
      headers: {
        authorization: user?.token,
      },
    });
    return res.data;
  };
  const unFollowUser = async (userId) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const res = await axios.put(API_URL + "/users/unfollow/" + userId,
    {},
    {
      headers: {
        authorization: user?.token,
      },
    });
    return res.data;
  };


const updateUser = async (userData) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const res = await axios.put(
    API_URL + "/users/update/" + userData.id,
    userData,
     {
      headers: {
      authorization: user?.token,
    },
  });
  return res.data;
};


const postsService = {
  getAllUsers,
  getUserById,
  followUser,
  unFollowUser,
  updateUser
};

export default postsService;
