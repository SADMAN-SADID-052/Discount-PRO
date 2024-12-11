import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';


import { use } from 'react';
import { toast } from 'react-toastify';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import auth from '../Components/FireBase/firebaseLogin';


const Register = () => {

  const navigate = useNavigate(); 

 const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () =>{

    signInWithPopup(auth,provider)

    .then((result) => {
      console.log(result)
      toast.success('Registration Successful!!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        
        });

        navigate('/');
      
    })

    .catch(error =>{

      console.log(error)
    })
  }
  
  const [success,setSuccess] = useState(false);
  const [errorMessage,setErrorMessage] = useState('');

  const {createNewUser,setUser} = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const name = e.target.name.value; 
    const email = e.target.email.value; 
    const photo = e.target.photo.value; 
    const password = e.target.password.value; 
  
    console.log(name,email,photo,password); 


    setErrorMessage('');
    setSuccess(false);

    if(password.length < 6)
    {
      setErrorMessage('Password Should be 6 Characters or longer');
      return;
    }

   

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).{6,}$/;

    if (!passwordRegex.test(password)) {
      setErrorMessage('Password must be at least 6 characters long, contain one uppercase letter, one lowercase letter, one number, and one special character.');
      return;
    }
    

  
    createNewUser(email,password)
    .then((result)=>{
      const user = result.user;
      setUser(user);
      console.log(user);
      toast.success('Registration Successful!!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        
        });
      
        navigate('/');
 

    })

    .catch((error) =>{

      // const errorCode = error.code;
      // const errorMessage = error.message;
       setErrorMessage(error.message)
       setSuccess(false);

    } )
  };
    return (
        <div className='min-h-screen flex justify-center items-center mt-8'>
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
{
  errorMessage && <p className='text-red-500  text-center'>{errorMessage}</p>
}



 <p className="text-center mb-3">Already have an account? <Link className="text-blue-500" to="/auth/login">Login</Link></p>

<div className='text-center mb-4'>
<button onClick={handleGoogleSignIn} className='btn btn-outline'>Log In With Google</button>
</div>
</div>
            
        </div>
    );
};

export default Register;