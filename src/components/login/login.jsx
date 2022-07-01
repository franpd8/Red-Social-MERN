import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {login, reset} from '../../features/auth/authSlice'
import { notification } from "antd";

const Login = () => {
    const [formData, setFormData] = useState({
        email:'',
        password:''
    })
    const {email,password} = formData
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const { isError, isSuccess, message } = useSelector((state) => state.auth);
  
    useEffect(() => {
        if (isError) {
          notification.error({  message: "Error :(", description: message });
        }
        if (isSuccess) {
          notification.success({  message: "Éxito :) ", description: message });
          navigate("/profile");
        }
        dispatch(reset());
      }, [isError, isSuccess, message]);
    const onChange = (e)=>{
        setFormData((prevState)=> ({
            ...prevState,
            [e.target.name]:e.target.value,
        }))
    }
    const onSubmit = (e) => {
        e.preventDefault()
        console.log('formData',formData)
        dispatch(login(formData))    }

  return (
    <form onSubmit={onSubmit}>
        <div className="userLabel">Email</div>
        <input type="email" name="email" value={email} onChange={onChange}/>
        <div className="userLabel">Password</div>
        <input type="password" name="password" value={password} onChange={onChange}/>
        <button type="submit">Login</button>
    </form>
  )
}
export default Login
