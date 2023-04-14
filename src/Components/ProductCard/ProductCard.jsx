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


const ProductCard = ({data}) => {
    const {id, title, description, price, rating, brand, category, thumbnail} = data
    return (
        <Card className="w-full max-w-[26rem] shadow-lg">
      <CardHeader floated={false} color="blue-gray">
        <img
          src={thumbnail}
          alt={title}
          className='w-full h-64 object-cover'
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        <IconButton
          size="sm"
          color="red"
          variant="text"
          className="!absolute top-4 right-4 rounded-full"
        >
          
        </IconButton>
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-medium">
            Wooden House, Florida
          </Typography>
          <Typography
            color="blue-gray"
            className="flex items-center gap-1.5 font-normal"
          >
            
            5.0
          </Typography>
        </div>
        <Typography color="gray">
          Enter a freshly updated and thoughtfully furnished peaceful home
          surrounded by ancient trees, stone walls, and open meadows.
        </Typography>

      </CardBody>
      <CardFooter className="pt-3">
        <Button size="lg" fullWidth={true}>
          Reserve
        </Button>
      </CardFooter>
    </Card>
    );
};

export default ProductCard;