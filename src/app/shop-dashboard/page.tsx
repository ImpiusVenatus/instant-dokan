"use client"

import { Footer } from '@/components/Footer';
import { NavigationMenuBar } from '@/components/NavigationBar';
import { Sidebar } from '@/components/SideBar';
import { Onboard } from '@/components/home/Onboard';
import { Pricing } from '@/components/home/Pricing';
import React, {useState} from 'react';

const ShopDashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };

  return (
    <div className='flex'>
      <Sidebar isOpen={isSidebarOpen}/>
        <div className='flex flex-col flex-1'>
            <div className={`flex flex-col flex-grow transition-all duration-500 ${isSidebarOpen ? 'ml-[200px] md:ml-[250px]' : 'ml-0'}`}>
                <div className="bg-gray-800 text-gray-300 py-4 px-6 flex justify-between items-center">
                    <button 
                        onClick={toggleSidebar} 
                        className="bg-gray-700 text-gray-300 px-4 py-2 rounded-md hover:bg-gray-600"
                    >
                        Toggle Sidebar
                    </button>
                    <h1 className="text-xl font-semibold">Shop Owner Dashboard</h1>
                </div>
                <div className="flex-grow p-6 bg-gray-100">
                {/* Main content goes here */}
                <h2 className="text-2xl font-semibold mb-4">Welcome to your dashboard</h2>
                <p>Here you can manage your shop, view orders, manage products, and more.</p>
                <Pricing />
                </div>
            </div> 
        </div>
    </div>
  );
};

export default ShopDashboard;
