import React from 'react';
import { Avatar } from '@mui/material';
import { Customer } from './types';

interface CustomerCardProps {
  customer: Customer;
  onClick: () => void;
  isSelected: boolean;
}

const CustomerCard: React.FC<CustomerCardProps> = ({ customer, onClick, isSelected }) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center p-4 border-b border-b-gray-700 cursor-pointer rounded-xl ${
        isSelected ? 'bg-[#272B30]' : ''
      }`}
    >
      <Avatar alt={customer.name} src="/sadman.jpeg" className="w-10 h-10 mr-4" />
      <div>
        <p className={`text-gray-400 font-semibold ${isSelected ? 'text-gray-200' : ''}`}>{customer.name}</p>
        <p className={`text-gray-500 ${isSelected ? 'text-gray-300' : ''}`}>@{customer.username}</p>
      </div>
    </div>
  );
};

export default CustomerCard;
