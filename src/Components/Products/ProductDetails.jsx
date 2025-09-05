import React, { useState } from 'react';
import { toast } from 'sonner';
import ProductGrid from './ProductGrid';

const SelectedProduct = {
    name: 'Stylish jacket',
    originalPrice: 1500,
    price: 1200,
    discription: "This is a stylish jacket perfect for every occasion.",
    brand: "fashionbrand",
    material: "cotton",
    size: ["S", "M", "L", "XL"],
    color: ["red", "blue", "black"],
    image: [
        {
            url: 'https://picsum.photos/500/500?random=12',
            alt: "Stylish Jacket Front View"
        },
        {
            url: 'https://picsum.photos/500/500?random=22',
            alt: "Stylish Jacket Back View"
        }
    ]
};

const ProductDetails = () => {
    const [mainImg, setMainImg] = useState(SelectedProduct.image[0].url);
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [added, setAdded] = useState(false);

    const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    const handleIncrease = () => setQuantity((prev) => prev + 1);

    const handleAddToCart = () => {
        if (!selectedSize || !selectedColor) {
            toast.error("Please select size and color before adding to cart.");
            return;
        }
        setAdded(true);
        toast.success("Product added to cart!");

        setTimeout(() => {
            setAdded(false);
            setSelectedColor('');
            setSelectedSize('');
            setQuantity(1);
        }, 1000); 
    };

    const selectedProducts = [
        {
            _id: '1',
            name: 'product1',
            price: 1000,
            image:[
                {
            url: 'https://picsum.photos/500/500?random=22',
            alt: "Stylish Jacket Front View"
                }
            ]
        },
        {
            _id: '2',
            name: 'product2',
            price: 1000,
            image:[
                {
            url: 'https://picsum.photos/500/500?random=32',
            alt: "Stylish Jacket Front View"
                }
            ]
        },
        {
            _id: '3',
            name: 'product3',
            price: 1000,
            image:[
                {
            url: 'https://picsum.photos/500/500?random=53',
            alt: "Stylish Jacket Front View"
                }
            ]
        },
        {
            _id: '4',
            name: 'product4',
            price: 1000,
            image:[
                {
            url: 'https://picsum.photos/500/500?random=14',
            alt: "Stylish Jacket Front View"
                }
            ]
        }
    ]


    return (
        <div className="p-4 md:p-8 min-h-[60vh]">
            <div className="max-w-5xl mx-auto bg-white rounded-xl p-4 md:p-8 flex flex-col md:flex-row gap-8 ">
                {/* Images */}
                <div className="flex flex-col md:flex-row gap-4 md:w-1/2">
                    {/* Thumbnails (vertical on desktop, horizontal on mobile) */}
                    <div className="flex md:flex-col flex-row md:justify-start justify-center md:items-start items-center gap-3">
                        {SelectedProduct.image.map((img, idx) => (
                            <img
                                key={idx}
                                src={img.url}
                                alt={img.alt}
                                onClick={() => setMainImg(img.url)}
                                className={`w-14 h-14 object-cover rounded-lg border-2 cursor-pointer transition-all duration-200
                                    ${mainImg === img.url ? 'border-black ring-2 ring-black' : 'border-gray-200'}
                                `}
                            />
                        ))}
                    </div>
                    {/* Main Image */}
                    <div className="w-full aspect-square bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                        <img
                            src={mainImg}
                            alt="Main product"
                            className="object-cover w-full h-full transition-all duration-300"
                        />
                    </div>
                </div>
                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold mb-2">{SelectedProduct.name}</h1>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="text-gray-400 line-through text-lg">₹{SelectedProduct.originalPrice}</span>
                            <span className="text-xl text-green-600 font-semibold">₹{SelectedProduct.price}</span>
                        </div>
                        <p className="text-gray-600 mb-4">{SelectedProduct.discription}</p>
                        {/* Colors */}
                        <div className="mb-4">
                            <span className="block text-gray-700 font-medium mb-1">Colors:</span>
                            <div className="flex gap-2">
                                {SelectedProduct.color.map((color) => (
                                    <button
                                        key={color}
                                        onClick={() => setSelectedColor(color)}
                                        className={`w-7 h-7 rounded-full border-2 transition-all duration-200
                                            ${selectedColor === color ? 'border-black ring-2 ring-black' : 'border-gray-300'}
                                        `}
                                        style={{
                                            backgroundColor: color.toLowerCase(),
                                            filter: selectedColor === color ? 'brightness(1)' : 'brightness(0.8)'
                                        }}
                                        aria-label={color}
                                    />
                                ))}
                            </div>
                        </div>
                        {/* Sizes */}
                        <div className="mb-4">
                            <span className="block text-gray-700 font-medium mb-1">Size:</span>
                            <div className="flex gap-2">
                                {SelectedProduct.size.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`px-3 py-1 rounded border text-sm font-medium transition-all duration-200
                                            ${selectedSize === size
                                                ? 'bg-black text-white border-black'
                                                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}
                                        `}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                        {/* Quantity Selector */}
                        <div className="mb-4">
                            <span className="block text-gray-700 font-medium mb-1">Quantity:</span>
                            <div className="flex items-center gap-2">
                                <button
                                    type="button"
                                    onClick={handleDecrease}
                                    className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 text-xl font-bold"
                                    disabled={quantity === 1}
                                >-</button>
                                <span className="px-3">{quantity}</span>
                                <button
                                    type="button"
                                    onClick={handleIncrease}
                                    className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 text-xl font-bold"
                                >+</button>
                            </div>
                        </div>
                        {/* Brand */}
                        <div className="mb-6">
                            <span className="block text-gray-700 font-medium mb-1">Brand:</span>
                            <span className="text-gray-500">{SelectedProduct.brand}</span>
                        </div>
                    </div>
                    <button
                        className="w-full md:w-auto bg-black text-white py-3 px-8 rounded-lg font-semibold hover:bg-gray-800 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed"
                        onClick={handleAddToCart}
                        disabled={added}
                    >
                        {added ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                </div>
            </div>
                <div className='mt-20 text-center'>
                    <h2 className='font-bold text-xl'>You May Also Like</h2>
                    <ProductGrid products={selectedProducts} />
                </div>
        </div>
    );
};

export default ProductDetails;
