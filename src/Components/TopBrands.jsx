import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { Link, useNavigate } from 'react-router-dom';

const BrandMarquee = () => {
  const [coupons, setCoupons] = useState([]);
  const navigate = useNavigate();

  // Fetch the JSON data
  useEffect(() => {
    fetch('allData.json')
      .then((response) => response.json())
      .then((data) => setCoupons(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  
  const handleLogoClick = (id) => {
    navigate(`/brand/${id}`); 
  };

  return (
    <div className="p-10 bg-gray-100 rounded-2xl mt-2">
      <h2 className="text-center text-2xl font-bold mb-4">Top Brands</h2>
      <Marquee
        pauseOnHover
        gradient={false}
        speed={50}
        className=" border-gray-300"
      >
        {coupons.map((coupon) => (
          <div
            key={coupon._id}
            className="flex items-center justify-center mx-6 cursor-pointer"
            onClick={() => handleLogoClick(coupon._id)}
          >
           <div className='bg-slate-200 rounded-2xl p-7'>

           
           <img
              src={coupon.brand_logo}
              alt={coupon.brand_name}
              className="w-16 mx-auto object-contain rounded-full border-2 border-gray-300 p-2"
            />
           
           

            <div className='text-center'>
            <p className='text-xl font-semibold mt-2'>{coupon.brand_name}</p>
            <p className='text-slate-500'>Category : {coupon.category}</p>
            </div>
           </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default BrandMarquee;
