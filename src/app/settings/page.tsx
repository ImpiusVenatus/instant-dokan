"use client"
import React, { useState } from 'react';
import Layout from '@/components/DashboardLayout';

const SettingsPage: React.FC = () => {
  const [shopName, setShopName] = useState<string>('');
  const [shopDescription, setShopDescription] = useState<string>('');
  const [shopLogo, setShopLogo] = useState<File | null>(null);
  const [primaryColor, setPrimaryColor] = useState<string>('#000000');
  const [secondaryColor, setSecondaryColor] = useState<string>('#ffffff');
  const [paymentMethods, setPaymentMethods] = useState<string[]>(['PayPal', 'Credit Card']);
  const [shippingMethods, setShippingMethods] = useState<string[]>(['Standard', 'Express']);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setShopLogo(e.target.files[0]);
    }
  };

  const handleCheckboxChange = (method: string, setState: React.Dispatch<React.SetStateAction<string[]>>, state: string[]) => {
    if (state.includes(method)) {
      setState(state.filter(item => item !== method));
    } else {
      setState([...state, method]);
    }
  };

  return (
    <Layout>
      <div className="p-6 space-y-6">
        <h1 className="text-2xl text-gray-100">Shop Settings</h1>
        
        <div className="space-y-6">
          {/* General Settings */}
          <div className="bg-[#1A1D1F] p-4 rounded-xl">
            <h2 className="text-xl text-gray-100 mb-4">General Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-400">Shop Name</label>
                <input
                  type="text"
                  value={shopName}
                  onChange={(e) => setShopName(e.target.value)}
                  className="w-full p-2 rounded-md bg-gray-700 text-gray-100"
                />
              </div>
              <div>
                <label className="block text-gray-400">Shop Description</label>
                <textarea
                  value={shopDescription}
                  onChange={(e) => setShopDescription(e.target.value)}
                  className="w-full p-2 rounded-md bg-gray-700 text-gray-100"
                />
              </div>
              <div>
                <label className="block text-gray-400">Shop Logo</label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="w-full p-2 rounded-md bg-gray-700 text-gray-100"
                />
              </div>
            </div>
          </div>

          {/* Shop Appearance */}
          <div className="bg-[#1A1D1F] p-4 rounded-xl">
            <h2 className="text-xl text-gray-100 mb-4">Shop Appearance</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-400">Primary Color</label>
                <input
                  type="color"
                  value={primaryColor}
                  onChange={(e) => setPrimaryColor(e.target.value)}
                  className="w-full p-2 rounded-md bg-gray-700 text-gray-100"
                />
              </div>
              <div>
                <label className="block text-gray-400">Secondary Color</label>
                <input
                  type="color"
                  value={secondaryColor}
                  onChange={(e) => setSecondaryColor(e.target.value)}
                  className="w-full p-2 rounded-md bg-gray-700 text-gray-100"
                />
              </div>
            </div>
          </div>

          {/* Payment Settings */}
          <div className="bg-[#1A1D1F] p-4 rounded-xl">
            <h2 className="text-xl text-gray-100 mb-4">Payment Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-400">Payment Methods</label>
                <div className="flex flex-col space-y-2">
                  {['PayPal', 'Credit Card', 'Bank Transfer'].map((method) => (
                    <label key={method} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={paymentMethods.includes(method)}
                        onChange={() => handleCheckboxChange(method, setPaymentMethods, paymentMethods)}
                        className="form-checkbox h-5 w-5 text-teal-400 transition duration-150 ease-in-out"
                      />
                      <span className="ml-2 text-gray-100">{method}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Shipping Settings */}
          <div className="bg-[#1A1D1F] p-4 rounded-xl">
            <h2 className="text-xl text-gray-100 mb-4">Shipping Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-400">Shipping Methods</label>
                <div className="flex flex-col space-y-2">
                  {['Standard', 'Express', 'Overnight'].map((method) => (
                    <label key={method} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={shippingMethods.includes(method)}
                        onChange={() => handleCheckboxChange(method, setShippingMethods, shippingMethods)}
                        className="form-checkbox h-5 w-5 text-teal-400 transition duration-150 ease-in-out"
                      />
                      <span className="ml-2 text-gray-100">{method}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button className="bg-teal-400 text-gray-100 py-2 px-4 rounded-md">
            Save Settings
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default SettingsPage;
