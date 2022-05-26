import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigate = useNavigate();
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/G5G3Zmx/cordless.jpg" className="w-full" alt="" />
                <div className="hidden md:block absolute text-center w-full bottom-0 py-2">
                    <h5 className="text-3xl py-2 font-bold uppercase">Eliminates Cords!</h5>
                    <a className="btn btn-outline" href='https://www.milwaukeetool.com/Products/Equipment/MXF370-2XC'>Learn More</a>

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/Jt2CtxH/handtools.jpg" className="w-full" alt='' />
                <div className="hidden md:block absolute text-center  w-full bottom-0 py-2">
                    <h5 className="text-3xl py-2 font-bold text-white">Hassle  Free</h5>
                    <a className="btn btn-outline" href='https://www.milwaukeetool.com/Products/Equipment/MXF370-2XC'>Learn More</a>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/LhbJgJZ/precision.jpg" className="w-full" alt='' />
                <div className="hidden md:block absolute text-center  w-full bottom-0 py-2">
                    <h5 className="text-3xl py-2 font-bold text-white">Best product in the market</h5>
                    <a className="btn btn-outline" href='https://www.milwaukeetool.com/Products/Equipment/MXF370-2XC'>Learn More</a>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full align-top">
                <img src="https://i.ibb.co/VNJ2b7W/battery.jpg" alt='' className="w-full" />
                <div className="hidden md:block absolute text-center  w-full bottom-0 py-2">
                    <h5 className="text-3xl py-2 font-bold text-white">Long Lasting Battery</h5>
                    <a className="btn btn-outline" href='https://www.milwaukeetool.com/Products/Equipment/MXF370-2XC'>Learn More</a>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;