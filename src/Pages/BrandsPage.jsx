import React, { useState, useEffect } from "react";
import BrandCard from "../Components/BrandCard";

function BrandsPage() {
  const [brands, setBrands] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    fetch('allData.json')
      .then((response) => response.json())
      .then((data) => setBrands(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const filteredBrands = brands.filter((brand) =>
    brand.brand_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-6">All Brands</h1>
      <input
        type="text"
        placeholder="Search brands..."
        className="w-full p-3 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="grid gap-6 ">
        {filteredBrands.map((brand) => (
          <BrandCard key={brand._id} brand={brand} />
        ))}
      </div>
    </div>
  );
}

export default BrandsPage;
