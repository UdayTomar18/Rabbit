import React from 'react'
import { FaBoxOpen, FaClipboardList, FaSignOutAlt, FaStore, FaUser } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const AdminSidebar = () => {
    const navigate = useNavigate();
    const handlelogOut =()=>{
        navigate("/")

    }
  return (
    <div className='w-full h-[75rem] p-6 '>
      <div className='mb-6 '>
        <Link to='/admin' className='text-2xl font-medium mb-6 block text-center'>
          Rabbit
        </Link>
      </div>
      <h2 className='text-xl font-medium text-center mb-6'>Admin Dashboard</h2>
      <nav className='flex flex-col space-y-2'>
        <NavLink
          to='/admin/users'
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
              : "text-gray-700 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
          }
        >
          <FaUser />
          <span>Users</span>

        </NavLink>
        <NavLink
          to='/admin/products'
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
              : "text-gray-700 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
          }
        >
          <FaBoxOpen />
          <span>Products</span>

        </NavLink>
        <NavLink
          to='/admin/orders'
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
              : "text-gray-700 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
          }
        >
          <FaClipboardList />
          <span>Orders</span>

        </NavLink>
        <NavLink
          to='/admin/shop'
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
              : "text-gray-700 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
          }
        >
          <FaStore />
          <span>Shop</span>

        </NavLink>
      </nav>
      <div className='mt-6'>
        <button onClick={handlelogOut} className='w-full bg-red-500 text-white flex justify-center items-center space-x-2 py-2 px-4 rounded hover:bg-red-600 transition-colors duration-300'>
           <FaSignOutAlt/> LogOut
        </button>

      </div>

    </div>
  )
}

export default AdminSidebar