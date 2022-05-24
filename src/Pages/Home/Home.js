import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Footer from './Footer';
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
            <Footer></Footer>
        </div>
    );
};

export default Home;