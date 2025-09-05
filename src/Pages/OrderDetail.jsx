import React from 'react';
import { Link } from 'react-router-dom';

const order = {
  _id: 'ORD12345',
  createdAt: '2025-07-25',
  status: 'Approved', // or 'Pending'
  deliveryStatus: 'Pending', // custom status below main one
  payment: {
    method: 'PayPal',
    status: 'Paid',
  },
  shipping: {
    method: 'Standard Delivery',
    address: '123 Main St, New York, USA - 10001',
  },
  items: [
    {
      name: 'T-shirt',
      price: 500,
      quantity: 2,
      image: 'https://picsum.photos/60?random=1',
    },
    {
      name: 'Denim Jacket',
      price: 1500,
      quantity: 1,
      image: 'https://picsum.photos/60?random=2',
    },
  ]
};

const OrderDetail = () => {
  const totalAmount = order.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white border rounded-lg relative m-5">
      {/* Top Header */}
      <div className="flex justify-between items-start mb-6">
        {/* Order Info */}
        <div>
          <h2 className="text-xl font-semibold">Order ID: {order._id}</h2>
          <p className="text-sm text-gray-600">
            Date: {new Date(order.createdAt).toLocaleDateString()}
          </p>
        </div>

        {/* Order Status */}
        <div className="text-right space-y-1">
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              order.status === 'Approved'
                ? 'bg-green-100 text-green-700'
                : 'bg-yellow-100 text-yellow-700'
            }`}
          >
            {order.status}
          </span>
          <div className="text-xs mt-1 ml-1 text-yellow-600 bg-yellow-100 inline-block px-2 py-0.5 rounded">
            Delivery: {order.deliveryStatus}
          </div>
        </div>
      </div>

      {/* Payment & Shipping Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Payment Info */}
        <div className="p-4 bg-gray-50 border rounded-lg">
          <h4 className="font-semibold mb-2">Payment Information</h4>
          <p className="text-sm text-gray-700">Method: {order.payment.method}</p>
          <p className="text-sm text-gray-700">
            Status:{' '}
            <span className="font-medium text-emerald-600">{order.payment.status}</span>
          </p>
        </div>

        {/* Shipping Info */}
        <div className="p-4 bg-gray-50 border rounded-lg">
          <h4 className="font-semibold mb-2">Shipping Information</h4>
          <p className="text-sm text-gray-700">Method: {order.shipping.method}</p>
          <p className="text-sm text-gray-700">Address: {order.shipping.address}</p>
        </div>
      </div>

      {/* Items Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-left border">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 border-b font-semibold">Product</th>
              <th className="py-3 px-4 border-b font-semibold">Unit Price</th>
              <th className="py-3 px-4 border-b font-semibold">Quantity</th>
              <th className="py-3 px-4 border-b font-semibold">Total</th>
            </tr>
          </thead>
          <tbody>
            {order.items.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="py-3 px-4 flex items-center gap-3">
                  <img src={item.image} alt={item.name} className="w-10 h-10 object-cover rounded" />
                  {item.name}
                </td>
                <td className="py-3 px-4">₹{item.price.toLocaleString()}</td>
                <td className="py-3 px-4">{item.quantity}</td>
                <td className="py-3 px-4 font-medium">
                  ₹{(item.price * item.quantity).toLocaleString()}
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="3" className="py-3 px-4 text-right font-semibold">
                Grand Total
              </td>
              <td className="py-3 px-4 font-bold">₹{totalAmount.toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Back Link */}
      <div className="mt-6">
        <Link
          to="/my-orders"
          className="text-blue-600 hover:underline text-sm font-medium"
        >
          ← Back to My Orders
        </Link>
      </div>
    </div>
  );
};

export default OrderDetail;
