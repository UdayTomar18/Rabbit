import { Link } from 'react-router-dom'

const ProductGrid = ({ products }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-10 w-full max-w-7xl mx-auto px-2 '>
      {products.map((product, index) => (
        <Link key={product._id || index} to={`/product/${product._id}`} className='block'>
          <div className="bg-white p-2 rounded-lg ">
            <div className='w-full h-96'>
                <img src={product.image[0].url} alt={product.image[0].alt} className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className=' text-left mt-2'>
              <h3 className='text-sm mb-2 font-semibold'>{product.name}</h3>
              <p className='text-gray-500 text-sm font-medium tracking-tighter'>{product.price}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ProductGrid
