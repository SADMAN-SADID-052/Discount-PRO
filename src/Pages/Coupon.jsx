import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

const Coupon = () => {
    const cdata = useLoaderData(); // Assuming cdata is the brand data with coupons

    const handleCopySuccess = () => {
        toast.success("Coupon code copied successfully!");
    };

    return (
        
        <div className="max-w-6xl mx-auto p-6">

            <header className='mb-10'>
            <NavBar></NavBar>
            </header>

            {/* Brand Header */}
            <div className="text-center mb-10">
                <img
                    src={cdata.brand_logo}
                    alt={`${cdata.brand_name} Logo`}
                    className="w-20 h-20 mx-auto rounded-full"
                />
                <h1 className="text-2xl font-bold mt-4">{cdata.brand_name}</h1>
                <p className="text-gray-600 mt-2">Rating: ⭐ {cdata.rating}</p>
            </div>

            {/* Coupons Grid */}
            <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cdata.coupons.map((coupon, index) => (
                    <div
                        key={index}
                        className="border border-gray-200 rounded-lg p-6 shadow hover:shadow-lg transition"
                    >
                        {/* Coupon Code */}
                        <h3 className="text-xl font-semibold mb-2">{coupon["coupon-code"]}</h3>

                        {/* Coupon Description */}
                        <p className="text-red-600 mb-4 font-bold">{coupon.description}</p>
                        
                        {/* Expiry Date */}
                        <p className="text-sm text-gray-500">
                            <strong>Expires:</strong> {coupon["expiry-date"]}
                        </p>
                        
                        {/* Conditions */}
                        <p className="text-sm text-gray-500 mb-4">
                            <strong>Condition:</strong> {coupon.condition}
                        </p>

                        {/* Buttons */}
                        <div className="flex justify-between mt-4">
                            {/* Copy Button */}
                            <CopyToClipboard text={coupon["coupon-code"]} onCopy={handleCopySuccess}>
                                <button className=" text-white btn btn-neutral font-bold text-xl hover:bg-red-400">
                                    Copy Code
                                </button>
                            </CopyToClipboard>

                            {/* Use Now Button */}
                            <button
                                onClick={() => window.open(cdata["shop-Link"], "_blank")}
                                className="btn btn-primary font-bold"
                            >
                                Use Now
                            </button>
                        </div>
                    </div>
                ))}
            </main>

            <footer className='mt-8'>

                <Footer></Footer>
            </footer>

            {/* Toast Notification */}
            <ToastContainer />
        </div>
    );
};

export default Coupon;
