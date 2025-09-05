import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineUser } from 'react-icons/hi';
import { HiOutlineShoppingBag, HiBars3BottomRight } from 'react-icons/hi2';
import SearchBar from '../Common/SearchBar';
import CartDrawer from './CartDrawer';
import { IoMdAdd } from 'react-icons/io';


const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const [navDrawerOpen, setNavDrawerOpen] = React.useState(false);

    const toggleNavDrawer = () => {
        setNavDrawerOpen(!navDrawerOpen);
    }



    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <>
            <nav className='container flex mx-auto justify-between items-center px-3 py-4'>
                <div className='text-black'>
                    <Link to='/' className='text-2xl font-medium px-10'>
                        Rabbit
                    </Link>
                </div>
                <div className='hidden md:flex space-x-6 items-center'>
                    <Link to='/collections/all' className='text-gray-700 text-sm font-medium uppercase hover:text-black'>
                        men
                    </Link>
                    <Link to='#' className='text-gray-700 text-sm font-medium uppercase hover:text-black'>
                        women
                    </Link>
                    <Link to='#' className='text-gray-700 text-sm font-medium uppercase hover:text-black'>
                        top wear
                    </Link>
                    <Link to='#' className='text-gray-700 text-sm font-medium uppercase hover:text-black'>
                        bottom wear
                    </Link>
                </div>
                <div className='flex space-x-4 items-center px-10'>
                    <Link to='admin' className='block text-white bg-black p-1 rounded text-sm '>Admin</Link>
                    <Link to='/login'>
                        <HiOutlineUser className='w-6 h-6 text-gray-700 hover:text-black' />
                    </Link>
                    <button onClick={toggleDrawer} className='relative'>
                        <HiOutlineShoppingBag className='w-6 h-6 text-gray-700 hover:text-black' />
                        <span className='absolute -top-1 bg-rabbit-red text-white text-xs rounded-full px-2 py-0.5'>
                            4
                        </span>
                    </button>

                    <div className='overflow-hidden'>
                        <SearchBar />
                    </div>

                    <button onClick={toggleNavDrawer} className='md:hidden'>
                        <HiBars3BottomRight className='w-6 h-6 text-gray-700 hover:text-black' />
                    </button>
                </div>
            </nav>
            <CartDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />

            <div className={`fixed top-0 left-0 w-3/4 sm:1/2 md:w-1/3 bg-white h-full shadow-lg transition-transform duration-300 z-50 sm:w-full ${navDrawerOpen ? 'translate-x-0' : '-translate-x-full'
                } flex flex-col`}>
                <IoMdAdd
                    className="w-6 h-6 text-gray-700 hover:text-black absolute top-4 right-4 cursor-pointer rotate-45"
                    onClick={toggleNavDrawer}
                />


                <div className='p-4'>
                    <h2 className='font-semibold'>Menu </h2>
                    <nav className='space-y-4 mt-4'>
                        <Link to="/collections/all" onClick={toggleNavDrawer} className='block text-gray-600 hover:text-black'>Men</Link>
                    </nav>
                    <nav className='space-y-4'>
                        <Link to="/collection/women" onClick={toggleNavDrawer} className='block text-gray-600 hover:text-black'>Women</Link>
                    </nav>
                    <nav className='space-y-4'>
                        <Link to="/collection/topwear" onClick={toggleNavDrawer} className='block text-gray-600 hover:text-black'>Top Wear</Link>
                    </nav>
                    <nav className='space-y-4'>
                        <Link to="/collection/bottomwear" onClick={toggleNavDrawer} className='block text-gray-600 hover:text-black'>Bottom Wear</Link>
                    </nav>
                </div>

            </div>
        </>
    );
};

export default Navbar;
