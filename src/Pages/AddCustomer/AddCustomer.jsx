import React from 'react';
import DashboardTitle from '../../Components/DashboardTitle/DashboardTitle';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import { Button, Input, Textarea } from '@material-tailwind/react';

const AddCustomer = () => {
    const url = 'http://localhost:5000/customer';
    const headers = {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    };
    const handleAddCustomer = (e) =>{
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        const address = e.target.phone.value;

        const customerData = {
            name,
            email,
            phone,
            address
        }
        
        axios.post(url, customerData, { headers })
            .then((response) => {
                toast.success('Successfully Uploaded!')
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        e.target.reset();
    }
    return (
        <div>
            <DashboardTitle title='Add Customer' />
            <div>
                <form onSubmit={handleAddCustomer}>
                    <div className='my-3'>
                        <Input label='Name' type='text' name='name' required />
                    </div>    
                    <div className='my-3'>
                        <Input label='Email' type='email' name='email' required />
                    </div>
                    <div className='my-3'>
                        <Input label='Phone' type='text' name='phone' required />
                    </div>
                    <div className='my-3'>
                        <Textarea label='Address' name='address' required />
                    </div>
                    <Button type='submit'>Publish</Button>
                </form>
            </div>
            <Toaster />
        </div>
    );
};

export default AddCustomer;