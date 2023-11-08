import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [username,setUsername]=useState();
    const [email,setEmail]=useState();
    const [pwd,setPwd]=useState();
  const navigate=useNavigate();
const handleSubmit=(event)=>{
event.preventDefault();
axios.post('http://localhost:3000/register',{username,email,pwd})
.then(result=>console.log(result))
.catch(err=>console.log(err))
navigate('/login')
}
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Register</h2>
 <form onSubmit={handleSubmit}>
    <div className="mb-3">
        <label htmlFor="name">
            <strong>Name:</strong>
        </label>
    <input type="text" className="form-control rounded-0" name="username" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
     
    </div>
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
    <input type="submit" value="Register" className="btn btn-primary w-100 rounded-0"/>
    </div>
    
</form>
<p>Already have an Account</p>
<div>
    <Link to="/login" className='btn btn-primary border w-100 rounded-0'>
        Login</Link>
</div>

</div>
</div>



  )
}

export default Signup