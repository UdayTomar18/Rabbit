import React from 'react'
import MyOrdersPage from './MyOrdersPage'

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="flex-grow container mx-auto p-4 md:p-8">
        <div className="flex flex-col md:flex-row md:space-x-8 gap-8">
          <div className="w-full md:w-1/3 lg:w-1/4 bg-white shadow-md rounded-lg p-6 flex flex-col items-start">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">John Doe</h1>
            <p className="text-lg text-gray-600 mb-6">john@example.com</p>
            <button className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition">
              Logout
            </button>
          </div>
          <div className="flex-1">
            <MyOrdersPage />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
