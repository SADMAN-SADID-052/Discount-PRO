import React, { useEffect, useState } from "react";

const OnSell = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("allData.json")
      .then((res) => res.json())
      .then((data) => {
        const onSaleBrands = data.filter((brand) => brand.isSaleOn === true);
        setBrands(onSaleBrands);
      });
  }, []);

  return (
  <div className="mt-6">

       <h2 className="text-2xl font-bold text-center mb-4">Brands on Sell</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 bg-gradient-to-r from-blue-200 via-gray-50 to-green-100">
      {brands.map((brand) => (
        <div
          key={brand._id}
          className="border border-gray-400  shadow-lg p-6 rounded-xl"
        >
          <img
            src={brand.brand_logo}
            alt={brand.brand_name}
            className="w-20 h-20 mx-auto object-contain mb-4"
          />
          <h2 className="text-xl font-bold text-center">{brand.brand_name}</h2>
          <p className="text-center text-gray-500">
            Category: {brand.category}
          </p>
          <p className="text-center text-gray-700">
            Total Coupons: {brand.coupons.length}
          </p>
          <div className="mt-4 text-center">
            <a
              href={brand.shop_Link}
              className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Shop Now
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default OnSell;
