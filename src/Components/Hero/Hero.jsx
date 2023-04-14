import React from 'react';
import heroImage from '../../assets/swiftshop-img-01.png'

const Hero = () => {
    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-4 container mx-auto '>
            <div className='flex items-center'>
                <h1 className='text-6xl font-bold leading-snug'>Get Your Dream <br /> Phone Today</h1>
            </div>
            <div>
                <img className='' src={heroImage} alt="" />
            </div>
        </div>
    );
};

export default Hero;