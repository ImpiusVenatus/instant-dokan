import React from 'react';
import { ShoppingCart, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-[#051616] text-white">
      <div className="text-2xl font-bold">Shoepify</div>
      <nav className="space-x-6">
        <a href="/" className="hover:text-teal-400 transition duration-300">Home</a>
        <a href="/shop" className="hover:text-teal-400 transition duration-300">Shop</a>
      </nav>
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-teal-700 transition duration-300">
          <ShoppingCart className="text-white" />
        </button>
        <button className="p-2 rounded-full hover:bg-teal-700 transition duration-300">
          <User className="text-white" />
        </button>
      </div>
    </header>
  );
};

export default Header;
