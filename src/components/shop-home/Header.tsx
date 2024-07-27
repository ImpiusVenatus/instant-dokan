import React from 'react';
import { ShoppingCart, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-gray-800 text-white">
      <div className="text-2xl font-bold">ShopName</div>
      <nav className="space-x-6">
        <a href="/" className="hover:underline">Home</a>
        <a href="/shop" className="hover:underline">Shop</a>
      </nav>
      <div className="flex items-center space-x-4">
        <input type="text" placeholder="Search" className="px-4 py-2 rounded-md" />
        <ShoppingCart />
        <User />
      </div>
    </header>
  );
};

export default Header;
