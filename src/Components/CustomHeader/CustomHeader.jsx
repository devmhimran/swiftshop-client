import { Breadcrumbs } from '@material-tailwind/react';
import React from 'react';
import { Link } from 'react-router-dom'

const CustomHeader = ({ location, title }) => {
    const locationName = location.split("-").join(" ");
    const locationNameNew = locationName.split("/").join("");
    return (
        <div className='bg-[#B9E9FC]'>
            <div className='container max-w-screen-xl mx-auto lg:py-24 md:py-11 py-11'>
                <h1 className='text-5xl font-bold mb-3'>{title}</h1>
                <Breadcrumbs>
                    <Link to='/'>
                        Home
                    </Link>
                    <Link className='capitalize' to={location}>
                        {locationNameNew}
                    </Link>
                </Breadcrumbs>
            </div>
        </div>
    );
};

export default CustomHeader;