import React, { useEffect, useState, useContext } from 'react';
import './ProductDisplay.css';
import UserContext from '../../contexts/UserContext';

const Men = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const { profile } = useContext(UserContext);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/men's clothing`)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

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
    <div className="Men">
      <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="ProductItem">
          <h2 title={product.title}>{truncateTitle(product.title)}</h2> {/* Set full title as tooltip */}  
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

export default Men;
