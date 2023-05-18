import React,{useState} from 'react'
import axios from "axios";
const Login = () => {
    const [username, setUsername] = useState('');
    const [password,setPassword]=useState('');

    const login=async()=>{
        axios.post("http://localhost:4000/users/login",{username,password});

    }
  return (
    <div>
        <label htmlFor="username">Username:</label>
        <input type="email" id="email" value={username} onChange={e=>setUsername(e.target.value)} required/>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={e=>setPassword(e.target.value)}  required/>
        <button>Login</button>
    </div>
  )
}

export default Login;
