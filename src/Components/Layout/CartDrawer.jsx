import React from 'react';
import { IoMdAdd } from 'react-icons/io';
import CartContent from '../Cart/CartContent';
import { useNavigate } from 'react-router-dom';

const CartDrawer = ({ drawerOpen, toggleDrawer }) => {
  const navigate = useNavigate();
  const handleCheckout = () => {
    toggleDrawer();
     navigate("/checkout");
    
  }
  return (
    <div
      className={`fixed top-0 right-0 w-3/4 md:w-1/3 bg-white h-full shadow-lg transition-transform duration-300 z-50 sm:w-full ${
        drawerOpen ? 'translate-x-0' : 'translate-x-full'
      } flex flex-col`}
    >
      <IoMdAdd
        className="w-6 h-6 text-gray-700 hover:text-black absolute top-4 right-4 cursor-pointer rotate-45"
        onClick={toggleDrawer}
      />

      
      <div className="flex-grow overflow-y-auto p-4 pt-12">
        <h2 className="text-black font-semibold text-xl ml-4">Your cart</h2>
        <CartContent />
      </div>

      
      <div className="p-4 border-t">
        <button onClick={handleCheckout} className="w-full bg-black text-white rounded-lg h-10 font-semibold hover:bg-gray-800 transition-colors duration-300">
          CHECK OUT
        </button>
        <p className="text-gray-700 text-sm tracking-tight text-center mt-2">
          Shipping, taxes, and discount codes are calculated at checkout.
        </p>
      </div>
    </div>
  );
};

export default CartDrawer;
