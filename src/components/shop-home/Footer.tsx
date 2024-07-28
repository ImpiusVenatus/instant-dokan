import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 bg-[#051616] text-white text-center">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Shoepify. All rights reserved.</p>
        <p className='text-gray-400 text-sm pt-4'>Powered by Instant-Dokan</p>
      </div>
    </footer>
  );
};

export default Footer;
