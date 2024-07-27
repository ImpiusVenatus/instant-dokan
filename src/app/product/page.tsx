import React from 'react';
import Navbar from './ShopNavbar';
import ProductImageGallery from './ProductImageGallery';
import ProductDetails from './ProductDetails';

const SingleProductPage = () => {
  const product = {
    name: 'WMNS AIR MAX 270 "OCEAN BLISS"',
    brand: 'Nike',
    rating: 4.5,
    reviews: 122,
    price: 215,
    originalPrice: 410,
    discount: 40,
    images: [
      '/sadman.jpeg',
      '/sadman.jpeg',
      '/sadman.jpeg',
      '/sadman.jpeg',
    ],
    options: {
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Red', 'Blue', 'Green'],
    },
    availableOptions: {
      toOrder: 215,
      inStock: 320,
    },
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProductImageGallery images={product.images} />
        <ProductDetails product={product} />
      </div>
    </div>
  );
};

export default SingleProductPage;
