import React from 'react';

const DashboardTitle = ({title}) => {
    return (
        <div className='mb-4'>
            <h1 className='text-3xl font-bold'>{title}</h1>
            <hr />
        </div>
    );
};

export default DashboardTitle;