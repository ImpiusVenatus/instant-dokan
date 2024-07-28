"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProductImageGallery = ({ images }: { images: string[] }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="space-y-4">
      <motion.img
        key={mainImage}
        src={mainImage}
        alt="Product"
        className="w-full h-96 object-cover rounded-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <div className="flex space-x-2 overflow-x-auto">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`w-24 h-24 object-cover cursor-pointer rounded-md ${mainImage === image ? 'border-2 border-teal-500' : ''}`}
            onClick={() => setMainImage(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;
