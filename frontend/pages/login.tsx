import React,{useState,useContext} from 'react'
import axios from "axios";
import {useRouter} from 'next/router'
import * as dotenv from 'dotenv'
dotenv.config()
import  { Context } from './Context';
const Login = () => {
    const {currentUser,setCurrentUser}=useContext(Context)
    console.log(currentUser)
    const router=useRouter()
    const [username, setUsername] = useState('');
    const [password,setPassword]=useState('');

    const login=async()=>{
        const res=await axios.post(`http://${process.env.HOST}:${process.env.PORT}/users/login`,{username,password});
        setCurrentUser(res.data)
        router.push('/')
    }
  return (
    <div>
        <label htmlFor="username">Username:</label>
        <input type="email" id="email" value={username} onChange={e=>setUsername(e.target.value)} required/>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={e=>setPassword(e.target.value)}  required/>
        <button onClick={()=>login()}>Login</button>
    </div>
  )
}

export default Login;
