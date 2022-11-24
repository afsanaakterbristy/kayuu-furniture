import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../components/Shareds/Navber';

const DashboardLayout = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default DashboardLayout;