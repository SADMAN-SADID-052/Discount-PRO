import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { use } from 'react';

const Register = () => {


  const {createNewUser} = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const name = e.target.name.value; 
    const email = e.target.email.value; 
    const photo = e.target.photo.value; 
    const password = e.target.password.value; 
  
    console.log(name,email,photo,password); 

    createNewUser(email,password)
    .then((result)=>{
      const user = result.user;
      console.log(user);

    })

    .catch((error) =>{

      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorCode,errorMessage);
    } )
  };
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

<h2 className="text-2xl font-bold text-center mt-4">Register Your Account</h2>
<form onSubmit={handleSubmit} className="card-body">
  
<div className="form-control">
    <label className="label">
      <span className="label-text">Name</span>
    </label>
    <input
    
    name = "name"
    type="name" 
    placeholder="Enter Your Name" 
    className="input input-bordered" 
    required />
  </div>

  <div className="form-control">
    <label className="label">
      <span className="label-text">Email</span>
    </label>
    <input
     type="email" 
     name = "email"
     placeholder="email" 
     className="input input-bordered" 
     required />
  </div>
  {/* For Photo  */}
  <div className="form-control">
    <label className="label">
      <span className="label-text">Photo URL</span>
    </label>
    <input 
    type="photo"
    name = "photo"
     placeholder="Photo URL" 
     className="input input-bordered" 
     required />
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text">Password</span>
    </label>
    <input 
    type="password" 
    name = "password"
    placeholder="password" 
    className="input input-bordered" 
    required />
   
  </div>
  <div className="form-control mt-3">
    <button className="btn btn-neutral">Register</button>
  </div>
</form>

 <p className="text-center mb-3">Already have an account? <Link className="text-blue-500" to="/auth/login">Login</Link></p>
</div>
            
        </div>
    );
};

export default Register;