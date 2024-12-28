import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';


const AuthLayout = () => {
    return (
        <div>

            <header className='max-w-6xl mx-auto'>
               
                <NavBar></NavBar>
            </header>

            <Outlet></Outlet>
            
            <footer>
                <Footer></Footer>
            </footer>
            
        </div>
    );
};

export default AuthLayout;