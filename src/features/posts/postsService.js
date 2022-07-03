import axios from "axios";

const API_URL = "http://localhost:8080";

const getAllPosts = async () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const res = await axios.get(API_URL + "/posts/all");
  return res.data;
};

const getPostById = async (id) => {
  const user = JSON.parse(localStorage.getItem("user"));
    const res = await axios.get(API_URL + "/posts/id/" + id,{
      headers: {
        authorization: user?.token,
      }});
  
    return res.data;
  };
  
const getPostByName = async (postTitle) => {
    const res = await axios.get(API_URL + "/posts/search/" + postTitle);
    console.log("respuesta",res.data)
    return res.data;
  };
  

const postsService = {
  getAllPosts,
  getPostById,
  getPostByName
};

export default postsService;
