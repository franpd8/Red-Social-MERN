import axios from "axios";

const API_URL = "http://localhost:8080";

const getAllPosts = async () => {
  const res = await axios.get(API_URL + "/posts/all");
  return res.data;
};

const getPostById = async (id) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const res = await axios.get(API_URL + "/posts/id/" + id, {
    headers: {
      authorization: user?.token,
    },
  });

  return res.data;
};

const getPostByName = async (postTitle) => {
  const res = await axios.get(API_URL + "/posts/search/" + postTitle);
  console.log("respuesta", res.data);
  return res.data;
};

const createPost = async (postBody) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const res = await axios.post(API_URL + "/posts/add", postBody, {
    headers: {
      authorization: user?.token,
    },
  });
  console.log(res.data);
  return res.data;
};

const like = async (_id) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const res = await axios.put(
    API_URL + "/posts/like/" + _id,
    {},
    {
      headers: {
        authorization: user?.token,
      },
    }
  );

  return res.data;
};

const dislike = async (_id) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const res = await axios.put(
    API_URL + "/posts/dislike/" + _id,
    {},
    {
      headers: {
        authorization: user?.token,
      },
    }
  );

  return res.data;
};

const deletePost = async (id) => {
  const res = await axios.delete(API_URL + "/posts/delete/" + id);
  console.log("resdata de deletePost",res.data)
  console.log("buscando el post borrado",res.data.post)
  console.log("buscando el id",res.data.post._id)
  return res.data;
};


const postsService = {
  getAllPosts,
  getPostById,
  getPostByName,
  createPost,
  like,
  dislike,
  deletePost,
};

export default postsService;
