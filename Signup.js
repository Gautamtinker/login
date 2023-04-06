import React,{useState} from 'react'
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidPassword,setisValidPassword]=useState(true)
  const [isValidemail,setisValidemail]=useState(true)
  let navigate=useNavigate()
  const handleSubmit1 =()=>
  {
     navigate("/login");
  }
  function handchange(e) 
  {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{1,20}$/;
    const passwordInput = e.target.value;
  const isValidPassword = regex.test(passwordInput);
  
  if (isValidPassword) {
    
    setisValidPassword(true);
    setPassword(passwordInput);
    e.target.style.color = "green"; 
  } 
  else{
    e.target.style.color = "red"; 
    setisValidPassword(false)
  }
  }
 function setEmail1(e)
 {
  setEmail(e.target.value);
    const emailregex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const emailInput = e.target.value;
    const isValidemail = emailregex.test(emailInput);
    if(isValidemail)
    {
     
      setisValidemail(true);
      setEmail(emailInput);
      e.target.style.color="green"
    }
    else
    {
      e.target.style.color="red"
      setisValidemail(false)
    }
 }
const handleSubmit=async(e)=>{
  e.preventDefault();
  const data=await axios.post('http://localhost:3002/api/signup',{
    phone:e.target[1].value,
    email:e.target[2].value,
    password:e.target[3].value
    
  }).then((res)=>{
    alert('signed up');
    navigate('/Dashboard');
  }).catch((e)=>{
    console.log(e);
  })
}
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <label className='signup'>Signup</label>
        <input type="text" placeholder='Enter your Name' className='signupdetail' id="Name"/>
        <input type="text" placeholder='Enter your Phone_number' className='signupdetail' id="Phone_number"/>
        <input 
        type="text" 
        placeholder='Enter your email' 
        className= {`signupdetail ${isValidemail ? 'is-valid' : 'is-invalid'}`}
        onChange={(e)=>setEmail1(e)}
        id="email"
        />
       {!isValidemail && (
    <p style={{ border: '1px solid red', borderRadius: '5px', padding: '5px' }}>
      email is invalid.
    </p>)}
        <input 
        type="password" 
        placeholder='Enter your password' 
        className={`signupdetail ${isValidPassword ? 'is-valid' : 'is-invalid'}`}
        onChange={(e)=>handchange(e)} id="password"/>
         {!isValidPassword && (
    <p style={{ border: '1px solid red', borderRadius: '5px', padding: '5px' }}>
      Password is invalid.
    </p>)}
        <input type="submit" value="signup" className='button'/>
        <button className='button1' onClick={handleSubmit1}>Login</button>
      </form>
    
    </div>
  )
}
export default Signup;