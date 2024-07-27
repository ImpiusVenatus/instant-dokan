import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="flex items-center justify-center h-96 text-white"
      style={{ backgroundImage: "url('/sadman.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="text-center bg-black bg-opacity-50 p-8 rounded-md">
        <h1 className="text-4xl font-bold mb-4">Welcome to ShopName</h1>
        <p className="mb-8">Find the best products at unbeatable prices</p>
        <a href="/shop" className="px-6 py-3 bg-teal-500 text-white rounded-md">Shop Now</a>
      </div>
    </section>
  );
};

export default HeroSection;
