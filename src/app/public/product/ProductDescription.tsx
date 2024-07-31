"use client"
import React from 'react';

interface ProductDescriptionProps {
  description: string;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({ description }) => {
  return (
    <div className="p-4 bg-white rounded-md shadow-md mt-8">
      <h3 className="text-xl font-bold mb-2">Product Description</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default ProductDescription;
