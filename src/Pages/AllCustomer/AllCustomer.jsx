import React, { useEffect, useState } from 'react';
import DashboardTitle from '../../Components/DashboardTitle/DashboardTitle';
import PageTitle from '../../Components/PageTitle/PageTitle';
import axios from 'axios';
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import CustomerTableRow from '../../Components/CustomerTableRow/CustomerTableRow';

const AllCustomer = () => {
    const [customer, setCustomer] = useState([]);
    const url = 'https://swiftshop-server.vercel.app/customers'
    const headers = {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    };

    useEffect(()=>{
        axios.get(url, { headers })
        .then(res => setCustomer(res.data))
    },[])    
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
                        <th className='text-left px-1'>Option</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        customer.map(customer => <CustomerTableRow key={customer._id} customer={customer} />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllCustomer;