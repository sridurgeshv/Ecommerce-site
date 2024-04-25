import React from 'react';
import { useTranslation } from 'react-i18next'; 
import watchImage from '../assets/watch.jpg';
import Sneakers from '../assets/sneakers.jpg';
import Ring from '../assets/ring.jpeg';
import './giftIdeas.css';

const GiftIdeas = ({ addToCart }) => {
  const { t } = useTranslation(); // Use the useTranslation hook
  const products = [
    { id: 1, title: 'Rolex Watch', price: 150, image: watchImage },
    { id: 2, title: 'Sneakers', price: 25, image: Sneakers },
    { id: 3, title: 'Diamond Ring', price: 95, image: Ring },
  ];

  return (
    <div className="GiftIdeas">
      <h1>{t('common.Find the perfect gift')}</h1>
      <br />
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="ProductItems">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GiftIdeas;
