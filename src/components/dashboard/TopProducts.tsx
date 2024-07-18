"use client"
import React from 'react';
import { Order } from '@/components/dashboard/types';

interface TopProductsProps {
  products: Order[];
}

const TopProducts: React.FC<TopProductsProps> = ({ products }) => {
  return (
    <div className="bg-[#1A1D1F] p-4 rounded-xl shadow-md">
      <h3 className="text-gray-100 text-lg font-bold mb-4">Top Products</h3>
      <ul className="space-y-2">
        {products.map((product) => (
          <li key={product.id} className="text-gray-100">
            {product.productTitle} - ${product.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopProducts;
