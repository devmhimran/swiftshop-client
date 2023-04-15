import React from 'react';
import { Outlet } from 'react-router-dom'
import DashboardSidebar from '../../Components/DashboardSidebar/DashboardSidebar';
import PageTitle from '../../Components/PageTitle/PageTitle';

const Dashboard = () => {
    return (
        <div className='container max-w-screen-xl mx-auto my-12 h-[90vh]'>
            <PageTitle title='Dashboard' />
            <div className='grid grid-cols-5'>
                <div>
                    <DashboardSidebar />
                </div>
                <div className='col-span-4 p-6 h-[80vh] overflow-y-scroll'>
                    <Outlet />
                </div>
            </div>
        </div >
    );
};

export default Dashboard;