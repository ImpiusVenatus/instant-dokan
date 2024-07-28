"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Dropdown from '@/components/Dropdown';

const ProductDetails = ({ product }: { product: any }) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
      <p className="text-sm text-gray-500 mb-4">{product.brand}</p>
      <div className="flex items-center mb-4">
        <div className="text-yellow-500">{/* Star rating here */}</div>
        <p className="ml-2 text-gray-600">{product.reviews} Reviews</p>
      </div>
      <div className="text-2xl font-semibold mb-2">${product.price}</div>
      <div className="text-sm text-gray-600 mb-2 line-through">${product.originalPrice}</div>
      <div className="text-sm text-red-500 mb-4">-{product.discount}%</div>
      <Dropdown
        label="Size"
        options={product.options.sizes}
        value={selectedSize}
        onChange={(value) => setSelectedSize(value)}
      />
      <Dropdown
        label="Color"
        options={product.options.colors}
        value={selectedColor}
        onChange={(value) => setSelectedColor(value)}
      />
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
        <motion.button
          className="flex-1 px-4 py-2 bg-orange-500 text-white rounded-md focus:ring-2 focus:ring-orange-400 transition"
          whileHover={{ backgroundColor: '#fb923c' }}
          whileTap={{ backgroundColor: '#f97316' }}
        >
          Buy One Click
        </motion.button>
        <motion.button
          className="flex-1 px-4 py-2 bg-black text-white rounded-md focus:ring-2 focus:ring-black transition"
          whileHover={{ backgroundColor: '#444' }}
          whileTap={{ backgroundColor: '#222' }}
        >
          Add to Cart
        </motion.button>
      </div>
    </div>
  );
};

export default ProductDetails;
