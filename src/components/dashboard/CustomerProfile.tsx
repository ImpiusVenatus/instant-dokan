// components/dashboard/CustomerProfile.tsx
import React from 'react';
import { Avatar, Button } from '@mui/material';
import { Notebook } from 'lucide-react';
import { Customer } from './types';
import { motion } from 'framer-motion'; // Import motion from framer-motion

interface CustomerProfileProps {
  customer: Customer;
  onClose: () => void; // Prop to handle profile closing
}

const CustomerProfile: React.FC<CustomerProfileProps> = ({ customer, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.3 }}
      className="p-6 transition-all duration-500"
    >
      <div className="p-6 rounded-lg">
        {/* Profile Header */}
        <div className="flex items-center mb-6">
          <Avatar alt={customer.name} src="/sadman.jpeg" className="w-16 h-16 mr-4" />
          <div className="flex-grow">
            <h2 className="text-2xl font-semibold text-gray-300">{customer.name}</h2>
            <p className="text-gray-500">@{customer.username}</p>
          </div>
          <div className="flex space-x-4">
            <Button variant="outlined" className='text-white border-transparent bg-teal-400 hover:bg-white hover:text-gray-800 hover:border-teal-400'>Follow</Button>
            <Button variant="outlined" onClick={onClose} className='border-red-300 text-red-300 hover:bg-red-400 hover:text-white hover:border-transparent'>Close</Button>
          </div>
        </div>

        {/* Private Note */}
        <div className="mb-6">
          <label className="block text-gray-300 font-semibold mb-2" htmlFor="private-note">Private note</label>
          <div className="flex items-center mb-2">
            <Notebook className="text-gray-300" />
            <textarea id="private-note" className="w-full h-24 p-2 border rounded border-gray-500 bg-[#1A1D1F]" placeholder="Add a private note..."></textarea>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mb-6">
          <p className="mb-2 text-gray-400"><strong>Email:</strong> {customer.email}</p>
          <p className="mb-2 text-gray-400"><strong>Phone:</strong> {customer.phone}</p>
          <p className="mb-2 text-gray-400"><strong>Website:</strong> {customer.website}</p>
          <div className="flex space-x-4 text-gray-300">
            <a href="#" className="hover:text-gray-800"><i className="fab fa-facebook"></i></a>
            <a href="#" className="hover:text-gray-800"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-gray-800"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="hover:text-gray-800"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        {/* Product List */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-300">Recent Orders</h3>
          <div className="bg-[#272B30] p-4 rounded-lg">
            {customer.orders.map((order, index) => (
              <div key={index} className="flex justify-between items-center p-2 bg-[#1A1D1F] rounded-lg mb-2 shadow-sm">
                <div className="flex items-center">
                  <Avatar alt="Product Image" src="/product.jpeg" className="w-10 h-10 mr-4 bg-red-400" />
                  <div>
                    <p className="text-gray-400 font-semibold">{order.productTitle}</p>
                    <p className="text-gray-500 text-sm">{order.productLink}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-white rounded-xl p-2 text-sm bg-teal-400 font-semibold mr-4">${order.price}</span>
                  <span className="text-gray-500">{order.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CustomerProfile;
