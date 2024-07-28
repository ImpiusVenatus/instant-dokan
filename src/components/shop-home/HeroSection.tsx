import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="h-96 text-white"
      style={{
        backgroundImage: "url('/hero.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex flex-col items-center justify-center text-center bg-black bg-opacity-50 p-8 h-[100%]">
        <h1
          className="text-6xl font-bold mb-4"
          style={{ fontFamily: 'Metropolitano-Medium, sans-serif' }}
        >
          Welcome to Shoepify
        </h1>
        <p className="mb-8 text-xl">Find the best sports shoes at unbeatable prices</p>
        <a
          href="/shop"
          className="px-6 py-3 bg-teal-500 text-white rounded-md transition-all duration-300 transform hover:bg-teal-800 shadow-lg"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
