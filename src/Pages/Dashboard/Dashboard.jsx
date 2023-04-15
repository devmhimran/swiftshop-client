import React from 'react';
import { Outlet } from 'react-router-dom'
import DashboardSidebar from '../../Components/DashbordSidebar/DashboardSidebar';

const Dashboard = () => {
    return (
        <div className='container max-w-screen-xl mx-auto lg:py-24 md:py-16 py-16 my-8'>
            <div className='grid grid-cols-5'>
                <div>
                    <DashboardSidebar />
                </div>
                <div className='col-span-4 p-6'>
                    <Outlet />
                </div>
            </div>
        </div >
    );
};

export default Dashboard;