import React from 'react';
import SystemsCard from './SystemsCard';

const Systems = () => {
    return (
        <div>
            <h1 className='text-center text-3xl font-bold text-white my-5'>Explore our Systems</h1>
            <div className='my-5 grid grid-cols-1 lg:grid-cols-3 gap-5 justify-items-center'>
                <SystemsCard cardTitle="PORTABLE PRODUCTIVITY" link="https://www.milwaukeetool.com/Innovations/M12" bgImg="https://i.ibb.co/4sfqmyN/m12.webp" bodyImg="https://i.ibb.co/x6NRhyr/m12-logo.png"></SystemsCard>

                <SystemsCard cardTitle="PERFORMANCE DRIVEN" link="https://www.milwaukeetool.com/Innovations/M18" bgImg="https://i.ibb.co/8DZDyqt/m18.webp" bodyImg="https://i.ibb.co/6D5FzdN/m18-logo.png"></SystemsCard>

                <SystemsCard cardTitle="EQUIPMENT REDEFINED" link="https://www.milwaukeetool.com/Innovations/MX-FUEL" bgImg="https://i.ibb.co/bPj1DLN/mx.webp" bodyImg="https://i.ibb.co/0n9RtPn/MXF-Logo-w.png"></SystemsCard>
            </div>
        </div>
    );
};

export default Systems;