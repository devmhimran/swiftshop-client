import React from 'react';
import Hero from '../../Components/Hero/Hero';
import Products from '../../Components/Products/Products';

const Home = () => {
    return (
        <div className=''>
            <Hero />
            <div className="product__section container max-w-screen-xl mx-auto lg:py-24 md:py-16 py-16">
                <h1 className='text-4xl font-bold text-center'>Out Products</h1>
                <Products />
            </div>
        </div>
    );
};

export default Home;