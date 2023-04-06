import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css';

import axios from 'axios';
function Login() {
  let navigate=useNavigate();
  function handleSubmit()
  {
   navigate("/signup");
  }
  const handle=async(e)=>{
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    e.preventDefault();
    console.log(email.toString(),password.toString());
    
    await axios.post('http://localhost:3002/api/login',{
      email:email.toString(),
      password:password.toString()
    }).then((response)=>{
      console.log(response.data)
      alert('login up');
      navigate("/Dashboard");
      // alert('login up');
    }).catch((e)=>{
      alert('email and password didnt match')
      console.log(e);
    })
  }
  return (
   
    <div className='LOGINUP'>
      <form onSubmit={(e)=>handle(e)}>
        <label className='Login1'>Login</label>
        <input 
        type="text" 
        id="email"
        placeholder='Enter your email' 
        className= "loginupdetail"
        />
        <input 
        type="password"
        id="password" 
        placeholder='Enter your password' 
        className= "loginupdetail"
       />
        <input type="submit" value="login" className='button'/>
        <button className='button1' onClick={handleSubmit}>Signup</button>
      </form>
    
    </div>
  )
}

export default Login