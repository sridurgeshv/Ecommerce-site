import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import { AffinidiLoginButton, useAffinidiProfile } from '@affinidi/affinidi-react-auth';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import i18n from '../i18n'; // Adjust the path based on your file structure
import './Header.css';

const Header = () => {
  const { setProfile } = useContext(UserContext);
  const { isLoading, error, profile, handleLogout } = useAffinidiProfile({
    authCompleteUrl: '/api/affinidi-auth/complete'
  });

  const [localProfile, setLocalProfile] = useState(null);
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');
  const { t } = useTranslation(); // Use the useTranslation hook

  useEffect(() => {
    // Convert objects to strings to compare them
    const currentProfileStr = JSON.stringify(profile);
    const localProfileStr = JSON.stringify(localProfile);

    // Only update if the stringified versions differ
    if (currentProfileStr !== localProfileStr) {
      setLocalProfile(profile);
      setProfile(profile); // assuming setProfile comes from a context and is stable
    }
  }, [profile])

  const logout = () => {
    handleLogout();
    window.location.href = "/";
  };

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    localStorage.setItem('language', selectedLanguage); // Store language preference in local storage
    i18n.changeLanguage(selectedLanguage); // Change the language using i18next
  };  

  const renderLoginState = () => {
    if (isLoading) {
      return <p>Loading...</p>;
    }

    if (error) {
      handleLogout();
      return (
        <div>
          <p>Unable to load user data. Please try again later.</p>
        </div>
      );
    }
    if (profile) {
      return (
        <div>
          <select value={language} onChange={handleLanguageChange}>
            <option value="en">EN</option>
            <option value="fr">FR</option>
            <option value="ru">RU</option>
            <option value="zh">ZH</option>
          </select>
          <Link to="/account" className="UserName">{t('common.Hello')}, {profile.givenName}</Link>
          <button onClick={logout}>{t('common.Logout')}</button>
        </div>
      );
    }

    return <AffinidiLoginButton />;
  };

  return (
    <header className="Header">
      <Link to="/">
        <h1>{t('common.Stack Shop')}</h1>
      </Link>
      <nav>
        {renderLoginState()}
        <Link to="/cart" className="CartIcon">
          <img src="/cart.png" alt={t('common.Cart')}/>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
