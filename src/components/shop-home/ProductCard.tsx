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
    <div className="border p-4 rounded-md">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-4">${product.price}</p>
      <button className="px-4 py-2 bg-teal-500 text-white rounded-md">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
