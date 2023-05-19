
import { useState } from 'react';

import axios from 'axios'
import styles from '../styles/sign.module.css';
import { useRouter } from 'next/router';
    
        
        
const AddUserPage = () => {
    const router=useRouter();

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
        
        await axios.post(`http://${process.env.HOST}:${process.env.PORT}/users/signup`,{username,email,password,isAdmin:false})
        router.push('/login')
      }
      else{
        return alert("you should confirm your password")
      }

    };
  
    return (

      <div className={styles.container}>
      <h1 className={styles.h1}></h1>
      <div className={styles['signup-form']}>
        <div>
          <label htmlFor="name" className={styles.label}>Username</label>
          <input type="text" id="name" value={username} onChange={handleNameChange} className={styles['input-text']} required />
        </div>
        <div>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} className={styles['input-email']} required />
        </div>
        <div>
          <label htmlFor="password" className={styles.label}>Password</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} className={styles['input-password']} required />
        </div>
        <div>
          <label htmlFor="confPassword" className={styles.label}>Confirm Password</label>
          <input type="password" id="confPassword" value={confPassword} onChange={handleConfPasswordChange} className={styles['input-password']} required />
        </div>
        <button className={styles['signup-button']} onClick={handleSubmit}>Add User</button>
      </div>
    </div>
    );
  };
  export default AddUserPage