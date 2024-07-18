import { ReactNode, useState } from 'react';
import Sidebar from './SideBar';
import { AlignLeft, Bell, Search } from 'lucide-react';
import Avatar from '@mui/material/Avatar';
import { Badge } from '@mui/material';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex !bg-[#616770]">
      <Sidebar isOpen={isSidebarOpen} />
      <motion.div
        initial={{ marginLeft: '0px' }}
        animate={{ marginLeft: isSidebarOpen ? '250px' : '0px' }}
        transition={{ duration: 0.5 }}
        className="flex flex-col flex-1 min-h-screen"
      >
        <div className="bg-[#1A1D1F] text-gray-300 py-4 px-6 mx-4 my-2 flex justify-between items-center transition-all duration-500 sticky top-0 rounded-xl z-50">
          <button 
            onClick={toggleSidebar} 
            className="bg-gray-700 text-gray-300 px-4 py-2 rounded-md hover:bg-gray-600 transition-all duration-500"
          >
            <AlignLeft />
          </button>
          <div className="flex items-center w-full max-w-xl mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                className="w-full pl-10 pr-4 py-2 bg-gray-800 text-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-300"
                placeholder="Search..."
              />
            </div>
          </div>
          <div className='flex items-center gap-8'>
            <Badge color="error" variant="dot" invisible={false} className='hover:cursor-pointer'>
              <Bell />
            </Badge>
            <Avatar alt="Remy Sharp" src="/sadman.jpeg" className='hover:cursor-pointer' />
          </div>
        </div>
        <div className="flex-grow px-4 bg-[#616770] transition-all duration-500 overflow-auto custom-scrollbar" style={{ height: 'calc(100vh - 250px)', marginTop: '10px' }}>
          <div className='custom-scrollbar overflow-auto'>
          {children}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Layout;
