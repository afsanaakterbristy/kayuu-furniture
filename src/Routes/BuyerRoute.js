import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import Loading from '../components/Shareds/Loading';
import { AuthContext } from '../contexts/AuthProvider';
import useBuyer from '../Hooks/useBuyer';


const BuyerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isBuyer, isBuyerLoading] = useBuyer(user?.email);
    const location = useLocation();

    if (loading || isBuyerLoading) {
        return <Loading></Loading>
    }

    if (user && isBuyer) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default BuyerRoute;