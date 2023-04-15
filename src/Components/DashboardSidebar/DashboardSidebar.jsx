import React from 'react';
import { Link } from 'react-router-dom'

const DashboardSidebar = () => {
    return (
        <div className='shadow rounded-md py-16 h-full flex justify-center'>
            <div>
                <div className='py-2 hover:underline text-lg'>
                    <Link to='/dashboard/'>
                        All Products
                    </Link>
                    <hr />
                </div>
                <div className='py-2 hover:underline text-lg'>
                    <Link to='/dashboard/customers'>
                        Customers
                    </Link>
                    <hr />
                </div>
                <div className='py-2 hover:underline text-lg'>
                    <Link to='/dashboard/orders'>
                        Orders
                    </Link>
                    <hr />
                </div>
            </div>
        </div>
    );
};

export default DashboardSidebar;