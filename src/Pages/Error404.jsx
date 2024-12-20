import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import { useNavigate } from 'react-router-dom';

const Error404 = () => {
    
    const navigate = useNavigate();
    const handleBack = () =>{
    navigate("/")
   
    }
    return (
        <div>

            <header className='max-w-6xl mx-auto'> 
                <NavBar></NavBar>
            </header>

            <main>
            <div className="flex flex-col items-center justify-center min-h-screen ">
      <h1 className="text-8xl font-extrabold text-purple-700">
        Oops!
      </h1>
      <p className="text-2xl font-semibold text-gray-800 mt-4">
        404 - PAGE NOT FOUND
      </p>
      <p className="text-center text-gray-600 mt-2">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <button
        className="btn btn-primary mt-6"
        onClick={handleBack}>
        GO TO HOMEPAGE
      </button>
    </div>
            </main>

            <footer>

                <Footer></Footer>
            </footer>
            
        </div>
    );
};

export default Error404;