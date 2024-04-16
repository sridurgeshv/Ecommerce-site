import React from 'react';
import shoppingCartImage from '../assets/shopping-cart.png'; 
import './ProductDisplay.css';

const ProductDisplay = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'Hoodie', price: 10, imageUrl: 'hoodie.png' },
    { id: 2, name: 'T-Shirt', price: 15, imageUrl: 'tshirt1.jpg' },
    { id: 3, name: 'Wedding Gown', price: 150, imageUrl: 'dress.jpg' },
  ];

  return (
    <div className="ProductDisplay">
      <h1>Welcome to our shop</h1> 
      <br></br>
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

export default ProductDisplay;