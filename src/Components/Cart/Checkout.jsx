import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Paypal from './Paypal';
import CartContent from './CartContent';

const Checkout = () => {
    const cart = {
    product: [
        {
            image: 'https://picsum.photos/500/500?random=1',
            name: 'Sample Product',
            size: 'M',
            color: 'Black',
            price: 1999,
        },
        {
            image: 'https://picsum.photos/500/500?random=2',
            name: 'Sample Product',
            size: 'M',
            color: 'Black',
            price: 1999,
        },
        
    ],
    totalprice: 3998,
}
    const navigate = useNavigate();
    const [shippingAddress, setShippingAddress] = useState({
        firstname: '',
        lastname: '',
        address: '',
        city: '',
        postalcode: '',
        country: '',
        phone: '',
    });

    const handlePaymentSuccess = (details) => {
        console.log('Payment Success:', details);
        navigate('/order-confirmation');
    };

    const [checkoutId, setCheckoutId] = useState(null);

    const handleCreateCheckout = (e) => {
        e.preventDefault();
        setCheckoutId('12345');
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl py-10 mx-auto px-6 tracking-tighter">
            {/* Left side */}
            <div className="bg-white rounded-lg py-6">
                <h2 className="text-2xl uppercase mb-6">Checkout</h2>

                <form onSubmit={handleCreateCheckout}>
                    <h3 className="text-xl mb-4">Contact Details</h3>

                    <div className="text-gray-700 block mb-4">
                        <label>Email</label>
                        <input
                            type="email"
                            value="example@email.com"
                            className="w-full rounded-lg p-2"
                            disabled
                        />
                    </div>

                    <h3 className="text-lg mb-4">Delivery</h3>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-gray-700">First Name</label>
                            <input
                                type="text"
                                value={shippingAddress.firstname}
                                onChange={(e) =>
                                    setShippingAddress({ ...shippingAddress, firstname: e.target.value })
                                }
                                required
                                className="w-full p-2 border rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Last Name</label>
                            <input
                                type="text"
                                value={shippingAddress.lastname}
                                onChange={(e) =>
                                    setShippingAddress({ ...shippingAddress, lastname: e.target.value })
                                }
                                required
                                className="w-full p-2 border rounded"
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Address</label>
                        <input
                            type="text"
                            value={shippingAddress.address}
                            onChange={(e) =>
                                setShippingAddress({ ...shippingAddress, address: e.target.value })
                            }
                            required
                            className="w-full p-2 border rounded"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-gray-700">City</label>
                            <input
                                type="text"
                                value={shippingAddress.city}
                                onChange={(e) =>
                                    setShippingAddress({ ...shippingAddress, city: e.target.value })
                                }
                                required
                                className="w-full p-2 border rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Postal Code</label>
                            <input
                                type="text"
                                value={shippingAddress.postalcode}
                                onChange={(e) =>
                                    setShippingAddress({ ...shippingAddress, postalcode: e.target.value })
                                }
                                required
                                className="w-full p-2 border rounded"
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Country</label>
                        <input
                            type="text"
                            value={shippingAddress.country}
                            onChange={(e) =>
                                setShippingAddress({ ...shippingAddress, country: e.target.value })
                            }
                            required
                            className="w-full p-2 border rounded"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Phone</label>
                        <input
                            type="text"
                            value={shippingAddress.phone}
                            onChange={(e) =>
                                setShippingAddress({ ...shippingAddress, phone: e.target.value })
                            }
                            required
                            className="w-full p-2 border rounded"
                        />
                    </div>

                    <div className="mt-6">
                        {!checkoutId ? (
                            <button
                                type="submit"
                                className="w-full bg-black text-white py-3 rounded-lg"
                            >
                                Continue to Payment
                            </button>
                        ) : (
                            <>
                                <h3 className="text-lg mb-4">Pay with PayPal</h3>
                                <Paypal
                                    amount={100}
                                    onSuccess={handlePaymentSuccess}
                                    onError={(error) =>
                                        console.error('Payment Failed. Try again:', error)
                                    }
                                />
                            </>
                        )}
                    </div>
                </form>
            </div>
            {/* Right side */}
            <div className='bg-gray-50 rounded-lg py-6 px-4'>
                <h3 className='text-lg mb-6 ml-2'>Order Summry</h3>
                <div className='border-t py-4 mb-4'>
                    {
                        cart.product.map((product, index) => {
                            return (                            <div key={index} className='flex items-start justify-between border-b  py-2'>
                                <div className='flex items-start'>
                                    <img src={product.image} alt={product.name} className='w-20 h-24 object-cover border-b rounded mx-2' />
                                <div className='p-3'>
                                    <h3 className='text-md'>{product.name}</h3>
                                    <p className='text-gray-500'>Size: {product.size}</p>
                                    <p className='text-gray-500'>Color: {product.color}</p>
                                </div>
                                </div>
                                <p className='text-lg p-4'>₹{product.price?.toLocaleString()}</p>
                            </div>
                            )


                        })}


                        <div className='flex items-center justify-between px-2'>
                            <p>Subtotal</p>
                            <p className='p-4'>₹{cart.totalprice.toLocaleString()}</p>
                        </div>
                        <div className='flex items-center justify-between px-2'>
                            <p>Shipping</p>
                            <p className='p-4'>Free</p>

                        </div>
                        <div className='flex items-center justify-between text-lg border-t px-6 pt-2'>
                            <p>Total</p>
                            <p>₹{cart.totalprice.toLocaleString()}</p>

                        </div>

                </div>

            </div>
        </div>
    );
};

export default Checkout;
