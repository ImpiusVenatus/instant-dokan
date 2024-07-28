import React from 'react';

const SpecialOffers = () => {
  const offers = [
    { id: 1, title: '50% off on Sports', description: 'Get the best deals on sports shoes', image: '/shop/sample1.png' },
    { id: 2, title: 'Buy 1 Get 1 Free', description: 'Exclusive offer on sports shoes', image: '/shop/sample2.png' },
  ];

  return (
    <section className="py-12">
      <div className="flex items-center mb-8">
        <span className="block w-10 h-1 bg-teal-500 mr-4"></span>
        <h2 className="text-3xl font-semibold">Special Offers</h2>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {offers.map(offer => (
          <div key={offer.id} className="border p-4 rounded-md">
            <img src={offer.image} alt={offer.title} className="w-full h-48 object-cover mb-4" />
            <h3 className="text-xl font-semibold">{offer.title}</h3>
            <p className="text-gray-600">{offer.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialOffers;
