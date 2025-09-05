import React from 'react'
import { Link } from 'react-router-dom'
import featured from '../../assets/featured.webp'

const FeaturedCollection = () => {
  return (
    <section className="py-16 px-4 md:px-12 lg:px-24 mt-10">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center bg-green-50 rounded-3xl overflow-hidden ">
        <div className="lg:w-1/2 p-8 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <h2 className="text-gray-700 text-lg mb-2 tracking-wide uppercase font-semibold">Comfort & Style</h2>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">Apparel made for everyday life</h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            Discover high quality, comfortable clothing that effortlessly blends fashion and function. Designed to make you look and feel great every day.
          </p>
          <Link
            to="/collection/all"
            className="bg-black text-white font-semibold px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 "
          >
            Shop now
          </Link>
        </div>
        <div className="lg:w-1/2">
          <img
            src={featured}
            alt="Featured collection"
            className="w-full h-80 lg:h-full object-cover lg:rounded-tr-3xl lg:rounded-br-3xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

export default FeaturedCollection
