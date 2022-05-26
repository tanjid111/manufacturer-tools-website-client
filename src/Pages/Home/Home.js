import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Location from './Location';
import Products from './Products';
import Reviews from './Reviews';
import Subscribe from './Subscribe';
import Systems from './Systems';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Systems></Systems>
            <Products></Products>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <Location></Location>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;