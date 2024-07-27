"use client"
import React from 'react';
import Layout from '@/components/DashboardLayout';
import GrowthLineChart from '@/components/dashboard/GrowthLineChart';
import RevenueBarChart from '@/components/dashboard/RevenueBarChart';
import { Customer, Order } from '@/components/dashboard/types';

const DashboardPage: React.FC = () => {
  const totalOrders: number = 20;
  const totalRevenue: number = orders.reduce((acc, order) => acc + order.price, 0);
  const averageOrderValue: number = totalRevenue / totalOrders;
  const topCustomers = customers.slice(0, 5);
  const topProducts = orders.slice(0, 5);

  return (
    <Layout>
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#EFF0A3] p-4 rounded-xl shadow-md">
            <h3 className="text-gray-800 text-sm">Total Orders</h3>
            <p className="text-[#212121] text-2xl font-bold">20</p>
          </div>
          <div className="bg-[#D8DFD9] p-4 rounded-xl shadow-md">
            <h3 className="text-gray-800 text-sm">Total Revenue</h3>
            <p className="text-[#212121] text-2xl font-bold">${totalRevenue}</p>
          </div>
          <div className="bg-[#CFDECA] p-4 rounded-xl shadow-md">
            <h3 className="text-gray-800 text-sm">Average Order Value</h3>
            <p className="text-[#212121] text-2xl font-bold">${averageOrderValue}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-[#D8DFD9] p-4 rounded-xl">
            <h3 className="text-gray-400 text-sm mb-4">Sales Growth</h3>
            <GrowthLineChart />
          </div>
          <div className="bg-[#D8DFD9] p-4 rounded-xl">
            <h3 className="text-gray-400 text-sm mb-4">Revenue by Product</h3>
            <RevenueBarChart />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#CFDECA] p-4 rounded-xl shadow-md">
            <h3 className="text-gray-800 text-lg font-bold mb-4">Top Customers</h3>
            <ul className="space-y-2">
              {topCustomers.map((customer) => (
                <li key={customer.id} className="text-[#212121]">
                  {customer.name} - {customer.email}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#D8DFD9] p-4 rounded-xl shadow-md">
            <h3 className="text-gray-800 text-lg font-bold mb-4">Top Products</h3>
            <ul className="space-y-2">
              {topProducts.map((product) => (
                <li key={product.id} className="text-[#212121]">
                  {product.productTitle} - ${product.price.toFixed(2)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;


// Sample data
const customers: Customer[] = [
  {
    id: 1,
    name: 'John Doe',
    username: 'john',
    email: 'john@example.com',
    phone: '123-456-7890',
    website: 'john.com',
    orders: [
      { id: 1, productTitle: 'Product title 1', productLink: 'ui8.net/product/product-link1', price: 64.00, date: 'Apr 9, 2021' },
      { id: 1, productTitle: 'Product title 2', productLink: 'ui8.net/product/product-link2', price: 75.00, date: 'May 15, 2021' },
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
      { id: 1, productTitle: 'Product title 3', productLink: 'ui8.net/product/product-link3', price: 85.00, date: 'Jun 1, 2021' },
      { id: 1, productTitle: 'Product title 4', productLink: 'ui8.net/product/product-link4', price: 95.00, date: 'Jul 4, 2021' },
    ],
  },
  // Add more customers...
];

const orders: Order[] = [
  { id: 1, productTitle: 'Product title 1', productLink: 'ui8.net/product/product-link1', price: 64.00, date: 'Apr 9, 2021' },
  { id: 2, productTitle: 'Product title 2', productLink: 'ui8.net/product/product-link2', price: 75.00, date: 'May 15, 2021' },
  // Add remaining orders...
];
