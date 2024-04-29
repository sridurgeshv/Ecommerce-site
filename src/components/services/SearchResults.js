import React, { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import './sr.css';

const SearchResults = ({ results, addToCart }) => {
  const { profile } = useContext(UserContext);

  const handleAddToCart = (product) => {
    if (profile) {
      addToCart(product);
    } else {
      // Redirect user to login page
      window.location.href = '/login';
    }
  };

  const truncateTitle = (title, maxLines = 2) => {
    const words = title.split(' ');
    if (words.length <= maxLines) return title;

    return `${words.slice(0, maxLines).join(' ')}...`;
  };

  return (
    <div className="search-results">
      <h2>Search Results</h2>
      <div className="ProductDisplay">
        {results.map((product) => (
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
    </div>
  );
};

export default SearchResults;
