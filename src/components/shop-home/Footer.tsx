import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 bg-gray-800 text-white text-center">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Your Shop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
