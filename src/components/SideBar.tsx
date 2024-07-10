"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface SidebarProps {
  isOpen: boolean;
}

export function Sidebar({ isOpen }: SidebarProps) {
  return (
    <motion.div 
      initial={{ x: '-100%' }}
      animate={{ x: isOpen ? 0 : '-100%' }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 text-gray-300 py-8 md:w-[250px] w-[200px] min-h-screen fixed z-50"
    >
      <div className='flex justify-center mb-8'>
        <Image 
          src="/vercel.svg"
          width={100}
          height={100}
          alt='logo'
          className='bg-white'
        />
      </div>
      <ul className="space-y-4 px-4">
        <li className="hover:bg-gray-700 p-2 rounded-md cursor-pointer">Dashboard</li>
        <li className="hover:bg-gray-700 p-2 rounded-md cursor-pointer">Orders</li>
        <li className="hover:bg-gray-700 p-2 rounded-md cursor-pointer">Products</li>
        <li className="hover:bg-gray-700 p-2 rounded-md cursor-pointer">Customers</li>
        <li className="hover:bg-gray-700 p-2 rounded-md cursor-pointer">Reports</li>
        <li className="hover:bg-gray-700 p-2 rounded-md cursor-pointer">Settings</li>
      </ul>
    </motion.div>
  );
};
