"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { Tabs } from "../ui/tabs";
import { Search, ChevronDown } from "lucide-react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative inline-block text-left z-50" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-center items-center h-full w-full rounded-md border border-gray-600 shadow-sm px-4 py-2 bg-[#272B30] text-sm font-medium text-gray-300 hover:bg-[#1A1D1F] transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400"
      >
        Actions
        <ChevronDown className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-[#272B30] text-gray-300 ring-1 ring-black ring-opacity-5"
        >
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-100" role="menuitem">
              Activate
            </a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-100" role="menuitem">
              Disable
            </a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-100" role="menuitem">
              Delete
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export function ProductTab({ alignment, handleAlignment }: { alignment: string; handleAlignment: (newAlignment: string) => void; }) {
  const [productsAlignment, setProductsAlignment] = useState(alignment);

  const products: { image: string; name: string; price: number; status: 'available' | 'disabled'; }[] = [
    {
      image: '/sadman.jpeg',
      name: 'Product 1',
      price: 29.99,
      status: 'available',
    },
    {
      image: '/sadman.jpeg',
      name: 'Product 2',
      price: 49.99,
      status: 'disabled',
    },
    {
      image: '/sadman.jpeg',
      name: 'Product 3',
      price: 49.99,
      status: 'disabled',
    },
    {
      image: '/sadman.jpeg',
      name: 'Product 4',
      price: 49.99,
      status: 'disabled',
    },
    {
      image: '/sadman.jpeg',
      name: 'Product 5',
      price: 49.99,
      status: 'disabled',
    },
    {
      image: '/sadman.jpeg',
      name: 'Product 6',
      price: 49.99,
      status: 'disabled',
    },
    // Add more products as needed
  ];

  const tabs = [
    {
      title: 'All',
      value: "allProducts",
      content: (alignment: "grid" | "list") => (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-4">
          <div className="flex w-full gap-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                className="w-full pl-10 pr-4 py-2 bg-[#272B30] border border-gray-600 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-300"
                placeholder="Search..."
              />
            </div>
            <Dropdown />
          </div>
          <div className={`grid ${alignment === 'list' ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'} gap-6 mt-6`}>
            {products.map((product, index) => (
              <ProductCard key={index} {...product} alignment={alignment} />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: 'Available',
      value: "availableProducts",
      content: (alignment: "grid" | "list") => (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-4">
          <div className="flex w-full gap-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                className="w-full pl-10 pr-4 py-2 bg-[#272B30] border border-gray-600 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-300"
                placeholder="Search..."
              />
            </div>
            <Dropdown />
          </div>
          <div className={`grid ${alignment === 'list' ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'} gap-6 mt-6`}>
            {products
              .filter(product => product.status === 'available')
              .map((product, index) => (
                <ProductCard key={index} {...product} alignment={alignment} />
              ))}
          </div>
        </div>
      ),
    },
    {
      title: 'Disabled',
      value: "disabledProducts",
      content: (alignment: "grid" | "list") => (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-4">
          <div className="flex w-full gap-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                className="w-full pl-10 pr-4 py-2 bg-[#272B30] border border-gray-600 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-300"
                placeholder="Search..."
              />
            </div>
            <Dropdown />
          </div>
          <div className={`grid ${alignment === 'list' ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'} gap-6 mt-6`}>
            {products
              .filter(product => product.status === 'disabled')
              .map((product, index) => (
                <ProductCard key={index} {...product} alignment={alignment} />
              ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col w-full gap-4">
      <Tabs
        tabs={tabs}
        activeTabClassName="bg-teal-400 text-white"
        tabClassName="text-gray-300 hover:font-bold hover:bg-accent hover:text-gray-800"
        contentClassName="transition-all duration-500 ease-in-out"
        onChangeAlignment={alignment => {
          setProductsAlignment(alignment);
          handleAlignment(alignment);
          localStorage.setItem("alignment", alignment);
        }}
      />
    </div>
  );
}
