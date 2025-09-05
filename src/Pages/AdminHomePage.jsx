import React from 'react';
import { Link } from 'react-router-dom';

const AdminHomePage = () => {
  const orders = [
    {
      _id: 12345,
      user: { name: "John Doe" },
      totalPrice: 1100,
      status: "Processing",
    },
    {
      _id: 12345,
      user: { name: "John Doe" },
      totalPrice: 1100,
      status: "Processing",
    },
    {
      _id: 12345,
      user: { name: "John Doe" },
      totalPrice: 1100,
      status: "Processing",
    },

  ];

  return (
    <div className='max-w-7xl mx-auto p-6'>

      {/* Dashboard Header */}
      <h2 className='text-3xl font-bold mb-6'>Admin Dashboard</h2>

      {/* Summary Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        <div className='bg-white rounded-lg shadow-md p-6'>
          <h2 className='text-xl font-semibold mb-2'>Revenue</h2>
          <p className='text-2xl font-medium'>1000</p>
        </div>

        <div className='bg-white rounded-lg shadow-md p-6'>
          <h2 className='text-xl font-semibold mb-2'>Total Orders</h2>
          <p className='text-2xl mb-2'>200</p>
          <Link to='/admin/orders' className='text-blue-500 hover:underline'>
            Manage Orders
          </Link>
        </div>

        <div className='bg-white rounded-lg shadow-md p-6'>
          <h2 className='text-xl font-semibold mb-2'>Total Products</h2>
          <p className='text-2xl mb-2'>200</p>
          <Link to='/admin/products' className='text-blue-500 hover:underline'>
            Manage Products
          </Link>
        </div>
      </div>

      {/* Recent Orders Table */}
      <div className='mt-10'>
        <h2 className='text-2xl font-bold mb-4'>Recent Orders</h2>

        <div className='overflow-x-auto'>
          <table className='min-w-full text-left text-gray-700 border rounded-md'>
            <thead className='bg-gray-100 text-xs uppercase text-gray-700'>
              <tr>
                <th className='py-3 px-4 border'>Order ID</th>
                <th className='py-3 px-4 border'>User</th>
                <th className='py-3 px-4 border'>Total Price</th>
                <th className='py-3 px-4 border'>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.length > 0 ? (
                orders.map((order) => (
                  <tr
                    key={order._id}
                    className='border-b hover:bg-gray-50 transition duration-150'
                  >
                    <td className='p-4 border'>{order._id}</td>
                    <td className='p-4 border'>{order.user.name}</td>
                    <td className='p-4 border'>₹{order.totalPrice}</td>
                    <td className='p-4 border'>{order.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={4}
                    className='p-4 text-center text-gray-500'
                  >
                    No recent orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default AdminHomePage;
