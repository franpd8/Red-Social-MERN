import axios from "axios"

const API_URL= "http://localhost:8080"

const register = async (userData)=>{
    const res = await axios.post(API_URL+ "/users/add", userData)
    return res.data
}

const authService = {
    register
}
export default authService