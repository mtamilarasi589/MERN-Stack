import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Login() {
    const [email,setEmail]=useState();
    const [pwd,setPwd]=useState();
    const navigate=useNavigate();

    const handleSubmit=(event)=>{
      event.preventDefault();
      axios.post('http://localhost:3000/login',{email,pwd})
      .then(result=>{
        console.log(result)
       if(result.data==="Success") {
        navigate('/dashboard')
       }})
      .catch(err=>console.log(err))
      
}
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
        <div className='bg-white w-25'>
            <h2>Login</h2>
 <form onSubmit={handleSubmit}>
    
    <div className="mb-3">
        <label htmlFor="email">
            <strong>Email:</strong>
        </label>
       
    <input type="email" className="form-control rounded-0" name="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
    </div>
    <div className="mb-3">
        <label htmlFor="password">
            <strong>Password:</strong>
        </label>
    <input type="password" className="form-control rounded-0" name="password" placeholder="password" value={pwd} onChange={(e)=>setPwd(e.target.value)}/>
    </div>
    <div>
    <Link to="/dashboard" className='btn btn-primary border w-100 rounded-0'>
        Login</Link>
    </div>
    
</form>
<p>Create New Account</p>
<div>
    <Link to="/register" className='btn btn-primary border w-100 rounded-0'>
        Sign Up</Link>
</div>

</div>
</div>
  )
}

export default Login