import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './sbar.css';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    // Redirect to search results page with the search query
    if (searchQuery.trim() !== '') {
      navigate(`/search-results?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="search-bar-container">
      <input
        className="search-input"
        placeholder="Search..."
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="search-button" onClick={handleSearch}>
        <svg
          className="search-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
