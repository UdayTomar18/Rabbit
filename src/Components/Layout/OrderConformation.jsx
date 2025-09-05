import React from 'react';

const checkout = {
  _id: '12345',
  createdAt: '2023-10',
  paymentMethod: 'PayPal',
  paymentStatus: 'Paid',
  checkoutItem: [
    {
      productid: 1,
      name: 'T-shirt',
      size: 'M',
      quantity: 2,
      price: 300,
      color: 'Red',
      image: 'https://picsum.photos/150?random=1',
    },
    {
      productid: 2,
      name: 'T-jacket',
      size: 'M',
      quantity: 1,
      price: 1300,
      color: 'Black',
      image: 'https://picsum.photos/150?random=2',
    },
  ],
  shippingAddress: {
    name: 'John Doe',
    address: '123 Main St',
    city: 'New York',
    country: 'USA',
    postalCode: '10001',
    phone: '+1 234 567 8901',
  }
};

const OrderConformation = () => {
  const calculatedEstimatedDelivery = (createdAt) => {
    const orderDate = new Date(createdAt);
    orderDate.setDate(orderDate.getDate() + 7);
    return orderDate.toLocaleDateString();
  };

  const calculateTotal = () => {
    return checkout.checkoutItem.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className='max-w-4xl mx-auto p-6 bg-white'>
      <h1 className='text-4xl text-emerald-700 font-bold text-center mb-8'>
        Thank you for Your Order!
      </h1>

      {checkout && (
        <div className='relative p-6 rounded-lg border bg-white'>
          <div className='absolute top-4 right-4 bg-white px-3 py-1 rounded text-emerald-700 font-semibold text-sm'>
            Estimated Delivery: {calculatedEstimatedDelivery(checkout.createdAt)}
          </div>

          {/* Order Info */}
          <div className='text-left space-y-2 mb-6'>
            <h2 className='text-xl font-semibold'>Order ID: {checkout._id}</h2>
            <p className='text-gray-500'>
              Order Date: {new Date(checkout.createdAt).toLocaleDateString()}
            </p>
          </div>

          {/* Items */}
          <div>
            <h3 className='text-lg font-semibold mb-2'>Items Ordered</h3>
            {checkout.checkoutItem.map((item, index) => (
              <div key={index} className='flex items-center gap-4 border-b py-4'>
                <img src={item.image} alt={item.name} className='w-16 h-16 rounded object-cover' />
                <div className='flex-1'>
                  <p className='font-medium'>{item.name}</p>
                  <p className='text-sm text-gray-500'>
                    Size: {item.size} | Color: {item.color} | Qty: {item.quantity}
                  </p>
                </div>
                <p className='font-semibold whitespace-nowrap'>
                  ₹{(item.price * item.quantity).toLocaleString()}
                </p>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className='text-right mt-6 text-lg font-bold'>
            Total: ₹{calculateTotal().toLocaleString()}
          </div>

          {/* Payment & Delivery Info */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10'>
            {/* Payment Info */}
            <div className='p-4 border rounded-lg bg-gray-50'>
              <h4 className='text-md font-semibold mb-2'>Payment Information</h4>
              <p className='text-sm text-gray-700'>
                Method: <span className='font-medium'>{checkout.paymentMethod}</span>
              </p>
              <p className='text-sm text-gray-700'>
                Status: <span className='font-medium text-emerald-700'>{checkout.paymentStatus}</span>
              </p>
            </div>

            {/* Delivery Info */}
            <div className='p-4 border rounded-lg bg-gray-50'>
              <h4 className='text-md font-semibold mb-2'>Delivery Information</h4>
              <p className='text-sm text-gray-700'>Name: {checkout.shippingAddress.name}</p>
              <p className='text-sm text-gray-700'>Phone: {checkout.shippingAddress.phone}</p>
              <p className='text-sm text-gray-700'>
                Address: {checkout.shippingAddress.address}, {checkout.shippingAddress.city}, {checkout.shippingAddress.country} - {checkout.shippingAddress.postalCode}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderConformation;
