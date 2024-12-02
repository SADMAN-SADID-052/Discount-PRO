import React from 'react';
import NavBar from '../Components/NavBar';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            
            <nav>
                <NavBar></NavBar>
            </nav>

            <header>
             
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer></footer>
        </div>
    );
};

export default HomeLayout;