import React, { useState, useEffect, useContext } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import ProductService from '../services/ProductService';
import SearchResults from '../services/SearchResults';
import UserContext from '../../contexts/UserContext';

const SearchResultsPage = () => {
  const { profile } = useContext(UserContext);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('q') || '';
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    ProductService.getAllProducts()
      .then((data) => {
        const filteredProducts = data.filter((product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSearchResults(filteredProducts);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, [searchQuery]);

  const addToCart = (product) => {
    if (profile) {
      // Add the product to the cart (implement your logic here)
      console.log('Added to cart:', product);
    } else {
      // Redirect user to login page
      navigate('/login');
    }
  };

  return <SearchResults results={searchResults} addToCart={addToCart} />;
};

export default SearchResultsPage;