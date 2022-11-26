import React from 'react';
import Categorys from './Categorys';
import Choice from './Choice';
import Discount from './Discount';
import Header from './Header';
import Items from './Items';

const Home = () => {
    return (
        <div>
            <Header></Header>
             <Items></Items>
            <Categorys></Categorys>
            <Discount></Discount>
            <Choice></Choice>
           
            
        </div>
    );
};

export default Home;