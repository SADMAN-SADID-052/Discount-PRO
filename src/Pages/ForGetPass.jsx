import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../Components/FireBase/firebaseLogin';

const ForGetPass = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const [email,setEmail] = useState(location?.state?.email || "");
    const handleResetPassword = (e) =>
    {
        e.preventDefault();

        if(!email)
        {

            toast.error("Please enter your email!", { theme: "dark" });
            return;

        }

        sendPasswordResetEmail(auth,email)
        .then(()=> {
        
        toast.success("Password reset link sent to your email!", { theme: "dark" });
        // navigate("/")
        setTimeout(()=>{
            window.open("https://mail.google.com/", "_blank");

        },2000)
        

        .catch((error) => {
            toast.error("Error: " + error.message, { theme: "dark" });
          });

        })
    };


    return (
        <div className="min-h-screen flex justify-center items-center">
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <h2 className="text-2xl font-bold text-center mt-4">Reset Password</h2>
          <form onSubmit={(e) => handleResetPassword(e)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-control mt-3">
              <button className="btn btn-neutral">Send Reset Link</button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default ForGetPass;