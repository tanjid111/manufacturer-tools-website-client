import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Products from './Products';
import Reviews from './Reviews';
import Systems from './Systems';

const Home = () => {
    return (
        <div>
            <Banner className='z-0'></Banner>
            <Systems></Systems>
            <Products></Products>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;