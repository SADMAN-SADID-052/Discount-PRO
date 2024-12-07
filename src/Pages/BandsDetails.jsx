import React from 'react';
import NavBar from '../Components/NavBar';
import { useActionData, useLoaderData } from 'react-router-dom';
import Footer from '../Components/Footer';

const BandsDetails = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <header>
                <NavBar></NavBar>
            </header>

            <main>
              {
                data.brand_name
                
              }

              <p>{data.description}</p>
            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default BandsDetails;