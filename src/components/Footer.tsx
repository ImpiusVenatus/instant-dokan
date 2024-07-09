"use client"

import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-gray-900 text-gray-300 py-8"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
          <ul className='flex flex-col gap-4'>
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/products" className="hover:text-white">Products</a></li>
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
          <ul className="flex space-x-4">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <Facebook className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <Instagram className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <Linkedin className="w-6 h-6" />
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className='flex flex-col gap-4'>
            <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
            <p>Email: buckyypayment@gmail.com</p>
            <p>Phone: +8801717158473</p>
            <p>Address: House-104, Block-D, Road-4, Banani, <br/> Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p>&copy; {new Date().getFullYear()} Instant Dokan. All rights reserved.</p>
      </div>
    </motion.div>
  );
};

