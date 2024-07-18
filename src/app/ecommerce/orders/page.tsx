"use client"
import React, { useState } from 'react';
import Layout from '@/components/DashboardLayout';
import { Order } from '@/components/dashboard/types';
import { motion } from 'framer-motion';

const orders: Order[] = [
  { id: 1, productTitle: 'Product title 1', productLink: 'ui8.net/product/product-link1', price: 64.00, date: 'Apr 9, 2021' },
  { id: 2, productTitle: 'Product title 2', productLink: 'ui8.net/product/product-link2', price: 75.00, date: 'May 15, 2021' },
  // Add remaining orders...
];

const OrdersDashboard = () => {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const handleOrderClick = (order: Order) => {
    setSelectedOrder(order);
  };

  const handleCloseProfile = () => {
    setSelectedOrder(null);
  };

  return (
    <Layout>
      <div className="p-6 transition-all duration-500">
        <div className="bg-[#1A1D1F] p-4 rounded-xl">
          <table className="w-full text-gray-100">
            <thead>
              <tr>
                <th className="text-left py-2">Product Title</th>
                <th className="text-left py-2">Product Link</th>
                <th className="text-left py-2">Price</th>
                <th className="text-left py-2">Date</th>
                <th className="text-left py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-t border-gray-600">
                  <td className="py-2">{order.productTitle}</td>
                  <td className="py-2">
                    <a href={order.productLink} className="text-blue-400" target="_blank" rel="noopener noreferrer">
                      {order.productLink}
                    </a>
                  </td>
                  <td className="py-2">{order.price.toFixed(2)}</td>
                  <td className="py-2">{order.date}</td>
                  <td className="py-2 flex flex-wrap gap-2">
                    <button
                      className="bg-blue-400 hover:bg-blue-500 transition-all text-white font-semibold py-1 px-4 rounded"
                      onClick={() => handleOrderClick(order)}
                    >
                      View
                    </button>
                    <button
                      className="bg-green-400 hover:bg-green-500 transition-all text-white font-semibold py-1 px-4 rounded"
                      onClick={() => alert('Order processed')}
                    >
                      Process
                    </button>
                    <button
                      className="bg-red-400 hover:bg-red-500 transition-all text-white font-semibold py-1 px-4 rounded"
                      onClick={() => alert('Order cancelled')}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {selectedOrder && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="bg-[#1A1D1F] mt-4 p-4 rounded-xl"
          >
            <h2 className="text-xl font-bold mb-4 text-gray-300">Order Details</h2>
            <p className='text-gray-400'><strong>Product Title:</strong> {selectedOrder.productTitle}</p>
            <p className='text-gray-400'><strong>Product Link:</strong> <a href={selectedOrder.productLink} className="text-blue-400" target="_blank" rel="noopener noreferrer">{selectedOrder.productLink}</a></p>
            <p className='text-gray-400'><strong>Price:</strong> {selectedOrder.price.toFixed(2)}</p>
            <p className='text-gray-400'><strong>Date:</strong> {selectedOrder.date}</p>
            <button
              className="bg-red-400 hover:bg-red-500 text-white font-bold py-1 px-2 rounded mt-4"
              onClick={handleCloseProfile}
            >
              Close
            </button>
          </motion.div>
        )}
      </div>
    </Layout>
  );
};

export default OrdersDashboard;
