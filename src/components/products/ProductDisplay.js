import React, { useEffect, useState, useContext } from 'react';
import './ProductDisplay.css';
import UserContext from '../../contexts/UserContext';

const ProductDisplay = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const { profile } = useContext(UserContext);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  };

  const truncateTitle = (title, maxLines = 2) => {
    const words = title.split(' ');
    if (words.length <= maxLines) return title;

    return `${words.slice(0, maxLines).join(' ')}...`;
  };

  const handleAddToCart = (product) => {
    if (profile) {
      addToCart(product);
    } else {
      // Redirect user to login page
      window.location.href = '/login';
    }
  };

  return (
    <div className="ProductDisplay">
      {products.map((product) => (
        <div key={product.id} className="ProductItem">
          <h2 title={product.title}>{truncateTitle(product.title)}</h2>
          <img src={product.image} alt={product.title} />          
          <div className="productInfo">
          <p>${product.price}</p>
          <button onClick={() => handleAddToCart(product)}>+ Cart</button>
        </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDisplay;
