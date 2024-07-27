"use client"
import React, { useState } from 'react';

const ProductImageGallery = ({ images }: { images: string[] }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div>
      <img src={mainImage} alt="Product" className="w-full h-96 object-cover mb-4" />
      <div className="flex space-x-2">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className="w-24 h-24 object-cover cursor-pointer"
            onClick={() => setMainImage(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;
