import axios from "axios"

const API_URL= "http://localhost:8080"

const register = async (userData)=>{
    console.log(userData)
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
    // borrar de base de datos
    const res = await axios.delete(API_URL + "/users/logout", {
      headers: {
        authorization: user?.token,
      },
    });
    if (res.data) {
        // borrar de localStorage
      localStorage.removeItem("user");
    }
    console.log(res.data.message)
    return res.data.message;
  };
  


const authService = {
    register,
    login,
    logout
}
export default authService