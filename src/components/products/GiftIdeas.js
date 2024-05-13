import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import UserContext from '../../contexts/UserContext'; 
import watchImage from '../assets/watch.jpg';
import Sneakers from '../assets/sneakers.jpg';
import Ring from '../assets/ring.jpg';
import Ps5 from '../assets/ps5.jpg';
import './giftIdeas.css';

const GiftIdeas = ({ addToCart }) => {
  const { profile } = useContext(UserContext);
  const { t } = useTranslation(); // Use the useTranslation hook
  const products = [
    { id: 1, title: 'Rolex Watch', price: 150, image: watchImage },
    { id: 2, title: 'Sneakers', price: 25, image: Sneakers },
    { id: 3, title: 'Diamond Ring', price: 95, image: Ring },
    { id: 4, title: 'PlayStation 5', price: 195, image: Ps5 },
  ];

  const handleAddToCart = (product) => {
    if (profile) {
      addToCart(product);
    } else {
      // Redirect user to login page
      window.location.href = '/login';
    }
  };

  return (
    <div className="GiftIdeas">
      <h1>{t('common.Find the perfect gift')}</h1>
      <br />
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="ProductItems">
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} />
            <div className="productInfo">
            <p className="price">${product.price}</p>
            <button className="addToCart" onClick={() => handleAddToCart(product)}>+ Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GiftIdeas;
