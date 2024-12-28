import React from "react";
import { Link } from "react-router-dom";


function BrandCard({ brand }) {

  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col md:flex-row items-center justify-between gap-24 px-6">
   <div className="">
   <img
        src={brand.brand_logo}
        alt={`${brand.brand_name} logo`}
        className="w-24 h-24 object-cover rounded-full mb-4"
      />
      <h2 className="text-lg font-semibold">{brand.brand_name}</h2>
      <div className="flex items-center gap-2 text-orange-400 my-2">
        <span>⭐⭐⭐⭐</span>
        <span className="text-sm font-semibold">{brand.rating}</span>
      </div>
   </div>
    <div className="flex flex-col justify-center items-center space-y-6">
    <h2 className="text-lg font-semibold">{brand.brand_name}</h2>
    <p className="text-gray-600 text-center text-sm mb-4">{brand.description}</p>
      {brand.isSaleOn && (
        <div className="text-red-500 font-bold animate-bounce mb-2">
          Sale is On!
        </div>
      )}
      <Link to={`/brands/${brand._id}`}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        // onClick={() => window.open(brand["shop-Link"], "_blank")}
        
      >
        View Coupons
      </Link>
    </div>
    </div>
  );
}

export default BrandCard;
