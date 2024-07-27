import React from 'react';

const SpecialOffers = () => {
  const offers = [
    { id: 1, title: '50% off on Electronics', description: 'Get the best deals on electronics', image: '/sadman.jpeg' },
    { id: 2, title: 'Buy 1 Get 1 Free', description: 'Exclusive offer on fashion products', image: '/sadman.jpeg' },
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl text-center mb-8">Special Offers</h2>
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
