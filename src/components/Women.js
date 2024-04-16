import React from 'react';
import './Women.css';
import shoppingCartImage from '../assets/shopping-cart.png'; 

const Women = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'Hoodie', price: 10, imageUrl: 'hoodie.png' },
    { id: 2, name: 'Yellow Blazer', price: 25, imageUrl: 'tshirt2.jpg' },
  ];

  return (
    <div className="Women">
      {products.map((product) => (
        <div key={product.id} className="ProductItem">
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

export default Women;
