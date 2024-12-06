import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar';

const AuthLayout = () => {
    return (
        <div>

            <header>
                <NavBar></NavBar>
            </header>

            <Outlet></Outlet>
            
        </div>
    );
};

export default AuthLayout;