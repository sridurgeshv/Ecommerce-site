import React, { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import ProductService from '../services/ProductService'; 
import UserContext from '../../contexts/UserContext';
import './sr.css';

const SearchResultsPage = ({ addToCart }) => {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('q');
  const { profile } = useContext(UserContext);

  useEffect(() => {
    if (searchQuery) {
      ProductService.searchProducts(searchQuery)
        .then((data) => setSearchResults(data))
        .catch((error) => console.error('Error fetching search results:', error));
    }
  }, [searchQuery]);
 
  const handleAddToCart = (product) => {
    if (profile) {
      addToCart(product);
    } else {
      // Redirect user to login page
      window.location.href = '/login';
    }
  };

  return (
    <div className="SearchedProductDisplay">
      <h1>Search Results for "{searchQuery}"</h1>
      {searchResults.map((product) => (
        <div key={product.id} className="searchItem">
          <h2>{product.title}</h2>
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

export default SearchResultsPage;
