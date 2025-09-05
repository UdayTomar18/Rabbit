import React from 'react'
import { Link } from 'react-router-dom';

const ProductMangement = () => {
    const products=[
        {
            _id: 123456,
            name:'shirt',
            price: 500,
            sku:"33265265623"

        },
        {
            _id: 456756,
            name:'shirt',
            price: 500,
            sku:"33265265623"

        }
    ];
    const handleDelete = (productId) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
           
            console.log(`Product with ID ${productId} deleted.`);
           
        }
    }
  return (
    <div className='max-w-7xl mx-auto p-6'>
        <h2 className='text-2xl font-bold mb-6'>Product Management</h2>
        {/* Product List */}
        <div className='overflow-x-auto shadow-md sm:rounded-lg'>
           <table table className='min-w-full text-left text-gray-500'>
            <thead className='uppercase bg-gray-100 text-xs text-gray-700'>
                <tr>
                <th className='py-3 px-4'>Name</th>
                <th className='py-3 px-4'>Price</th>
                <th className='py-3 px-4'>Sku</th>
                <th className='py-3 px-4'>Action</th>

                </tr>

            </thead>
            <tbody>
                {products.length > 0 ? (
                    products.map(product => (
                        <tr key={product._id}>
                            <td className='p-4 font-medium text-gray-900 whitespace-nowrap'>{product.name}</td>
                            <td className='p-4 font-medium text-gray-900 whitespace-nowrap'>{product.price}</td>
                            <td className='p-4 font-medium text-gray-900 whitespace-nowrap'>{product.sku}</td>
                            <td className='p-4 font-medium text-gray-900 whitespace-nowrap'>
                                <Link to={`/admin/products/${product._id}/edit`} className='text-white px-2 py-1 bg-yellow-500 rounded hover:bg-yellow-600 mr-2'>Edit</Link>
                                <button className='text-white px-2 py-1 bg-red-500 rounded hover:bg-red-600'onClick={()=> handleDelete(product._id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="4" className='py-3 px-4 text-center text-gray-500'>No products found.</td>
                    </tr>
                )}
            </tbody>
           </table>

        </div>
    </div>
  )
}

export default ProductMangement
