import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const MyOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      const mockOrders = [
        {
          _id: '12345',
          createdAt: new Date(),
          shippingAddress: { city: "Mumbai", state: "Maharashtra", country: "India" },
          orderItems: [
            {
              name: 'Product 1',
              image: 'https://picsum.photos/500/500?random=1',
            },
          ],
          totalPrice: 2000,
          isPaid: true,
        },
        {
          _id: '34567',
          createdAt: new Date(),
          shippingAddress: { city: "Mumbai", state: "Maharashtra", country: "India" },
          orderItems: [
            {
              name: 'Product 2',
              image: 'https://picsum.photos/500/500?random=2',
            },
          ],
          totalPrice: 2000,
          isPaid: true,
        }
      ]
      setOrders(mockOrders)
    }, 1000)
  }, []);

  const handleRawClick = (orderId) => {
    navigate(`/order/${orderId}`);

  }

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-6">My Orders</h2>
      <div className="relative shadow-md sm:rounded-lg overflow-hidden bg-white">
        <table className="min-w-full text-left text-gray-700">
          <thead className="bg-gray-100 uppercase text-xs text-gray-700">
            <tr>
              <th className="py-4 px-4 sm:py-3">Image</th>
              <th className="py-4 px-4 sm:py-3">Order Id</th>
              <th className="py-4 px-4 sm:py-3">Created</th>
              <th className="py-4 px-4 sm:py-3">Shipping Address</th>
              <th className="py-4 px-4 sm:py-3">Items</th>
              <th className="py-4 px-4 sm:py-3">Price</th>
              <th className="py-4 px-4 sm:py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map(order => (
                <tr key={order._id} onClick={()=>{handleRawClick(order._id)}} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">
                    {order.orderItems.map((item, idx) => (
                      <img
                        key={idx}
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                    ))}
                  </td>
                  <td className="py-3 px-4 font-semibold">{order._id}</td>
                  <td className="py-3 px-4 text-sm">
                    {order.createdAt.toLocaleDateString()}<br />
                    <span className="text-xs text-gray-400">{order.createdAt.toLocaleTimeString()}</span>
                  </td>
                  <td className="py-3 px-4 text-sm">
                    {order.shippingAddress.city}, {order.shippingAddress.state}, {order.shippingAddress.country}
                  </td>
                  <td className="py-3 px-4 text-sm">
                    {order.orderItems.map((item, idx) => (
                      <div key={idx}>{item.name}</div>
                    ))}
                  </td>
                  <td className="py-3 px-4 font-bold">₹{order.totalPrice}</td>
                  <td className="py-3 px-4">
                    <span className={`inline-block px-2 py-1 rounded text-xs font-semibold ${order.isPaid ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {order.isPaid ? 'Paid' : 'Not Paid'}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="py-8 text-center text-gray-500">Loading orders...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyOrdersPage
