import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {register} from '../../features/auth/authSlice'


const Register = () => {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:''
    })
    const {name,email,password} = formData

    const dispatch =  useDispatch()
    
    const onChange = (e)=>{
        setFormData((prevState)=> ({
            ...prevState,
            [e.target.name]:e.target.value,
        }))
    }
    const onSubmit = (e) => {
        e.preventDefault()
        console.log('formData',formData)
        dispatch(register(formData))
    }
  return (
    <form onSubmit={onSubmit}>
       <div className="userLabel">Name</div>
        <input type="text" name="name" value={name} onChange={onChange} />
        <div className="userLabel">Email</div>
        <input type="email" name="email" value={email} onChange={onChange}/>
        <div className="userLabel">Password</div>
        <input type="password" name="password" value={password} onChange={onChange}/>
        <button type="submit">Register</button>
    </form>
  )
}
export default Register
