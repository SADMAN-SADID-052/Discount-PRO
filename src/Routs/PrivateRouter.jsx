import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingPage from '../Pages/LoadingPage';

const PrivateRouter = ({children}) => {

    const {user,loading} = useContext(AuthContext)
    const location = useLocation();
    console.log(location)
    if(loading )
    {
        return <LoadingPage></LoadingPage>
    }
    if(user  && user?.email)
    {
       return children;
    }

    return <Navigate state={location.pathname} to={'/auth/login'}></Navigate>
    return (
        <div>
            
        </div>
    );
};

export default PrivateRouter;