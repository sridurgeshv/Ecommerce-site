import React from 'react';
import './todaysdeal.css';

const Button = ({children}) => {
  return (
    <button className="bg-[#ffe8ac] text-[#d19200]">
      {children} 
    </button>
  )
};

const TodayDeals = () => {
  const products = [
    { id: 1, name: "Hoodie",  imageUrl: "hoodie1.png", discount: 15 },
    { id: 2, name: "T-Shirt", imageUrl: "tee.png", discount: 10 }, 
    { id: 3, name: 'Sneakers', imageUrl: 'sneaker2.png', discount: 20 },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Today's Deals</h1>

      <h2 className="text-xl mb-4">Recommended deals for you</h2>

      <div className="grid grid-cols-3 gap-4 mb-8">
        {products.map((product) => (
          <div key={product.id} className="space-y-2">
            <img 
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-auto"
              width="150"
              height="150"
            />

            <div className="bg-[#ffdbdb] text-[#d0011b] text-sm font-semibold px-2 py-1 inline-block rounded">
              {product.discount}% off 
            </div>

            <p className="text-sm">{product.name}</p>
          </div>
        ))}
      </div>

      <div className="flex space-x-4 mb-8">
        <Button>All Deals</Button>
      </div>
    </div>
  );
};

export default TodayDeals;