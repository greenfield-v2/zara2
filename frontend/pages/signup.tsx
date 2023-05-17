import { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import axios from 'axios'
const AddUserPage: NextPage = () => {
    
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password,setPassword]=useState('')
    const [confPassword,setConfPassword]=useState('')
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setUserName(e.target.value);
    };
  
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    };
    

    const handlePasswordChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
      setPassword(e.target.value)
    }
    const handleConfPasswordChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
      setConfPassword(e.target.value)
    }
    const handleSubmit = async (e: React.FormEvent) => {
      if(password===confPassword ){
        
        await axios.post("http://localhost:4000/users/signup",{username,email,password,isAdmin:false})
        alert('go to login')
      }
      else{
        return alert("you should confirm your password")
      }

    };
  
    return (
      <div>
        <h1>Add User</h1>
        <form >
          <div>
            <label htmlFor="name">Username</label>
            <input type="text" id="name" value={username} onChange={handleNameChange} required/>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={handleEmailChange} required/>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={handlePasswordChange} required/>
            <label htmlFor="confPassword">Confirm Password</label>
            <input type="password" id="confPassword" value={confPassword} onChange={handleConfPasswordChange} required/>
          </div>
         <button onClick={
          handleSubmit
          }>Add User</button>
        </form>
      </div>
    );
  };
  export default AddUserPage