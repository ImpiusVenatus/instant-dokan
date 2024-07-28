import React from 'react';
import ProductImageGallery from './ProductImageGallery';
import ProductDetails from './ProductDetails';
import ProductDescription from './ProductDescription';
import Header from '@/components/shop-home/Header';
import Footer from '@/components/shop-home/Footer';
import FeaturedProducts from '@/components/shop-home/FeaturedProducts';
import Breadcrumb from '@/components/Breadcrumb';

const SingleProductPage = () => {
  const product = {
    name: 'WMNS AIR MAX 270 "OCEAN BLISS"',
    brand: 'Biké',
    rating: 4.5,
    reviews: 122,
    price: 215,
    originalPrice: 410,
    discount: 40,
    images: [
      '/shop/sports.png',
      '/shop/formal.png',
      '/shop/casual.png',
    ],
    options: {
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Red', 'Blue', 'Green'],
    },
    availableOptions: {
      toOrder: 215,
      inStock: 320,
    },
    description: `Experience the ultimate in comfort and style with the WMNS AIR MAX 270 "OCEAN BLISS" by Biké. 
    Featuring a large air unit for cushioned steps and a sleek design for a modern look, these sneakers are perfect for 
    everyday wear. Available in a range of sizes and colors to suit your preferences.`,
  };

  const breadcrumbItems = [
    { label: 'Shop', href: '/shop' },
    { label: 'Sports', href: '/shop/sports' },
    { label: product.name, href: '#' },
  ];

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={breadcrumbItems} />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <ProductImageGallery images={product.images} />
          <ProductDetails product={product} />
        </div>
      </div>
      <div className="container mx-auto px-4">
        <ProductDescription description={product.description} />
      </div>
      <div className='container pb-16'>
        <FeaturedProducts />
      </div>
      <Footer />
    </div>
  );
};

export default SingleProductPage;
