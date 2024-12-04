import React from 'react';
import NavBar from '../Components/NavBar';
import { Outlet } from 'react-router-dom';
import Slider from '../Components/Slider';

const HomeLayout = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            
            <nav>
                <NavBar></NavBar>
            </nav>

            <header>

                <Slider></Slider>

             
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer></footer>
        </div>
    );
};

export default HomeLayout;