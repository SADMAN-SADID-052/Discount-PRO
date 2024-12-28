import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {

    const { user} = useContext(AuthContext);
    return (
        <div className=''>

            {
                user &&

                <p className='border-2 text-center border-white p-2'>Hello 
                <span className='text-red-800 font-bold'> {user.displayName}</span>  !!! Welcome to <span className='text-blue-500'>Discount Pro</span></p>
            }


            
        </div>
    );
};

export default Header;