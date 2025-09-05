import React from 'react'
import heroImage from '../../assets/rabbit-hero.webp';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='relative'>
      <img src={heroImage} alt="rabbit" className='w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover' />
      <div className='absolute inset-0 flex justify-center items-center bg-black bg-opacity-5'>
        <div className='text-center text-white'>
          <h1 className='text-4xl md:text-9xl font-bold tracking-tighter mb-4 uppercase'>Vication  <br /> Ready</h1>
          <p className='text-sm md:text-lg tracking-tighter mb-6'>Explore our viction-ready outfit with fast and worldwide sipping</p>
          <Link to='#' className='text-gray-950 bg-white px-6 py-2 rounded-md hover:text-white hover:bg-gray-950 hover:border-gray-900 transition-all duration-300'>Shop now
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero 
