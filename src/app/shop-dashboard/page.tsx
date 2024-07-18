"use client"
import React from 'react';
import Layout from '@/components/DashboardLayout';
import DashboardOverviewCard from '@/components/dashboard/DashboardOverviewCard';
import GrowthLineChart from '@/components/dashboard/GrowthLineChart';
import RevenueBarChart from '@/components/dashboard/RevenueBarChart';
import { Customer, Order } from '@/components/dashboard/types';
import TopCustomers from '@/components/dashboard/TopCustomers';
import TopProducts from '@/components/dashboard/TopProducts';

const DashboardPage: React.FC = () => {
  const totalOrders: number = 20;
  const totalRevenue: number = orders.reduce((acc, order) => acc + order.price, 0);
  const averageOrderValue: number = totalRevenue / totalOrders;
  const topCustomers = customers.slice(0, 5); // Top 5 customers
  const topProducts = orders.slice(0, 5); // Top 5 products

  return (
    <Layout>
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <DashboardOverviewCard title="Total Orders" value={totalOrders} />
          <DashboardOverviewCard title="Total Revenue" value={`$${totalRevenue.toFixed(2)}`} />
          <DashboardOverviewCard title="Average Order Value" value={`$${averageOrderValue.toFixed(2)}`} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-[#1A1D1F] p-4 rounded-xl">
            <h3 className="text-gray-400 text-sm mb-4">Sales Growth</h3>
            <GrowthLineChart />
          </div>
          <div className="bg-[#1A1D1F] p-4 rounded-xl">
            <h3 className="text-gray-400 text-sm mb-4">Revenue by Product</h3>
            <RevenueBarChart />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TopCustomers customers={topCustomers} />
          <TopProducts products={topProducts} />
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
