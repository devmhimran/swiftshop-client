import React from 'react';
import heroImage from '../../assets/swiftshop-img-01.png'

const Hero = () => {
    return (
        <div className="hero__main container max-w-screen-xl mx-auto lg:py-24 md:py-16 py-16">
            <div className='grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-4 container mx-auto '>
                <div className='flex items-center'>
                    <h1 className='text-7xl font-extrabold leading-tight'>Shop the Latest <br /> Trends and Styles</h1>
                </div>
                <div>
                    <img className='' src={heroImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;