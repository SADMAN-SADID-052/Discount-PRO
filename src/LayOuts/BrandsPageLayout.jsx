import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import BrandsPage from '../Pages/BrandsPage';
import Footer from '../Components/Footer';

const BrandsPageLayout = () => {
    return (
        <div >
          <div className='max-w-6xl mx-auto mt-2'>
          <header>

         <NavBar></NavBar>

         </header>
         <main>
         <BrandsPage></BrandsPage>
         </main>
          </div>

          <footer>
            <Footer></Footer>
          </footer>
            
        </div>
    );
};

export default BrandsPageLayout;