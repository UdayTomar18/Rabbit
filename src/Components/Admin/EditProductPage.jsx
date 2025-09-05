import React, { useState } from 'react'

const EditProductPage = () => {
    const [productData, setProductData] = useState({
        name: '',
        description: '',
        price: 0,
        countInStock: 0,
        sku: '',
        category: '',
        brand: '',
        size: '',
        colors: [],
        collection: '',
        materials: '',
        gender: '',
        Images: [
            { url: 'https://picsum.photos/150?random=1' },
            { url: 'https://picsum.photos/150?random=2' },
        ],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Product updated!');
        console.log(productData)
    };

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        console.log(file);
    };

    return (
        <div className='max-w-5xl mx-auto p-6 shadow-md rounded-md'>
            <h2 className='text-3xl font-bold mb-6'>Edit Products</h2>
            <form onSubmit={handleSubmit} className='space-y-6'>
                {/* Product Name */}
                <div className='mb-6'>
                    <label className='block font-semibold mb-2'>Product Name</label>
                    <input
                        type="text"
                        name="name"
                        value={productData.name}
                        onChange={handleChange}
                        className='w-full border border-gray-300 rounded-md p-2'
                        required
                    />
                </div>
                {/* Description */}
                <div className='mb-6'>
                    <label className='block font-semibold mb-2'>Description</label>
                    <textarea
                        name="description"
                        value={productData.description}
                        onChange={handleChange}
                        className='w-full border border-gray-300 rounded-md p-2'
                        rows="4"
                        required
                    ></textarea>
                </div>
                {/* Price */}
                <div className='mb-6'>
                    <label className='block font-semibold mb-2'>Price</label>
                    <input
                        type="number"
                        name="price"
                        value={productData.price}
                        onChange={handleChange}
                        className='w-full border border-gray-300 rounded-md p-2'
                        required
                    />
                </div>
                {/* Count In Stock */}
                <div className='mb-6'>
                    <label className='block font-semibold mb-2'>Count In Stock</label>
                    <input
                        type="number"
                        name="countInStock"
                        value={productData.countInStock}
                        onChange={handleChange}
                        className='w-full border border-gray-300 rounded-md p-2'
                        required
                    />
                </div>
                {/* SKU */}
                <div className='mb-6'>
                    <label className='block font-semibold mb-2'>SKU</label>
                    <input
                        type="text"
                        name="sku"
                        value={productData.sku}
                        onChange={handleChange}
                        className='w-full border border-gray-300 rounded-md p-2'
                    />
                </div>
                {/* Size */}
                <div className='mb-6'>
                    <label className='block font-semibold mb-2'>Size (comma-separated)</label>
                    <input
                        type="text"
                        name="size"
                        value={Array.isArray(productData.size) ? productData.size.join(', ') : productData.size}
                        onChange={(e) =>
                            setProductData({
                                ...productData,
                                size: e.target.value.split(',').map((size) => size.trim()),
                            })
                        }
                        className='w-full border border-gray-300 rounded-md p-2'
                    />
                </div>
                {/* Colors */}
                <div className='mb-6'>
                    <label className='block font-semibold mb-2'>Colors (comma-separated)</label>
                    <input
                        type="text"
                        name="colors"
                        value={Array.isArray(productData.colors) ? productData.colors.join(', ') : productData.colors}
                        onChange={(e) =>
                            setProductData({
                                ...productData,
                                colors: e.target.value.split(',').map((color) => color.trim()),
                            })
                        }
                        className='w-full border border-gray-300 rounded-md p-2'
                    />
                </div>
                {/* Image upload */}
                <div className='mb-6'>
                    <label className='block font-semibold mb-2'>Upload Image</label>
                    <input type="file" onChange={handleImageUpload} />
                    <div className='flex gap-4 mt-4 '>
                        {productData.Images.map((image, index) => (
                            <div key={index} className='w-24 h-24 object-cover rounded-lg shadow-md'>
                                <img src={image.url} alt={image.altText ? image.altText : "product Image"} />
                            </div>
                        ))}
                    </div>
                </div>
                <button
                    type='submit'
                    className='w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors'
                >
                    Update Product
                </button>
            </form>
        </div>
    )
}

export default EditProductPage
