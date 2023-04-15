import React from 'react';
import { useNavigate } from 'react-router-dom'

const ProductTableRow = ({ product }) => {
    const { id, title, description, price, rating, brand, category, image } = product
    const navigate = useNavigate();
    return (
        <tr>
            <td className='py-2'><img className='w-8 h-10 object-cover' src={image} alt="" /></td>
            <td className='hover:underline cursor-pointer' onClick={()=>navigate(`/products/${id}`)}>{title.slice(0, 32)}...</td>
            <td>{category}</td>
            <td>${price}</td>
            <td>Edit | Delete</td>
        </tr>
    );
};

export default ProductTableRow;