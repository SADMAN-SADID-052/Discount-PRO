import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext} from "../Provider/AuthProvider";

const NavBar = () => {

  const { user,logOut } = useContext(AuthContext);

    const links = 
    <>
  
  <Link to="/"> <div className='flex gap-2 items-center btn'> <img className='w-6' src="https://img.icons8.com/?size=96&id=12229&format=png" alt="" /><a>Home</a></div></Link>
  <Link className='' to="/brands"> <div className='flex gap-2 items-center btn ml-2'>
  <img className='w-6' src="https://img.icons8.com/?size=160&id=EzEuuTt46SR7&format=png" alt="" />
  <a>Brands</a>
    
    </div>
    
    </Link>
  <Link to="/about"> 
  
  <div className='flex gap-2 items-center btn ml-2'>
  <img className='w-6' src="https://img.icons8.com/?size=128&id=119030&format=png" alt="" />
  <a>About Us</a>
    
    </div>
  
  
  </Link>
  <Link to="/myProfile"> 
  
  
  <div className='flex gap-2 items-center btn ml-2'>

    
  <img className='w-6' src="https://img.icons8.com/?size=160&id=CPookyWndobk&format=png" alt="" />
  <a>My-Profile</a>
    
    </div>
  
  
  </Link>


 
    
    </>
    return (
        <div className='bg-gradient-to-r from-pink-200 to-cyan-300 rounded-lg'>

<div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {
          
          links
       }
      </ul>
    </div>
    <img className='w-16 flex items-center' src="https://cdn-icons-png.freepik.com/256/7097/7097082.png?ga=GA1.1.94081497.1723952170&semt=ais_hybrid" alt="" />
  </div>

  <div className=''>{user &&

    
  
<div className='flex gap-4 items-center'>

  <p className='btn btn-default'>{user.email}</p>
  
 

</div>

}


</div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {

        links

     }
    </ul>
  </div>

  
  <div className="navbar-end">

<div className='flex justify-between gap-5'>

<div className=''>{user &&

    
  
<div className='flex gap-4 items-center'>

  
  <img className='w-14 rounded-full border-2 border-white' src={user.photoURL} alt="" />
 

</div>

}


</div>
  

<div>

  
{
      user && user?.email ? (
      <button
        onClick={logOut}
        className='btn btn-error'>
          <div className='flex items-center ml-1'>
          
          <p className="font-bold text-white text-sm">Logout</p>
          
          </div>
          
          </button>): 

         (<Link to="/auth/login" className='flex items-center gap-2 btn btn-outline'><p className="font-bold text-white text-xl">Login</p><img className='w-7' src="https://img.icons8.com/?size=128&id=WLd2TDej6yWd&format=png" alt="" /></Link>

      )}

</div>
</div>


    
      </div>
   
   
</div>
            
        </div>
    );
};

export default NavBar;