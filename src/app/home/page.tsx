import React from 'react';
import Header from '@/components/shop-home/Header';
import HeroSection from '@/components/shop-home/HeroSection';
import FeaturedProducts from '@/components/shop-home/FeaturedProducts';
import Categories from '@/components/shop-home/Categories';
import SpecialOffers from '@/components/shop-home/SpecialOffers';
import Footer from '@/components/shop-home/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <main className='container'>
        <FeaturedProducts />
        <Categories />
        <SpecialOffers />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
