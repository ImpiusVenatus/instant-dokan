"use client"
import React from 'react';

interface DashboardOverviewCardProps {
  title: string;
  value: string | number;
}

const DashboardOverviewCard: React.FC<DashboardOverviewCardProps> = ({ title, value }) => {
  return (
    <div className="bg-[#1A1D1F] p-4 rounded-xl shadow-md">
      <h3 className="text-gray-400 text-sm">{title}</h3>
      <p className="text-gray-100 text-2xl font-bold">{value}</p>
    </div>
  );
};

export default DashboardOverviewCard;
