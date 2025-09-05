import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Filtersidebar = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [Filter, setFilter] = useState({
        category: '',
        priceRange: [0, 10000],
        color: '',
        gender: '',
        size: [],
        material: [],
        brand: [],
        minPrice: 0,
        maxPrice: 10000,
        rating: 0,
    })
    const [priceRange, setPriceRange] = useState([0, 10000])

    const gender = ['Men', 'Women']
    const category = ['Topwears', 'Bottomwears']
    const colors = ['Red', 'Blue', 'Black', 'White', 'Yellow', 'Gray', 'Pink', 'Beige', 'Navy', 'Green']
    const sizes = ['S', 'M', 'L', 'XL']
    const material = ['Cotton', 'Wool', 'Denim', 'Polyster', 'Silk', 'Linen', 'Fleech', 'Viscose']
    const brands = ['Urban Threads', 'Morden Fits', 'Street Styles', 'Beach Breeze', 'Fashioninsta', 'ChicStyle']

    useEffect(() => {
        const params = {}
        if (Filter.category) params.category = Filter.category
        if (Filter.gender) params.gender = Filter.gender
        if (Filter.color) params.color = Filter.color
        if (Filter.size.length) params.size = Filter.size.join(',')
        if (Filter.material.length) params.material = Filter.material.join(',')
        if (Filter.brand.length) params.brand = Filter.brand.join(',')
        if (Filter.maxPrice !== 10000) params.maxPrice = Filter.maxPrice
        setSearchParams(params)
    }, [Filter, setSearchParams])

    useEffect(() => {
        const params = Object.fromEntries([...searchParams])
        setFilter({
            category: params.category || "",
            color: params.color || "",
            gender: params.gender || "",
            size: params.size ? params.size.split(',') : [],
            material: params.material ? params.material.split(',') : [],
            brand: params.brand ? params.brand.split(',') : [],
            minPrice: params.minPrice || 0,
            maxPrice: params.maxPrice ? Number(params.maxPrice) : 10000,
        })
        setPriceRange([0, params.maxPrice ? Number(params.maxPrice) : 10000])
    }, [searchParams])

    const handleCheckboxChange = (name, value) => {
        const current = Filter[name]
        const updated = current.includes(value)
            ? current.filter((item) => item !== value)
            : [...current, value]
        setFilter({ ...Filter, [name]: updated })
    }

    return (
        <div className='p-4'>
            <h2 className='text-xl font-medium text-gray-800 mb-4'>Filter</h2>

            {/* Category */}
            <div className='mb-6'>
                <label className='block text-gray-600 mb-2 font-medium'>Category</label>
                {category.map((cat) => (
                    <div key={cat} className='flex items-center mb-1'>
                        <input
                            type="radio"
                            name="category"
                            value={cat}
                            checked={Filter.category === cat}
                            onChange={() => setFilter({ ...Filter, category: cat })}
                            className='mr-2 h-4 w-4 text-blue-500 accent-blue-500 focus:ring-blue-400 border-gray-300'
                        />
                        <span className='text-gray-800'>{cat}</span>
                    </div>
                ))}
            </div>

            {/* Gender */}
            <div className='mb-6'>
                <label className='block text-gray-600 mb-2 font-medium'>Gender</label>
                {gender.map((g) => (
                    <div key={g} className='flex items-center mb-1'>
                        <input
                            type="radio"
                            name="gender"
                            value={g}
                            checked={Filter.gender === g}
                            onChange={() => setFilter({ ...Filter, gender: g })}
                            className='mr-2 h-4 w-4 text-blue-500 accent-blue-500 focus:ring-blue-400 border-gray-300'
                        />
                        <span className='text-gray-800'>{g}</span>
                    </div>
                ))}
            </div>

            {/* Color */}
            <div className='mb-6'>
                <label className='block text-gray-600 mb-2 font-medium'>Color</label>
                <div className='flex flex-wrap gap-2'>
                    {colors.map((color) => (
                        <button
                            key={color}
                            className={`h-8 w-8 rounded-full border ${Filter.color === color ? 'ring-2 ring-blue-500' : ''} border-gray-300 cursor-pointer transition hover:scale-110`}
                            style={{ backgroundColor: color.toLowerCase() }}
                            onClick={() => setFilter({ ...Filter, color })}
                            aria-label={color}
                        />
                    ))}
                </div>
            </div>

            {/* Size */}
            <div className='mb-6'>
                <label className='block text-gray-600 mb-2 font-medium'>Size</label>
                {sizes.map((size) => (
                    <div key={size} className='flex items-center mb-1'>
                        <input
                            type="checkbox"
                            name="size"
                            checked={Filter.size.includes(size)}
                            onChange={() => handleCheckboxChange('size', size)}
                            className='mr-2 h-4 w-4 text-blue-500 accent-blue-500 focus:ring-blue-400 border-gray-300'
                        />
                        <span className='text-gray-700'>{size}</span>
                    </div>
                ))}
            </div>

            {/* Material */}
            <div className='mb-6'>
                <label className='block text-gray-600 mb-2 font-medium'>Material</label>
                {material.map((mat) => (
                    <div key={mat} className='flex items-center mb-1'>
                        <input
                            type="checkbox"
                            name="material"
                            checked={Filter.material.includes(mat)}
                            onChange={() => handleCheckboxChange('material', mat)}
                            className='mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 accent-blue-500 border-gray-300'
                        />
                        <span className='text-gray-700'>{mat}</span>
                    </div>
                ))}
            </div>

            {/* Brand */}
            <div className='mb-6'>
                <label className='block text-gray-600 mb-2 font-medium'>Brand</label>
                {brands.map((brand) => (
                    <div key={brand} className='flex items-center mb-1'>
                        <input
                            type="checkbox"
                            name="brand"
                            checked={Filter.brand.includes(brand)}
                            onChange={() => handleCheckboxChange('brand', brand)}
                            className='mr-2 h-4 w-4 text-blue-500 accent-blue-500 focus:ring-blue-400 border-gray-300'
                        />
                        <span className='text-gray-700'>{brand}</span>
                    </div>
                ))}
            </div>

            {/* Price Range (Single Slider for Max Price) */}
            <div className='mb-6'>
                <label className='block text-gray-600 mb-2 font-medium'>Max Price: ₹{Filter.maxPrice}</label>
                <input
                    type="range"
                    min="0"
                    max="10000"
                    step="100"
                    value={Filter.maxPrice}
                    onChange={(e) =>
                        setFilter({ ...Filter, maxPrice: Number(e.target.value) })
                    }
                    className='w-full accent-blue-500'
                />
            </div>
        </div>
    )
}

export default Filtersidebar