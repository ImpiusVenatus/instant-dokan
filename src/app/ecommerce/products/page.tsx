"use client"
import React, { useState, useEffect } from 'react';
import Layout from '@/components/DashboardLayout';
import { PlusIcon } from 'lucide-react';
import { ProductTab } from '@/components/dashboard/ProductTab';

const ProductsDashboard = () => {
  const [alignment, setAlignment] = useState<string>('list');

  useEffect(() => {
    const savedAlignment = localStorage.getItem('alignment');
    if (savedAlignment) {
      setAlignment(savedAlignment);
    }
  }, []);

  const handleAlignment = (newAlignment: string) => {
    setAlignment(newAlignment);
    localStorage.setItem('alignment', newAlignment);
  };

  return (
    <Layout>
      <div className="flex-grow p-6 mb-4 bg-[#1A1D1F] transition-all duration-500 rounded-xl">
        {/* Buttons and title */}
        <div className="flex justify-between items-center">
          <h2 className="text-gray-300 text-3xl font-semibold">Products</h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center w-full max-w-xl m-4 shadow-xl">
              <PlusIcon className="text-white h-12 w-12 bg-teal-400 rounded-full p-2" />
            </div> 
          </div>
        </div>

        {/* Product Tabs */}
        <ProductTab alignment={alignment} handleAlignment={handleAlignment} />
      </div>
    </Layout>
  );
};

export default ProductsDashboard;
