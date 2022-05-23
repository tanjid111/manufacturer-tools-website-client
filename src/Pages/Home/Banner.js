import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigate = useNavigate();
    return (
        <div class="carousel w-full">
            <div id="slide1" class="carousel-item relative w-full">
                <img src="https://i.ibb.co/G5G3Zmx/cordless.jpg" class="w-full" alt="" />
                <div class="hidden md:block absolute text-center w-full bottom-0 py-2">
                    <h5 class="text-3xl py-2 font-bold uppercase">Eliminates Cords!</h5>
                    <a class="btn btn-outline" href='https://www.milwaukeetool.com/Products/Equipment/MXF370-2XC'>Learn More</a>

                </div>
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" class="btn btn-circle">❮</a>
                    <a href="#slide2" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" class="carousel-item relative w-full">
                <img src="https://i.ibb.co/Jt2CtxH/handtools.jpg" class="w-full" alt='' />                <div class="hidden md:block absolute text-center  w-full bottom-0 py-2">
                    <h5 class="text-3xl py-2 font-bold">First slide label</h5>
                    <p className='text-xl'>Some representative placeholder content for the first slide.</p>
                </div>
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" class="btn btn-circle">❮</a>
                    <a href="#slide3" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" class="carousel-item relative w-full">
                <img src="https://i.ibb.co/LhbJgJZ/precision.jpg" class="w-full" alt='' />
                <div class="hidden md:block absolute text-center  w-full bottom-0 py-2">
                    <h5 class="text-3xl py-2 font-bold">First slide label</h5>
                    <p className='text-xl'>Some representative placeholder content for the first slide.</p>
                </div>
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" class="btn btn-circle">❮</a>
                    <a href="#slide4" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" class="carousel-item relative w-full align-top">
                <img src="https://i.ibb.co/VNJ2b7W/battery.jpg" alt='' class="w-full" />
                <div class="hidden md:block absolute text-center  w-full bottom-0 py-2">
                    <h5 class="text-3xl py-2 font-bold">First slide label</h5>
                    <p className='text-xl'>Some representative placeholder content for the first slide.</p>
                </div>
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" class="btn btn-circle">❮</a>
                    <a href="#slide1" class="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;