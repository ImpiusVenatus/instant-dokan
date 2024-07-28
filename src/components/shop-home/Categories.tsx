import React from 'react';

const Categories = () => {
  const categories = [
    { id: 1, name: 'Sports', image: '/shop/sports.png' },
    { id: 2, name: 'Formal', image: '/shop/formal.png' },
    { id: 3, name: 'Casual', image: '/shop/casual.png' },
  ];

  return (
    <section className="py-12 cursor-pointer">
      <div className="flex items-center mb-8">
        <span className="block w-10 h-1 bg-teal-500 mr-4"></span>
        <h2 className="text-3xl font-semibold">Categories</h2>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {categories.map(category => (
          <div key={category.id} className="border p-4 rounded-md text-center">
            <img src={category.image} alt={category.name} className="w-full h-48 object-cover mb-4" />
            <h3 className="text-xl font-semibold">{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
