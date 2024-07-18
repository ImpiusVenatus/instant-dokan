"use client"
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Product 1', Revenue: 4000 },
  { name: 'Product 2', Revenue: 3000 },
  { name: 'Product 3', Revenue: 2000 },
  { name: 'Product 4', Revenue: 2780 },
  { name: 'Product 5', Revenue: 1890 },
  { name: 'Product 6', Revenue: 2390 },
  { name: 'Product 7', Revenue: 3490 },
];

const RevenueBarChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Revenue" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default RevenueBarChart;
