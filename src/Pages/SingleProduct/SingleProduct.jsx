import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom'
import CustomHeader from '../../Components/CustomHeader/CustomHeader';
import { Button } from '@material-tailwind/react';
import { AiFillStar } from 'react-icons/ai';
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import PageTitle from '../../Components/PageTitle/PageTitle';

const SingleProduct = () => {
    const { id } = useParams()
    const [product, setProduct] = useState([]);
    const { title, description, price, rating, brand, category, image } = product
    useEffect(() => {
        axios.get(`https://swiftshop-server.vercel.app/product/${id}`)
            .then(res => setProduct(res.data))
    }, [id])

    const data = [
        {
            label: "Description",
            value: "Description",
            desc: `It really matters and then like it really doesn't matter.
          What matters is the people who are sparked by it. And the people 
          who are like offended by it, it doesn't matter.`,
        },
        {
            label: "Review",
            value: "Review",
            desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
        },
    ];

    return (
        <div className='single__product '>
            <PageTitle title={`${title}`} />
            <div className='container max-w-screen-xl mx-auto lg:py-24 md:py-16 py-16 my-10'>
                <div className='border rounded px-1 lg:p-8  grid grid-cols-1 lg:grid-cols-2 gap-4 '>
                    <div>
                        <img className='w-10/12' src={image} alt="" />
                    </div>
                    <div>
                        <h1 className='font-bold text-3xl leading-snug'>{title}</h1>
                        <p className='flex items-center mr-2'>Rating:  <span className='text-[#FBC02D] ml-2 mr-1'><AiFillStar /></span>
                            {rating?.rate} ({rating?.count})</p>
                        <p className='text-gray-700 my-8 text-lg'>{description}</p>
                        <p className='capitalize text-xl'>Category: {category}</p>
                        <div className="add__to__cart my-5 flex gap-3">
                            <input className='border px-2.5 rounded py-2 w-16' type="number" name="" defaultValue='0' />
                            <Button size="md">Add To Cart</Button>
                        </div>
                    </div>
                </div>
                <div className="data__tabs py-12">
                    <h1 className='text-4xl font-bold mb-6'>Additional Information</h1>
                    <Tabs value="html">
                        <TabsHeader>
                            <Tab value={'Description'}>
                                {'Description'}
                            </Tab>
                            <Tab value={'Review'}>
                                {'Review'}
                            </Tab>
                        </TabsHeader>
                        <TabsBody>
                            <TabPanel value={'Description'}>
                                {description}
                            </TabPanel>
                            <TabPanel value={'Review'}>
                                <p>This section in under develop</p>
                            </TabPanel>
                        </TabsBody>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;