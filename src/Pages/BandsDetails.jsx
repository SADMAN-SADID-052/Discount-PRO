import React from 'react';
import NavBar from '../Components/NavBar';
import { useActionData, useLoaderData } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const BandsDetails = () => {
    const data = useLoaderData();
    // console.log(data);
    return (
        <div>
           


           <div className='max-w-6xl mx-auto'>

           <header>
                <Header></Header>
                <NavBar></NavBar>
            </header>

            {/* <main>
              {
                data.brand_name
                
              }

              <p>{data.description}</p>
            </main> */}

           <main className="p-10 bg-gradient-to-r from-violet-200 to-red-300 rounded-3xl text-center mt-6 mb-4">
                    {

                        <div>


                            <p>
                                <img className='w-40 mx-auto' src={data.brand_logo} alt="" />
                            </p>

                            <p className='font-bold text-xl mt-3'>{data.brand_name}</p>

                            <p className='text-sm text-blue-500 mt-3 mb-3 font-semibold'>Category: {data.category}</p>

                            <p className='text-gray-600'>{data.description}</p>

                          

                            <p className='flex items-center gap-4 justify-center'>
                                
                                <p className='text-xl font-semibold text-slate-700'>Rating : {data.rating}</p>

                            <div className="rating rating-lg rating-half">
 
  <input type="radio" name="rating-10" className="mask mask-star-2  bg-purple-500" />
  <input type="radio" name="rating-10" className="mask mask-star-2  bg-purple-500" />
  <input type="radio" name="rating-10" className="mask mask-star-2  bg-purple-500" />
  <input type="radio" name="rating-10" className="mask mask-star-2  bg-purple-500" />
 
</div>


                            </p>

                            <button
                            
                            
                            onClick={() => window.open(data["shop-Link"], "_blank")}
                            className='btn btn-info text-white font-bold text-sm mt-6'>Shop Now</button>

     
                        </div>

                    
                    }
                    </main>
           </div>
        





            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default BandsDetails;