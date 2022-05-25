import React from 'react';
import { Map, Marker } from "pigeon-maps"

const Location = () => {
    return (
        <div className='my-5 w-5/6 mx-auto'>
            <h2 className='text-white text-4xl text-center my-5'>Our Locaiton</h2>
            <Map height={300} defaultCenter={[49.28369784251833, -123.11780158449442]} defaultZoom={11}>
                <Marker width={50} anchor={[49.28369784251833, -123.11780158449442]} />
            </Map>
        </div>
    );
};

export default Location;