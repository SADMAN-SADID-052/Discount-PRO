import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from 'react-toastify';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../Components/FireBase/firebaseLogin";


const Login = () => {

  const navigate = useNavigate(); 

  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () =>{

    signInWithPopup(auth,provider)
    .then((result)=>{
      // console.log(result.user)
      toast.success('LoggedIn Successfully!!', {
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

      toast.error('LogIn Not Successful!!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        
        });
    })
  }



  const{userLogin,setUser} = useContext(AuthContext)

  const location = useLocation();
 
  // console.log(location)

const handleSubmit =(e)=>
{

  e.preventDefault();

  const email = e.target.email.value;
  const password = e.target.password.value;
  // console.log(email,password);

  userLogin(email,password)
  .then(result =>{
 
    const user = result.user;
    setUser(user);

    toast.success('Successfully LoggedIn!!', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      
      });

      navigate(location?.state ? location.state : "/");

  })


  .catch((error) =>{

    alert(error.code)
  });

}
    return (
        <div className="min-h-screen flex justify-center items-center">

<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

      <h2 className="text-2xl font-bold text-center mt-4">LogIn Your Account</h2>
      <form 
      onSubmit={handleSubmit}
      className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
           
           name="email"
           type="email" 
           placeholder="email" 
           className="input input-bordered" 
           required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input 
          name = "password"
          type="password" 
          placeholder="password" 
          className="input input-bordered" 
          required />

    
          <label className="label">
            <Link to="/forgot-password"

            // state={{email: e.target.email?.value}}
            
            className="label-text-alt link link-hover text-blue-500">Forgot password?</Link>
          </label>
        </div>
        <div className="form-control mt-3">
          <button className="btn btn-neutral">Login</button>
        </div>
      </form>
       
<div className='text-center mb-4'>
<button onClick={handleGoogleSignIn} className='btn btn-outline'>Log In With Google</button>
</div>

      <p className="text-center mb-3">New User? <Link className="text-blue-500" to="/auth/register">Register</Link></p>
    </div>
            
        </div>
    );
};

export default Login;