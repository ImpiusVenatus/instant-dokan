import React from 'react';

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  status: 'available' | 'disabled';
  alignment: 'grid' | 'list';
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, price, status, alignment }) => {
  return (
    <div className={`relative bg-[#272B30] shadow-lg rounded-lg overflow-hidden ${alignment === 'list' ? 'flex w-full' : 'max-w-[15rem]'}`}>
      <img src={image} alt={name} className={`object-cover ${alignment === 'list' ? 'w-1/3 max-w-[16rem] h-48' : 'w-full h-64'}`} />
      <div
        className={`absolute top-1 left-1 rounded-lg px-2 py-1 text-xs font-semibold bg-gray-200 ${status === 'available' ? 'text-green-500' : 'text-red-500'} cursor-pointer`}
      >
        {status === 'available' ? 'Available' : 'Disabled'}
      </div>
      <div className={`p-4 ${alignment === 'list' ? 'w-2/3' : ''}`}>
        <h3 className="text-lg font-semibold text-gray-300">{name}</h3>
        <p className="text-gray-500">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
