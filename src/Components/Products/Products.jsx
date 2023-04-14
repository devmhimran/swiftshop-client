import React from 'react';
import useProducts from '../../Hooks/useProducts';
import ProductCard from '../ProductCard/ProductCard';

const Products = ({handleCart}) => {
    const [products] = useProducts();
    return (
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 my-10'>
            {
                products.map(data => <ProductCard key={data.id} data={data} handleCart={handleCart} />)
            }
        </div>
    );
};

export default Products;