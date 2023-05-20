import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

import { Context } from './Context';

const Login = () => {
  const { currentUser, setCurrentUser } = useContext(Context);
  console.log(currentUser);
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    const res = await axios.post(`http://${process.env.HOST}:${process.env.PORT}/users/login`, { username, password });
    setCurrentUser(res.data);
    router.push('/');
  };

  const containerStyle = {
    
    maxWidth: '400px',
    margin: "100px",
    marginLeft:"500px",
    padding: '30px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    background: '#f9f9f9',
    boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
  };

  const headingStyle = {
    
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
    color: '#333',
  };

  const formGroupStyle = {
    marginBottom: '20px'
    
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    fontSize: '14px',
    color: '#555',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '14px',
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#fff',
    background: '#000',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Login</h2>
      <div style={formGroupStyle}>
        <label htmlFor="username" style={labelStyle}>Username:</label>
        <input type="email" id="email" value={username} onChange={e => setUsername(e.target.value)} style={inputStyle} required />
      </div>
      <div style={formGroupStyle}>
        <label htmlFor="password" style={labelStyle}>Password:</label>
        <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} style={inputStyle} required />
      </div>
      <button onClick={login} style={buttonStyle}>Login</button>
    </div>
  );
};

export default Login;