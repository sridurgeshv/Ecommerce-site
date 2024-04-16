import React from 'react';
import './Men.css';
import shoppingCartImage from '../assets/shopping-cart.png'; 

const Men = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'Hoodie', price: 10, imageUrl: 'hoodie.png' },
    { id: 2, name: 'T-Shirt', price: 15, imageUrl: 'tshirt.jpg' },
  ];

  return (
    <div className="Men">
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

export default Men;
