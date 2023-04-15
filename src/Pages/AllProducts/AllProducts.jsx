import React from 'react';
import Products from '../../Components/Products/Products';
import CustomHeader from '../../Components/CustomHeader/CustomHeader';
import { useLocation } from 'react-router-dom'
import PageTitle from '../../Components/PageTitle/PageTitle';

const AllProducts = () => {
    const location = useLocation();

    return (
        <div className='all__products '>
            <PageTitle title='Products' />
            <CustomHeader location={location.pathname} title='Products' />
            <div className="container max-w-screen-xl mx-auto lg:py-24 md:py-16 py-16">
                <Products />
            </div>
        </div>
    );
};

export default AllProducts;