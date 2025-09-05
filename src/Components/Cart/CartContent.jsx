import React from 'react';
import { RiDeleteBin3Line } from 'react-icons/ri';

const CartContent = () => {
  const products = [
    {
      productid: 1,
      name: 'T-shirt',
      size: 'M',
      quantity: 2,
      price: 300,
      color: 'Red',
      image: 'https://picsum.photos/200?random=1',
    },
    {
      productid: 2,
      name: 'Jeans',
      size: 'L',
      quantity: 1,
      price: 300,
      color: 'Blue',
      image: 'https://picsum.photos/200?random=2',
    },
    {
      productid: 3,
      name: 'Pant',
      size: 'M',
      quantity: 1,
      price: 300,
      color: 'Red',
      image: 'https://picsum.photos/200?random=3',
    },
  ];

  return (
    <div className="h-auto w-full overflow-y-auto">
      {products.map((product, index) => (
        <div key={index} className="flex items-start justify-between gap-3 p-4 border-b">
          <img src={product.image} alt={product.name} className="w-20 h-20 object-cover rounded" />
          
          <div className="flex-1">
            <h3 className="font-semibold capitalize">{product.name}</h3>
            <p className="text-sm text-gray-500">
              Size: {product.size} | Color: {product.color}
            </p>
          
          <div className="flex items-center gap-2 mt-2">
            <button className="border rounded font-medium text-xl w-5 h-auto -py-1">-</button>
            <span>{product.quantity}</span>
           <button className="border rounded font-medium text-xl w-5 h-auto -py-1">+</button>
          </div>
          </div>
          <div>
              <p className="text-sm font-semibold mt-1">₹{product.price}</p>
              <button>
                <RiDeleteBin3Line className="text-red-500 w-4 h-4 ml-3  mt-2 cursor-pointer" />
              </button>
          </div>
        </div>

      ))}
    </div>
  )
};

export default CartContent;
