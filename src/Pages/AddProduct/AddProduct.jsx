import React, { useState } from 'react';
import DashboardTitle from '../../Components/DashboardTitle/DashboardTitle';
import { Input, Option, Select, Textarea, Button } from '@material-tailwind/react';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';

const AddProduct = () => {
    const [category, setCategory] = useState('');
    const url = 'http://localhost:5000/product';
    const headers = {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    };

    const handleCategoryChange = (c) => {
        setCategory(c);
    };

    const handleAddProduct = async (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;
        const image = e.target.image.value;
        const price = e.target.price.value;
        const rating = e.target.rating.value;
        const count = e.target.count.value;

        const uploadProduct = {
            title,
            price,
            description,
            category,
            image,
            rating: {
                rating,
                count,
            },
        };

        axios.post(url, uploadProduct, { headers })
            .then((response) => {
                toast.success('Successfully Uploaded!')
            })
            .catch((error) => {
                console.log(error);
            });
        e.target.reset();
    };

    return (
        <div>
            <DashboardTitle title='Add Product' />
            <div>
                <form onSubmit={handleAddProduct}>
                    <div className='my-3'>
                        <Input label='Title' type='text' name='title' required />
                    </div>
                    <div className='my-3'>
                        <Textarea label='Description' name='description' required />
                    </div>
                    <div className='my-3'>
                        <Input label='Image' type='text' name='image' required />
                    </div>
                    <div className='my-5'>
                        <Select label='Select Category' value={category} onChange={handleCategoryChange} name='category' required>
                            <Option value='electronics' className='capitalize'>
                                electronics
                            </Option>
                            <Option value='jewelry' className='capitalize'>
                                jewelry
                            </Option>
                            <Option value="men's clothing" className='capitalize'>
                                men's clothing
                            </Option>
                            <Option value="women's clothing" className='capitalize'>
                                women's clothing
                            </Option>
                        </Select>
                    </div>
                    <div className='my-3'>
                        <Input label='Price' type='number' name='price' required />
                    </div>
                    <div className='my-3'>
                        <Input label='Rating' type='number' name='rating' required />
                    </div>
                    <div className='my-3'>
                        <Input label='Count' type='number' name='count' required />
                    </div>
                    <Button type='submit'>Publish</Button>
                </form>
            </div>
            <Toaster />
        </div>
    );
};

export default AddProduct;