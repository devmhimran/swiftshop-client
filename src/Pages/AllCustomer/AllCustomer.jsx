import React, { useEffect, useState } from 'react';
import DashboardTitle from '../../Components/DashboardTitle/DashboardTitle';
import PageTitle from '../../Components/PageTitle/PageTitle';
import axios from 'axios';
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const AllCustomer = () => {
    const [customer, setCustomer] = useState([]);

    // useEffect(()=>{
    //     axios.get('')
    // },[])    
    return (
        <div>
            <DashboardTitle title='Customers' />
            <PageTitle title='Customers' />
            <div className='flex justify-end mb-2'>
                <Button><Link to='/dashboard/add-customer'>Add Customer</Link></Button>
            </div>
            <table class="table-auto w-full">
                <thead className='bg-gray-300'>
                    <tr>
                        <th className='text-left px-1'>Name</th>
                        <th className='text-left px-1'>Email</th>
                        <th className='text-left px-1'>Address</th>
                        <th className='text-left px-1'>Option</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {
                        products.map(product => <ProductTableRow key={product._id} product={product} />)
                    } */}
                </tbody>
            </table>
        </div>
    );
};

export default AllCustomer;