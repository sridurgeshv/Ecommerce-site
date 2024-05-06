import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import './todaysdeal.css';

const Button = ({ children }) => {
  return (
    <button className="tod">{children}</button>
  );
};

const TodayDeals = () => {
  const { t } = useTranslation(); // Use the useTranslation hook

  const products = [
    { id: 1, name: "Hoodie", imageUrl: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTRCcxPfQBehAsdK6ioql9PMPryA-tJdgAGHl09zHo9337Par33ZuMSGL_ookGDCEbc0j4tZAvIszK0qG_aQD8neF_XLexE53VApQFM1cZ7x0RTUwfUpiIs", discount: 15 },
    { id: 2, name: "T-Shirt", imageUrl: "https://images.pexels.com/photos/6046231/pexels-photo-6046231.jpeg?auto=compress&cs=tinysrgb&w=600", discount: 10 },
    { id: 3, name: 'Sneakers', imageUrl: 'https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&w=600', discount: 20 },
  ];

  return (
    <div className="today-container max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">{t('common.Today\'s Deals')}</h1>

      <h2 className="text-xl mb-4">{t('common.Recommended deals for you')}</h2>

      <div className="grid grid-cols-3 gap-4 mb-8">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-auto object-cover"
            />

            <div className="bg-[#ffdbdb] text-[#d0011b] text-sm font-semibold px-2 py-1 inline-block rounded">
              {product.discount}% off
            </div>

            <p className="text-sm">{product.name}</p>
          </div>
        ))}
      </div>

      <div className="flex space-x-4 mb-8">
        <Button className="tod">All Deals</Button>
      </div>
    </div>
  );
};

export default TodayDeals;
