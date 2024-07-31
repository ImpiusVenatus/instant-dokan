import { Menu, ShoppingCart } from 'lucide-react';
import React from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border p-4 rounded-md relative group overflow-hidden cursor-pointer">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
      <h3 className="text-xl font-semibold text-center mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-4 text-center">${product.price}</p>
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <button className="px-4 py-2 bg-teal-500 text-white rounded-md transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
          <ShoppingCart />
        </button>
        <button className="ml-2 px-4 py-2 bg-teal-500 text-white rounded-md transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
          <a href='/product'><Menu /></a>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
