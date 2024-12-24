import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

const UpdateProfile = () => {
    const { user, updateUserProfile } = useContext(AuthContext); 
    const navigate = useNavigate();

    // State to manage form data
    const [formData, setFormData] = useState({
        photoURL: user?.photoURL || '',
        displayName: user?.displayName || '',
    });

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

  
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
         
            await updateUserProfile(formData.displayName, formData.photoURL);

            
            navigate('/myProfile');
        } catch (error) {
            console.error('Failed to update profile:', error);
        }
    };

    return (
      <div>

        <header className='max-w-6xl mx-auto'>
            <NavBar></NavBar>
        </header>

<div className="max-w-lg mx-auto mt-10 p-6 border rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">Update Profile</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                
                <div>
                    <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700">
                        Photo URL
                    </label>
                    <input
                        type="url"
                        
                        id="photoURL"
                        name="photoURL"
                        value={formData.photoURL}
                        onChange={handleChange}
                        placeholder="Enter photo URL"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
                        required
                    />
                </div>

                {/* Name Input */}
                <div>
                    <label htmlFor="displayName" className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        id="displayName"
                        name="displayName"
                        value={formData.displayName}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
                        required
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                >
                    Update Information
                </button>
            </form>
        </div>

        <footer className='mt-4'>

            <Footer></Footer>
        </footer>

      </div>
    );
};

export default UpdateProfile;
