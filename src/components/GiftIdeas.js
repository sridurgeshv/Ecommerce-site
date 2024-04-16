import React from 'react';
import './giftIdeas.css';
import shoppingCartImage from '../assets/shopping-cart.png'; 

const GiftIdeas = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'Rolex Watch', price: 150, imageUrl: 'watch.jpg' },
    { id: 2, name: 'Sneakers', price: 25, imageUrl: 'sneakers.jpg' },
    { id: 3, name: 'Diamond Ring', price: 95, imageUrl: 'ring.jpg' },
  ];

  return (
    <div className="GiftIdeas">
      <h1>Find the perfect gift</h1> <br></br>
      <h2>Gifts for your loved ones</h2>
      {products.map((product) => (
        <div key={product.id} className="ProductItems">
          <img src={product.imageUrl} alt={product.name} />
          <h2>{product.name}</h2>
          <p>${product.price}</p>
          <img
            src={shoppingCartImage}
            alt="Add to Cart"
            onClick={() => addToCart(product)}
            className="AddToCartButton"
          />
        </div>
      ))}
    </div>
  );
};

export default GiftIdeas;
