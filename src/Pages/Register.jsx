import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

<h2 className="text-2xl font-bold text-center mt-4">Register Your Account</h2>
<form className="card-body">
  
<div className="form-control">
    <label className="label">
      <span className="label-text">Name</span>
    </label>
    <input type="name" placeholder="Enter Your Name" className="input input-bordered" required />
  </div>

  <div className="form-control">
    <label className="label">
      <span className="label-text">Email</span>
    </label>
    <input type="email" placeholder="email" className="input input-bordered" required />
  </div>
  {/* For Photo  */}
  <div className="form-control">
    <label className="label">
      <span className="label-text">Photo URL</span>
    </label>
    <input type="photo" placeholder="Photo URL" className="input input-bordered" required />
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text">Password</span>
    </label>
    <input type="password" placeholder="password" className="input input-bordered" required />
   
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