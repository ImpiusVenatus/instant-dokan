import React from 'react';
import Link from 'next/link';

interface BreadcrumbProps {
  items: { label: string; href: string }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="mb-6" aria-label="breadcrumb">
      <ol className="list-reset flex text-gray-600">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <span className="mx-2 text-gray-400">/</span>}
            {index === items.length - 1 ? (
              <span className="font-semibold text-gray-800">{item.label}</span>
            ) : (
              <Link href={item.href} className="hover:underline hover:text-teal-600 transition-colors duration-200">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
