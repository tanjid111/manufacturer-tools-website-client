import React from 'react';
import Banner from './Banner';
import Products from './Products';
import Systems from './Systems';

const Home = () => {
    return (
        <div>
            <Banner className='z-0'></Banner>
            <Systems></Systems>
            <Products></Products>
        </div>
    );
};

export default Home;