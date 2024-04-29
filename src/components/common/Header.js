import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import './Header.css';
import UserContext from '../../contexts/UserContext';
import ProductService from '../services/ProductService';
import SearchBar from '../views/SearchBar';

const Header = () => {
  const { t } = useTranslation();
  const { profile, setProfile } = useContext(UserContext);
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch all products from the backend
    ProductService.getAllProducts()
      .then((data) => {
        setSearchResults(data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    localStorage.setItem('language', selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  };

  const handleSearch = (query) => {
    // Filter products based on search query
    const filteredProducts = searchResults.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
  
    // Navigate to the SearchResultsPage with the filtered products as state
    navigate('/search-results', { state: { searchResults: filteredProducts } });
  }; 

  const logout = () => {
    setProfile(null);
    navigate('/login');
    console.log('Logged out');
  };

  return (
    <header className="Header">
      <Link to="/">
        <h1>{t('common.SunnyMart')}</h1>
      </Link>
      <SearchBar onSearch={handleSearch} />
      <nav>
        <select value={language} onChange={handleLanguageChange}>
          <option value="en">EN</option>
          <option value="fr">FR</option>
          <option value="ru">RU</option>
          <option value="zh">ZH</option>
        </select>
        {profile ? (
          <>
            <Link to="/account" className="UserName">{t('common.Hello')}, {profile.username}</Link>
            <button className="logout" onClick={logout}>{t('common.Logout')}</button>
          </>
        ) : (
          <Link to="/login">
            <button className="loginb">{t('common.Login')}</button>
          </Link>
        )}
        <Link to="/cart" className="CartIcon">
          <img src="/cart.png" alt={t('common.Cart')} />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
