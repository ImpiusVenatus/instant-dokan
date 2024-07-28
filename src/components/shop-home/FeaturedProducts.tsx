import React from 'react';
import ProductCard from './ProductCard';

const featuredProducts = [
  { id: 1, name: 'Product 1', price: 29.99, image: '/shop/sample1.png' },
  { id: 2, name: 'Product 2', price: 39.99, image: '/shop/sample2.png' },
  { id: 3, name: 'Product 3', price: 49.99, image: '/shop/sample3.png' },
];

const FeaturedProducts = () => {
  return (
    <section className="py-12">
      <div className="flex items-center mb-8">
        <span className="block w-10 h-1 bg-teal-500 mr-4"></span>
        <h2 className="text-3xl font-semibold">Featured Products</h2>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {featuredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
