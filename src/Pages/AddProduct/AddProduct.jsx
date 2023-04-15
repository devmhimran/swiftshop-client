import React from 'react';
import DashboardTitle from '../../Components/DashboardTitle/DashboardTitle';
import { Input, Option, Select, Textarea, Button } from '@material-tailwind/react';

const AddProduct = () => {
    return (
        <div>
            <DashboardTitle title='Add Product' />
            <div>
                <form>
                    <div className='my-3'>
                        <Input label="Title" type='text' />
                    </div>
                    <div className='my-3'>
                        <Textarea label="Description" />
                    </div>
                    <div className='my-3'>
                        <Input label="Image" type='text' />
                    </div>
                    <div className='my-5'>
                        <Select label="Select Version">
                            <Option className='capitalize'>men's clothing</Option>
                            <Option className='capitalize'>jewelery</Option>
                            <Option className='capitalize'>electronics</Option>
                            <Option className='capitalize'>women's clothing	</Option>
                            <Option>Material Tailwind Svelte</Option>
                        </Select>
                    </div>
                    <div className='my-3'>
                        <Input label="Price" type='number' />
                    </div>
                    <div className='my-3'>
                        <Input label="Rating" type='number' />
                    </div>
                    <div className='my-3'>
                        <Input label="Count" type='number' />
                    </div>
                    <Button>Publish</Button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;