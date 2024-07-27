import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      <div className="flex items-center space-x-8">
        <div className="text-lg font-bold">BEVERLY</div>
        <ul className="flex space-x-4">
          <li><a href="/">New Arrivals</a></li>
          <li><a href="/">Best Sellers</a></li>
          <li><a href="/">Hype</a></li>
          <li><a href="/">Footwear</a></li>
          <li><a href="/">Men</a></li>
          <li><a href="/">Women</a></li>
          <li><a href="/">Kids</a></li>
          <li><a href="/">Brands</a></li>
          <li><a href="/">Apparel</a></li>
          <li><a href="/">Sale</a></li>
          <li><a href="/">Gifts</a></li>
          <li><a href="/">Outlet</a></li>
        </ul>
      </div>
      <div className="flex items-center space-x-4">
        <button><i className="icon-search"></i></button>
        <button><i className="icon-user"></i></button>
        <button><i className="icon-heart"></i></button>
        <button><i className="icon-cart"></i></button>
      </div>
    </nav>
  );
};

export default Navbar;
