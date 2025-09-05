import React, { useState, useEffect, useRef } from 'react'
import { FaFilter } from 'react-icons/fa'
import Filtersidebar from '../Components/Products/Filtersidebar'
import ProductGrid from '../Components/Products/ProductGrid'
import SortOption from '../Components/Products/SortOption'

const CollectionPage = () => {
    const [products, setProducts] = useState([])
    const sideBarRef = useRef(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toogleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);

    };
    const handleClickOutside = (e) => {
        if (sideBarRef.current && !sideBarRef.current.contains(e.target)) {
            setIsSidebarOpen(false);
        }

    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return ()=>{
            document.removeEventListener('mousedown', handleClickOutside);

        }

    })


    useEffect(() => {
        setTimeout(() => {
            const fetchProduct = [
                {
                    _id: 1,
                    name: 'stylish jacket',
                    price: 1200,
                    image: [
                        {
                            url: 'https://picsum.photos/500/500?random=1',
                            alt: 'Stylish Jacket'
                        }
                    ]
                },
                {
                    _id: 2,
                    name: 'stylish jacket',
                    price: 1200,
                    image: [
                        {
                            url: 'https://picsum.photos/500/500?random=2',
                            alt: 'Stylish Jacket'
                        }
                    ]
                },
                {
                    _id: 3,
                    name: 'stylish jacket',
                    price: 1200,
                    image: [
                        {
                            url: 'https://picsum.photos/500/500?random=3',
                            alt: 'Stylish Jacket'
                        }
                    ]
                },
                {
                    _id: 4,
                    name: 'stylish jacket',
                    price: 1200,
                    image: [
                        {
                            url: 'https://picsum.photos/500/500?random=4',
                            alt: 'Stylish Jacket'
                        }
                    ]
                },
                {
                    _id: 5,
                    name: 'stylish jacket',
                    price: 1200,
                    image: [
                        {
                            url: 'https://picsum.photos/500/500?random=5',
                            alt: 'Stylish Jacket'
                        }
                    ]
                },
                {
                    _id: 6,
                    name: 'stylish jacket',
                    price: 1200,
                    image: [
                        {
                            url: 'https://picsum.photos/500/500?random=6',
                            alt: 'Stylish Jacket'
                        }
                    ]
                },
                {
                    _id: 7,
                    name: 'stylish jacket',
                    price: 1200,
                    image: [
                        {
                            url: 'https://picsum.photos/500/500?random=7',
                            alt: 'Stylish Jacket'
                        }
                    ]
                },
                {
                    _id: 8,
                    name: 'stylish jacket',
                    price: 1200,
                    image: [
                        {
                            url: 'https://picsum.photos/500/500?random=8',
                            alt: 'Stylish Jacket'
                        }
                    ]
                }
            ]
            setProducts(fetchProduct)
        }, 1000)
    }, [])

    return (
        <div className='flex flex-col lg:flex-row'>
            {/* mobile filter button */}
            <button onClick={toogleSidebar} className='lg:hidden border p-2 flex justify-center items-center'>
                <FaFilter className='mr-2' />  filter
            </button>

            {/* {filter sidebar} */}
            <div ref={sideBarRef} className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed top-0 left-0 w-64 bg-white h-full transition-transform duration-300 z-50 lg:translate-x-0 lg:static`}>

                <Filtersidebar />
            </div>

            {/* catogary  */}

            <div className='flex-grow-4'>
                <h2 className='text-2xl uppercase mb-4 py-4 px-4'>All Collections</h2>
                <SortOption />
            <ProductGrid products={products} />
            </div>


        </div>
    )
}

export default CollectionPage
