import React from 'react';
import DashboardTitle from '../../Components/DashboardTitle/DashboardTitle';
import { Input, Option, Select, Textarea, Button } from '@material-tailwind/react';

const AddProduct = () => {
    const handleAddProduct = (e) =>{
        e.preventDefault()
        const title = e.target.title.value
        const description = e.target.description.value
        const image = e.target.image.value
        const category = e.target.category.value
        const price = e.target.price.value
        const rating = e.target.price.value
        const count = e.target.price.value
    }
    return (
        <div>
            <DashboardTitle title='Add Product' />
            <div>
                <form onSubmit={handleAddProduct}>
                    <div className='my-3'>
                        <Input label="Title" type='text' name='title' required/>
                    </div>
                    <div className='my-3'>
                        <Textarea label="Description"  name='description' required/>
                    </div>
                    <div className='my-3'>
                        <Input label="Image" type='text' name='image' required/>
                    </div>
                    <div className='my-5'>
                        <Select label="Select Version" name='category' required>
                            <Option className='capitalize'>men's clothing</Option>
                            <Option className='capitalize'>jewelery</Option>
                            <Option className='capitalize'>electronics</Option>
                            <Option className='capitalize'>women's clothing	</Option>
                            <Option>Material Tailwind Svelte</Option>
                        </Select>
                    </div>
                    <div className='my-3'>
                        <Input label="Price" type='number' name='price' required/>
                    </div>
                    <div className='my-3'>
                        <Input label="Rating" type='number' name='rating' required/>
                    </div>
                    <div className='my-3'>
                        <Input label="Count" type='number' name='count' required/>
                    </div>
                    <Button>Publish</Button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;