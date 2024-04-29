import React, { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import './sr.css';

const SearchResults = ({ results, addToCart }) => {
  const { profile } = useContext(UserContext);

  // Get the first product from the search results (assuming the search is accurate)
  const product = results[0]; // Access the first element

  const handleAddToCart = () => {
    if (profile) {
      addToCart(product);
    } else {
      window.location.href = '/login';
    }
  };

  return (
    <div className="search-results">
      <h2>Search Results</h2>
      <div className="ProductDisplay">
        {product && ( // Only render if a product exists
          <div key={product.id} className="ProductItem">
            <h2 title={product.title}>{product.title}</h2>
            <img src={product.image} alt={product.title} />
            <div className="productInfo">
              <p>${product.price}</p>
              <button onClick={handleAddToCart}>+ Cart</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
