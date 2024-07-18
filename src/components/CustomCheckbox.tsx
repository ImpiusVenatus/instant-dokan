"use client"
import React from 'react';

interface CustomCheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ label, checked, onChange }) => {
  return (
    <label className="flex items-center">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="custom-checkbox"
      />
      <span className="ml-2 text-gray-100">{label}</span>
    </label>
  );
};

export default CustomCheckbox;
