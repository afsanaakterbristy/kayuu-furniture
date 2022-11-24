import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Shareds/Footer';
import Navber from '../components/Shareds/Navber';

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;