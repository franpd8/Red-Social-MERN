import axios from "axios"

const API_URL= "http://localhost:8080"

const register = async (userData)=>{
    const res = await axios.post(API_URL+ "/users/add", userData)
    return res.data
}

const login = async(userData)=>{
    const res = await axios.post(API_URL + '/users/login',userData)
    if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
      }
    return res.data
}

const logout = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const res = await axios.delete(API_URL + "/users/logout", {
      headers: {
        authorization: user?.token,
      },
    });
    if (res.data) {
     
      localStorage.removeItem("user");
    }
    return res.data.message;
  }; 
  const getUserInfo = async()=>{
    const user = JSON.parse(localStorage.getItem("user"));
   
    const res = await axios.get(API_URL + '/users/info',{
      headers: {
        authorization: user?.token,
      }})
      if (res.data) {
        localStorage.setItem("userData", JSON.stringify(res.data));
        
      } 
    return res.data
}

const authService = {
    register,
    login,
    logout,
    getUserInfo
}
export default authService