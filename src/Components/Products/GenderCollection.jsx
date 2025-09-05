import React from 'react'
import womenCollection from '../../assets/womens-collection.webp'
import menCollection from '../../assets/mens-collection.webp'
import { Link } from 'react-router-dom'

const GenderCollection = () => {
    return (
        <section className='py-16 px-4 lg:px-0'>
            <div className='container  mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 md:p-10 '>
                <div className='relative flex-1'>
                    <img src={womenCollection} alt="women's collection" className='w-full h-[700px] object-cover' />
                    <div className='absolute bottom-8 left-8 font-semibold bold bg-opacity-90 hover:pointer  text-gray-950 bg-white px-4 py-2 rounded'>

                    <h2 className='text-2xl font-bold'>
                        Women's Collection
                    </h2>
                    <Link to='/collection/all?gender=women' className ="text-gray-900 underline">shop now</Link>
                    </div>
                </div>
                <div className='relative flex-1'>
                    <img src={menCollection} alt="women's collection" className='w-full h-[700px] object-cover' />
                    <div className='absolute bottom-8 left-8 font-semibold bold bg-opacity-90 hover:pointer  text-gray-950 bg-white px-4 py-2 rounded'>

                    <h2 className='text-2xl font-bold'>
                        Men's Collection
                    </h2>
                    <Link to='/collection/all?gender=women' className ="text-gray-900 underline">shop now</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GenderCollection
