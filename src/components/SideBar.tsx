// components/Sidebar.tsx
import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown, Calendar, Clipboard, LayoutDashboard, MessageCircle, ShoppingCart } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar = ({ isOpen }: SidebarProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isEcommerceOpen, setIsEcommerceOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('');

  const toggleEcommerce = () => {
    setIsEcommerceOpen(!isEcommerceOpen);
  };

  useEffect(() => {
    if (pathname) {
      setActiveItem(getActiveItem(pathname));
    }
  }, [pathname]);

  const getActiveItem = (pathname: string): string => {
    switch (pathname) {
      case '/shop-dashboard':
        return 'Dashboard';
      case '/ecommerce':
        return 'Ecommerce';
      case '/ecommerce/products':
        return 'Products';
      case '/ecommerce/customers':
        return 'Customers';
      case '/calendar':
        return 'Calendar';
      case '/chat':
        return 'Chat';
      case '/tasks':
        return 'Tasks';
      default:
        return '';
    }
  };

  const handleItemClick = (pathname: string) => {
    router.push(pathname);
  };

  return (
    <motion.div 
      initial={{ x: '-100%' }}
      animate={{ x: isOpen ? 0 : '-100%' }}
      transition={{ duration: 0.5 }}
      className="bg-[#1A1D1F] text-gray-300 py-8 md:w-[250px] w-[200px] min-h-screen fixed z-50 rounded-xl m-2"
    >
      <div className='flex justify-center mb-8'>
        <Image 
          src="/vercel.svg"
          width={100}
          height={100}
          alt='logo'
          className='bg-white'
        />
      </div>
      <ul className="space-y-4 px-4">
        <li 
          className={`hover:bg-gray-700 p-2 rounded-md cursor-pointer flex items-center gap-2 ${activeItem === 'Dashboard' ? 'bg-gray-700' : ''}`}
          onClick={() => handleItemClick('/shop-dashboard')}
        >
          <LayoutDashboard /> Dashboard
        </li>
        <li className="relative">
          <div 
            className={`hover:bg-gray-700 p-2 rounded-md cursor-pointer flex items-center justify-between ${activeItem === 'Ecommerce' ? 'bg-gray-700' : ''}`}
            onClick={toggleEcommerce}
          >
            <div className="flex items-center gap-2">
              <ShoppingCart /> Ecommerce
            </div>
            <ChevronDown />
          </div>
          <AnimatePresence>
            {isEcommerceOpen && (
              <motion.ul
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="ml-4 mt-2 space-y-2"
              >
                <li 
                  className={`hover:bg-gray-700 p-2 rounded-md cursor-pointer flex items-center gap-2 ${activeItem === 'Products' ? 'bg-gray-700' : ''}`}
                  onClick={() => handleItemClick('/ecommerce/products')}
                >
                  Products
                </li>
                <li 
                  className={`hover:bg-gray-700 p-2 rounded-md cursor-pointer flex items-center gap-2 ${activeItem === 'Customers' ? 'bg-gray-700' : ''}`}
                  onClick={() => handleItemClick('/ecommerce/customers')}
                >
                  Customers
                </li>
                <li 
                  className={`hover:bg-gray-700 p-2 rounded-md cursor-pointer flex items-center gap-2 ${activeItem === 'Orders' ? 'bg-gray-700' : ''}`}
                  onClick={() => handleItemClick('/ecommerce/orders')}
                >
                  Orders
                </li>
              </motion.ul>
            )}
          </AnimatePresence>
        </li>
        <li 
          className={`hover:bg-gray-700 p-2 rounded-md cursor-pointer flex items-center gap-2 ${activeItem === 'Calendar' ? 'bg-gray-700' : ''}`}
          onClick={() => handleItemClick('/calendar')}
        >
          <Calendar /> Calendar
        </li>
        <li 
          className={`hover:bg-gray-700 p-2 rounded-md cursor-pointer flex items-center gap-2 ${activeItem === 'Chat' ? 'bg-gray-700' : ''}`}
          onClick={() => handleItemClick('/chat')}
        >
          <MessageCircle /> Chat
        </li>
        <li 
          className={`hover:bg-gray-700 p-2 rounded-md cursor-pointer flex items-center gap-2 ${activeItem === 'Tasks' ? 'bg-gray-700' : ''}`}
          onClick={() => handleItemClick('/tasks')}
        >
          <Clipboard /> Tasks
        </li>
      </ul>
    </motion.div>
  );
};

export default Sidebar;
