"use client"
import { Sidebar } from '@/components/SideBar';
import { Pricing } from '@/components/home/Pricing';
import { AlignLeft } from 'lucide-react';
import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';

const ShopDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='flex'>
      <Sidebar isOpen={isSidebarOpen} />
      <div className={`flex flex-col flex-1 transition-all duration-500 ${isSidebarOpen ? 'ml-[200px] md:ml-[250px]' : 'ml-0'}`}>
        <div className="bg-gray-800 text-gray-300 py-4 px-6 flex justify-between items-center transition-all duration-500">
          <button 
            onClick={toggleSidebar} 
            className="bg-gray-700 text-gray-300 px-4 py-2 rounded-md hover:bg-gray-600 transition-all duration-500"
          >
            <AlignLeft />
          </button>
          <h1 className="text-xl font-semibold">Shop Owner Dashboard</h1>
          <Avatar alt="Remy Sharp" src="/sadman.jpeg" />
        </div>
        <div className="flex-grow p-6 bg-gray-100 transition-all duration-500">
          {/* Main content goes here */}
          <h2 className="text-2xl font-semibold mb-4">Welcome to your dashboard</h2>
          <p>Here you can manage your shop, view orders, manage products, and more.</p>
          <Pricing />
        </div>
      </div>
    </div>
  );
};

export default ShopDashboard;
