import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='w-1/2 mx-auto my-10  text-white'>
            <h2 className='text-center text-4xl font-bold my-5'>My Portfolio</h2>
            <h2 className='my-5 text-lg'>Name: Syed Tanjid Hossain</h2>
            <p className='my-5 text-lg'>Email: tanjidhossain@gmail.com</p>
            <p className='my-5 text-lg'>Education: MASc in Mechanical Engineering</p>
            <p className='my-5 text-lg'>Skills: HTML5, CSS3, JS6, ReactJS, NodeJS, Tailwind, BootStrap, Firebase Authentication</p>
            <br />
            <br />
            <h2 className='my-5 text-xl font-bold'>Projects - Click on the Title</h2>
            <li><a href="https://manufacturer-tools.web.app/">Manufacturer Tools</a></li>
            <li><a href="https://laptop-inventory-management.web.app/">Laptop Inventory Management</a></li>
            <li><a href="https://realtor-website-af121.web.app/">Realtor Website</a></li>
        </div>
    );
};

export default MyPortfolio;