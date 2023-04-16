import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Tooltip,
    IconButton,
} from "@material-tailwind/react";
import { AiFillStar } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom'


const ProductCard = ({ data }) => {
    const { _id, title, description, price, rating, brand, category, image } = data
    const navigate = useNavigate()
    return (
        <Card className="w-full max-w-[26rem] shadow-lg">
            <CardHeader floated={false} color="blue-gray" className='shadow-none'>
                <img
                    src={image}
                    alt={title}
                    className='w-full h-44 lg:h-56 object-cover'
                />
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
            </CardHeader>

            <CardBody className='px-4 pt-4 pb-0'>

                <div className="mb-3 flex items-center justify-between">
                    <Typography variant="h5" color="blue-gray" className="font-medium">
                        {title.slice(0, 34)}...
                    </Typography>
                    <Typography
                        color="blue-gray"
                        className="flex items-center gap-1.5 font-normal"
                    >
                    </Typography>
                </div>

                <Typography color="blue-gray" variant="paragraph">
                    Category: <span className='font-bold capitalize text-base'>{category}</span>
                </Typography>
                <div className='flex justify-between my-2'>
                    <Typography color="blue-gray" variant="paragraph">
                        <span className='font-bold capitalize text-xl my-2'>${price}</span>
                    </Typography>

                    <div className="rating flex items-center">
                        <span className='text-[#FBC02D] mr-1'><AiFillStar /></span>
                        {rating.rate} ({rating.count})
                    </div>
                </div>
            </CardBody>

            <CardFooter className="p-3">
                <Button onClick={() => navigate(`/products/${_id}`)} size="lg" fullWidth={true}>
                    View Detail
                </Button>
            </CardFooter>
        </Card>
    );
};

export default ProductCard;