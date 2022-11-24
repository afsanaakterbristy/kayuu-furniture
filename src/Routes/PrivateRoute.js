import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { loading, user } = useContext(AuthContext);
    const location = useLocation()
    if (loading) {
        return <div className='flex justify-center items-center min-h-[60vh]'><div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-purple-800 dark:border-purple-300"></div></div>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
  
};

export default PrivateRoute;