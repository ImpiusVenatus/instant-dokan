import React from 'react';

const Categories = () => {
  const categories = [
    { id: 1, name: 'Electronics', image: '/sadman.jpeg' },
    { id: 2, name: 'Fashion', image: '/sadman.jpeg' },
    { id: 3, name: 'Home & Kitchen', image: '/sadman.jpeg' },
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl text-center mb-8">Categories</h2>
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
