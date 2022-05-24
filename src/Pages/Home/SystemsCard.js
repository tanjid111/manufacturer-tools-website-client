import React from 'react';

const SystemsCard = ({ cardTitle, link, bgImg, bodyImg }) => {
    return (
        <div className="card border border-white w-80 max-h-72 bg-base-100 shadow-xl image-full">
            <figure><img src={bgImg} alt="Shoes" /></figure>
            <div className="card-body">
                <div className='items-center justify-center text-center'>
                    <figure><img src={bodyImg} alt="Shoes" /></figure>
                    <p className='py-8 text-white font-bold text-2xl'>{cardTitle}</p>
                    <div className="card-actions justify-center">
                        <a href='link' className="btn btn-primary">LEARN MORE</a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SystemsCard;