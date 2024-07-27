import React from 'react';
import ProductCard from './ProductCard';

const featuredProducts = [
  { id: 1, name: 'Product 1', price: 29.99, image: '/sadman.jpeg' },
  { id: 2, name: 'Product 2', price: 39.99, image: '/sadman.jpeg' },
  { id: 3, name: 'Product 3', price: 49.99, image: '/sadman.jpeg' },
];

const FeaturedProducts = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl text-center mb-8">Featured Products</h2>
      <div className="grid grid-cols-3 gap-6">
        {featuredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
