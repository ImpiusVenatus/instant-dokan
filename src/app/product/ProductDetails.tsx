"use client"
import React, { useState } from 'react';

const ProductDetails = ({ product }: { product: any }) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
      <p className="text-sm text-gray-500 mb-4">{product.brand}</p>
      <div className="flex items-center mb-4">
        <div className="text-yellow-500">{/* Star rating here */}</div>
        <p className="ml-2 text-gray-600">{product.reviews} Reviews</p>
      </div>
      <div className="text-2xl font-semibold mb-2">${product.price}</div>
      <div className="text-sm text-gray-600 mb-2 line-through">${product.originalPrice}</div>
      <div className="text-sm text-red-500 mb-4">-{product.discount}%</div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Size</label>
        <select
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
          className="w-full border px-4 py-2 rounded-md"
        >
          <option value="">Select Size</option>
          {product.options.sizes.map((size: string) => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Color</label>
        <select
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
          className="w-full border px-4 py-2 rounded-md"
        >
          <option value="">Select Color</option>
          {product.options.colors.map((color: string) => (
            <option key={color} value={color}>{color}</option>
          ))}
        </select>
      </div>
      <div className="flex items-center mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-lg font-semibold">${product.availableOptions.toOrder}</span>
          <span className="text-gray-600">To order</span>
        </div>
        <div className="flex items-center space-x-2 ml-4">
          <span className="text-lg font-semibold">${product.availableOptions.inStock}</span>
          <span className="text-gray-600">In stock</span>
        </div>
      </div>
      <div className="flex space-x-4">
        <button className="flex-1 px-4 py-2 bg-orange-500 text-white rounded-md">Buy one click</button>
        <button className="flex-1 px-4 py-2 bg-black text-white rounded-md">Add to cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
