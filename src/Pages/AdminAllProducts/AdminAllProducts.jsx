import React from 'react';
import useProducts from '../../Hooks/useProducts';
import ProductTableRow from '../../Components/ProductTableRow/ProductTableRow';
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import DashboardTitle from '../../Components/DashboardTitle/DashboardTitle';
import PageTitle from '../../Components/PageTitle/PageTitle';

const AdminAllProducts = () => {
    const [products] = useProducts();
    return (
        <div>
            <DashboardTitle title='All Products' />
            <PageTitle title='All Products' />
            <div className='flex justify-end mb-2'>
                <Button><Link to='/dashboard/add-product'>Add Product</Link></Button>
            </div>
            <table class="table-auto w-full">
                <thead className='bg-gray-300'>
                    <tr>
                        <th className='text-left px-1'>Image</th>
                        <th className='text-left px-1'>Name</th>
                        <th className='text-left px-1'>Category</th>
                        <th className='text-left px-1'>Price</th>
                        <th className='text-left px-1'>Option</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => <ProductTableRow key={product._id} product={product} />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AdminAllProducts;