import React from 'react';
import NavBar from '../Components/NavBar';
import Header from '../Components/Header';

const About = () => {
    return (
        <div>

            <header>
                <Header></Header>
                <NavBar></NavBar>
            </header>

            <main className=''>
                <div className=' text-purple-600 text-xl md:text-5xl p-36 text-center font-bold'>
                    Welcome To About Page
                </div>
            </main>


            
        </div>
    );
};

export default About;