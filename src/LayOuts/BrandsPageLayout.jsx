import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import BrandsPage from '../Pages/BrandsPage';

const BrandsPageLayout = () => {
    return (
        <div className='max-w-6xl mx-auto mt-2'>
            <header>

                <NavBar></NavBar>

            </header>
            <main>
                <BrandsPage></BrandsPage>
            </main>
            
        </div>
    );
};

export default BrandsPageLayout;