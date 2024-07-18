"use client"
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', Sales: 4000 },
  { name: 'Feb', Sales: 3000 },
  { name: 'Mar', Sales: 2000 },
  { name: 'Apr', Sales: 2780 },
  { name: 'May', Sales: 1890 },
  { name: 'Jun', Sales: 2390 },
  { name: 'Jul', Sales: 3490 },
  { name: 'Aug', Sales: 2000 },
  { name: 'Sep', Sales: 2780 },
  { name: 'Oct', Sales: 1890 },
  { name: 'Nov', Sales: 2390 },
  { name: 'Dec', Sales: 3490 },
];

const GrowthLineChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Sales" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default GrowthLineChart;
