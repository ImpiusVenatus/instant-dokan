"use client"
import React, { useState } from 'react';
import Layout from '@/components/DashboardLayout';
import CustomerCard from '@/components/dashboard/CustomerCard';
import CustomerProfile from '@/components/dashboard/CustomerProfile';
import { Customer } from '@/components/dashboard/types';
import { motion } from 'framer-motion';

const customers: Customer[] = [
    {
      id: 1,
      name: 'John Doe',
      username: 'john',
      email: 'john@example.com',
      phone: '123-456-7890',
      website: 'john.com',
      orders: [
        { productTitle: 'Product title 1', productLink: 'ui8.net/product/product-link1', price: 64.00, date: 'Apr 9, 2021' },
        { productTitle: 'Product title 2', productLink: 'ui8.net/product/product-link2', price: 75.00, date: 'May 15, 2021' },
      ],
    },
    {
      id: 2,
      name: 'Jane Smith',
      username: 'jane',
      email: 'jane@example.com',
      phone: '234-567-8901',
      website: 'jane.com',
      orders: [
        { productTitle: 'Product title 3', productLink: 'ui8.net/product/product-link3', price: 85.00, date: 'Jun 1, 2021' },
        { productTitle: 'Product title 4', productLink: 'ui8.net/product/product-link4', price: 95.00, date: 'Jul 4, 2021' },
      ],
    },
    {
      id: 3,
      name: 'Alice Johnson',
      username: 'alice',
      email: 'alice@example.com',
      phone: '345-678-9012',
      website: 'alice.com',
      orders: [
        { productTitle: 'Product title 5', productLink: 'ui8.net/product/product-link5', price: 45.00, date: 'Mar 9, 2021' },
        { productTitle: 'Product title 6', productLink: 'ui8.net/product/product-link6', price: 55.00, date: 'Apr 18, 2021' },
      ],
    },
    {
      id: 4,
      name: 'Bob Brown',
      username: 'bob',
      email: 'bob@example.com',
      phone: '456-789-0123',
      website: 'bob.com',
      orders: [
        { productTitle: 'Product title 7', productLink: 'ui8.net/product/product-link7', price: 75.00, date: 'Jan 20, 2021' },
        { productTitle: 'Product title 8', productLink: 'ui8.net/product/product-link8', price: 65.00, date: 'Feb 14, 2021' },
      ],
    },
    {
      id: 5,
      name: 'Charlie Davis',
      username: 'charlie',
      email: 'charlie@example.com',
      phone: '567-890-1234',
      website: 'charlie.com',
      orders: [
        { productTitle: 'Product title 9', productLink: 'ui8.net/product/product-link9', price: 34.00, date: 'Dec 25, 2020' },
        { productTitle: 'Product title 10', productLink: 'ui8.net/product/product-link10', price: 44.00, date: 'Jan 5, 2021' },
      ],
    },
    {
      id: 6,
      name: 'Dave Evans',
      username: 'dave',
      email: 'dave@example.com',
      phone: '678-901-2345',
      website: 'dave.com',
      orders: [
        { productTitle: 'Product title 11', productLink: 'ui8.net/product/product-link11', price: 54.00, date: 'Nov 30, 2020' },
        { productTitle: 'Product title 12', productLink: 'ui8.net/product/product-link12', price: 64.00, date: 'Dec 10, 2020' },
      ],
    },
    {
      id: 7,
      name: 'Eve Foster',
      username: 'eve',
      email: 'eve@example.com',
      phone: '789-012-3456',
      website: 'eve.com',
      orders: [
        { productTitle: 'Product title 13', productLink: 'ui8.net/product/product-link13', price: 74.00, date: 'Oct 23, 2020' },
        { productTitle: 'Product title 14', productLink: 'ui8.net/product/product-link14', price: 84.00, date: 'Nov 8, 2020' },
      ],
    },
    {
      id: 8,
      name: 'Frank Green',
      username: 'frank',
      email: 'frank@example.com',
      phone: '890-123-4567',
      website: 'frank.com',
      orders: [
        { productTitle: 'Product title 15', productLink: 'ui8.net/product/product-link15', price: 94.00, date: 'Sep 5, 2020' },
        { productTitle: 'Product title 16', productLink: 'ui8.net/product/product-link16', price: 104.00, date: 'Oct 12, 2020' },
      ],
    },
    {
      id: 9,
      name: 'Grace Harris',
      username: 'grace',
      email: 'grace@example.com',
      phone: '901-234-5678',
      website: 'grace.com',
      orders: [
        { productTitle: 'Product title 17', productLink: 'ui8.net/product/product-link17', price: 34.00, date: 'Aug 11, 2020' },
        { productTitle: 'Product title 18', productLink: 'ui8.net/product/product-link18', price: 44.00, date: 'Sep 2, 2020' },
      ],
    },
    {
      id: 10,
      name: 'Henry King',
      username: 'henry',
      email: 'henry@example.com',
      phone: '012-345-6789',
      website: 'henry.com',
      orders: [
        { productTitle: 'Product title 19', productLink: 'ui8.net/product/product-link19', price: 54.00, date: 'Jul 1, 2020' },
        { productTitle: 'Product title 20', productLink: 'ui8.net/product/product-link20', price: 64.00, date: 'Aug 15, 2020' },
      ],
    },
  ];

const CustomersDashboard = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

  const handleCustomerClick = (customer: Customer) => {
    setSelectedCustomer(customer);
  };

  const handleCloseProfile = () => {
    setSelectedCustomer(null);
  };

  return (
    <Layout>
      <div className="flex p-6 transition-all duration-500">
        <div className="w-1/3 pr-6">
          <div className="space-y-4 p-4 bg-[#1A1D1F] rounded-xl">
            {customers.map((customer) => (
              <CustomerCard
                key={customer.id}
                customer={customer}
                onClick={() => handleCustomerClick(customer)}
                isSelected={selectedCustomer?.id === customer.id}
              />
            ))}
          </div>
        </div>
        <div className="w-2/3">
          {selectedCustomer && (
            <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
              className="bg-[#1A1D1F] relative rounded-xl"
            >
              <CustomerProfile customer={selectedCustomer} onClose={handleCloseProfile} />
            </motion.div>
          )}
          {!selectedCustomer && (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-100">Select a customer to view details</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CustomersDashboard;
