import React from 'react'
import { IoLogoInstagram } from 'react-icons/io';
import { RiTwitterXLine } from 'react-icons/ri';
import { TbBrandMeta } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { FiPhoneCall } from 'react-icons/fi';
const Footer = () => {
  return (
    <footer className='py-12 border-t'>
        <div className= 'container grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0 mx-auto'>
            <div className='px-8'>

            <h3 className='text-lg text-gray-700 font-semibold  mb-4'>
                Newsletter
            </h3>
            <p className='text-gray-500 text-sm mb-4'>
                Be the first to hear about new products,exclusive events and online offers.
            </p>
            <p className='text-black text-sm mb-4'>
                Sign up and get 10% off your first order.
            </p>

            <form action="" className="flex flex-col sm:flex-row gap-2 sm:gap-0 w-full max-w-xs">
                <input
                    type="email"
                    placeholder="Enter your E-mail"
                    className="border border-gray-300 p-3 h-auto w-full sm:w-40 rounded sm:rounded-l text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
                />
                <button
                    type="submit"
                    className="bg-black text-white text-sm px-6 py-3 rounded sm:rounded-r-md sm:rounded-l-none hover:bg-gray-800 transition-all w-full sm:w-auto"
                >
                    Subscribe
                </button>
            </form>
            </div>

            <div className='px-8'>
                <h3 className='text-lg text-gray-700 mb-4 font-semibold'>Shop</h3>
                <ul>
                    <li className='space-y-2 text-gray-500'>
                        <Link to='#' className='text-sm hover:text-black transition-colors'>Men's Top wear</Link>
                    </li>
                    <li className='space-y-2 text-gray-500'>
                        <Link to='#' className='text-sm hover:text-black transition-colors'>Men's Bottom wear</Link>
                    </li>
                    <li className='space-y-2 text-gray-500'>
                        <Link to='#' className='text-sm hover:text-black transition-colors'>women's Top wear</Link>
                    </li>
                    <li className='space-y-2 text-gray-500'>
                        <Link to='#' className='text-sm hover:text-black transition-colors'>Women's Bottom wear</Link>
                    </li>
                </ul>
            </div>

            <div className='px-8'>
                <h3 className='text-lg text-gray-700 mb-4 font-semibold'>Support</h3>
                <ul>
                    <li className='space-y-2 text-gray-500'>
                        <Link to='#' className='text-sm hover:text-black transition-colors'>Contact us</Link>
                    </li>
                    <li className='space-y-2 text-gray-500'>
                        <Link to='#' className='text-sm hover:text-black transition-colors'>About us</Link>
                    </li>
                    <li className='space-y-2 text-gray-500'>
                        <Link to='#' className='text-sm hover:text-black transition-colors'>FAQs</Link>
                    </li>
                    <li className='space-y-2 text-gray-500'>
                        <Link to='#' className='text-sm hover:text-black transition-colors'>Features</Link>
                    </li>
                </ul>
            </div>

            <div className='px-8'>
                <h3 className='text-lg text-gray-700 mb-4 font-semibold'>Follow us</h3>
                <div className='flex items-center space-x-3' >
                <a href="www.facebook.com" className='text-gray-700 hover:text-black transition-colors text-2xl'>
                    <TbBrandMeta/>
                </a>
                <a href="www.facebook.com" className='text-gray-700 hover:text-black transition-colors text-2xl'>
                    <IoLogoInstagram/>
                </a>
                <a href="www.facebook.com" className='text-gray-700 hover:text-black transition-colors text-2xl'>
                    <RiTwitterXLine/>
                </a>
                </div>
                <p className='text-gray-600 mt-4 font-semibold '>Call us</p>
                <p className='py-2'>
                    <FiPhoneCall className='inline-block mr-2 text-gray-600' />
                    @123-456-789</p>
            </div>
        </div>
        <div className='container mx-auto text-center mt-12 lg:px-0 border-t pt-6'>
            <p className='text-gray-500 text-sm tracking-tighter text-center'>© 2025 All Rights Reserved</p>

        </div>
    </footer>
  )
}

export default Footer
