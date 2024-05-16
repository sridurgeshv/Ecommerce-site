import React from 'react';
import { useTranslation } from 'react-i18next';
import './todaydeal.css';

const Button = ({ children }) => {
  return (
    <button className="deal-button">{children}</button>
  );
};

const TodayDeals = () => {
  const { t } = useTranslation();

  const products = [
    { id: 1, name: "Hoodie", imageUrl: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTRCcxPfQBehAsdK6ioql9PMPryA-tJdgAGHl09zHo9337Par33ZuMSGL_ookGDCEbc0j4tZAvIszK0qG_aQD8neF_XLexE53VApQFM1cZ7x0RTUwfUpiIs", discount: 15 },
    { id: 2, name: "T-Shirt", imageUrl: "https://images.pexels.com/photos/6046231/pexels-photo-6046231.jpeg?auto=compress&cs=tinysrgb&w=600", discount: 10 },
    { id: 3, name: 'Sneakers', imageUrl: 'https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&w=600', discount: 20 },
    { id: 4, name: 'Trendy Womenswear', imageUrl: "https://i.pinimg.com/236x/63/01/14/6301144011be61c416a94622c88ed84c.jpg", discount:30 },
  ];

  return (
    <div className="deals-container">
      <h1 className="deals-title">{t('common.Today\'s Deals')}</h1>
      <h2 className="deals-subtitle">{t('common.Recommended deals for you')}</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <span className="discount-badge">{product.discount}% off</span>
            <p className="product-name">{product.name}</p>
          </div>
        ))}
      </div>
      <div className="action-buttons">
        <Button className="all-deals-btn">All Deals</Button>
      </div>
    </div>
  );
};

export default TodayDeals;
