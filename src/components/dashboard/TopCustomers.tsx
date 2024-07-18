"use client"
import React from 'react';
import { Customer } from '@/components/dashboard/types';

interface TopCustomersProps {
  customers: Customer[];
}

const TopCustomers: React.FC<TopCustomersProps> = ({ customers }) => {
  return (
    <div className="bg-[#1A1D1F] p-4 rounded-xl shadow-md">
      <h3 className="text-gray-100 text-lg font-bold mb-4">Top Customers</h3>
      <ul className="space-y-2">
        {customers.map((customer) => (
          <li key={customer.id} className="text-gray-100">
            {customer.name} - {customer.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopCustomers;
