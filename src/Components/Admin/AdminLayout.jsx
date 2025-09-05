import React from 'react'
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import AdminSidebar from './AdminSidebar';
import AdminHomePage from '../../Pages/AdminHomePage';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }
    return (
        <div className='min-h-screen flex flex-col md:flex-row relative'>
            {/* Mobile toogle Button */}
            <div className='flex md:hidden p-4 bg-gray-900 text-white'>
                <button onClick={toggleSidebar} >
                    <FaBars size={24} />
                </button>
                <h1 className='ml-4 text-xl font-medium'>Admin Dashboard</h1>


            </div>
            {/* Mobile overlay sidebar */}
            <div>
                {isSidebarOpen && (
                    <div className='fixed inset-0 bg-gray-800 bg-opacity-50 z-50 md:hidden' onClick={toggleSidebar}>

                    </div>


                )}
                {/* sidebar */}
                <div className={`bg-gray-900 text-white w-64 min-h-screen fixed top-0 left-0 transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:block z-50`}>
                    {/* sideBar Component */}
                    <AdminSidebar />

                </div>
            </div>
                  <main className='flex-1 p-6'>
        <Outlet />
      </main>

        </div>
    )
}

export default AdminLayout
