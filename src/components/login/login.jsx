import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {login} from '../../features/auth/authSlice'


const Login = () => {
    const [formData, setFormData] = useState({
        email:'',
        password:''
    })
    const {email,password} = formData
    const dispatch = useDispatch()
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
