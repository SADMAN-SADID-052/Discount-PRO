import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

const MyProfile = () => {

    const {user} = useContext(AuthContext)
    return (
        <div>

<div className='max-w-6xl mx-auto'>

  
<header>
  <NavBar></NavBar>
</header>


<section>
<div
  className="hero mt-2 rounded-2xl"
  style={{
    backgroundImage: "url(https://img.freepik.com/free-photo/top-view-assortment-tropical-leaves-with-copy-space_23-2148606401.jpg?ga=GA1.1.94081497.1723952170&semt=ais_hybrid)",
  }}>
  <div className="hero-overlay bg-opacity-10 rounded-2xl"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-black">WELCOME TO</h1>
      <p className="mt-10 text-gray-700 text-4xl font-bold mb-10">
        {user.displayName}!!!
      </p>
      
    </div>
  </div>
</div>
</section>

{user &&
  
//   <div className='max-w-3xl mx-auto '>
//      <h2>{user.displayName}</h2>
//     <p className='btn btn-default'>{user.email}</p>
//     <img className='w-14 rounded-full border-2 border-white' src={user.photoURL} alt="" />
   

//   </div>

<div className="card bg-base-100 w-96 shadow-xl mx-auto mt-4 mb-4">
  

  <figure className="px-10 pt-10">
    <img
      src={user.photoURL}
      alt="Shoes"
      className="rounded-xl border-2 border-black w-40" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{user.displayName}</h2>
    <p>Email : {user.email}</p>
    <Link
    to="/update-profile"
    className="card-actions">
      <button className="btn btn-primary font-bold mt-6">Update</button>
    </Link>
  </div>
</div>
}

</div>

<footer>
    <Footer></Footer>
</footer>
        </div>
    );
};

export default MyProfile;