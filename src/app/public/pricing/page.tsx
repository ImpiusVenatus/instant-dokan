"use client"

import { Footer } from '@/components/Footer';
import { NavigationMenuBar } from '@/components/NavigationBar';
import { Onboard } from '@/components/home/Onboard';
import { Pricing } from '@/components/home/Pricing';
import React from 'react';

const PricingPage = () => {
  return (
    <div>
      <NavigationMenuBar />
      <Pricing />
      <Onboard />
      <Footer />
    </div>
  );
};

export default PricingPage;
