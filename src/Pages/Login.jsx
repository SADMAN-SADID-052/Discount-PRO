import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">

<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

      <h2 className="text-2xl font-bold text-center mt-4">LogIn Your Account</h2>
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover text-blue-500">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-3">
          <button className="btn btn-neutral">Login</button>
        </div>
      </form>

      <p className="text-center mb-3">New User? <Link className="text-blue-500" to="/auth/register">Register</Link></p>
    </div>
            
        </div>
    );
};

export default Login;