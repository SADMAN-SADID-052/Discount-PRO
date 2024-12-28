import React from 'react';
import NavBar from '../Components/NavBar';
import { Outlet } from 'react-router-dom';
import Slider from '../Components/Slider';
import TopBrands from '../Components/TopBrands';
import Footer from '../Components/Footer';
import OnSell from '../Components/OnSell';
import How_it_work from '../Components/How_it_work';
import Success_story from '../Components/Success_story';
import Header from '../Components/Header';

const HomeLayout = () => {
    return (
        <div >
            
         <div className='max-w-6xl mx-auto'>
         <nav>

                <Header></Header>
                <NavBar></NavBar>
            </nav>

            <header>

                <Slider></Slider>
                <TopBrands></TopBrands>

             
            </header>
            <main>
                <section>
                    <OnSell></OnSell>
                </section>

                <section>
                
                  <How_it_work></How_it_work>
                </section>

                <Success_story></Success_story>

                <section>

                </section>
                <Outlet></Outlet>
            </main>
         </div>
            <footer>

                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;