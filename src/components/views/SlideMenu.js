import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import './SlideMenu.css';

const SlideMenu = (props) => {
  const { profile } = useContext(UserContext);

  const handleClick = () => {
    props.toggleSidebar();
  };

  // Function to close the sidebar when a category is clicked
  const handleCategoryClick = () => {
    props.toggleSidebar();
  };

  return (
    <div id="SlideMenu" className="SlideMenu">
      <span id="slideClose" className="closeButton" onClick={handleClick}>&times;</span>
      <div className="user-info">
        <img src="./user.png" alt="Profile" className="profile-pic" />
        <span className="user-title">Hello, {profile ? profile.username : 'User'}</span>
      </div>
      <ul>
        <h2>Trending</h2>
        <li><Link to="/deals" onClick={handleCategoryClick}>Best Deals</Link></li>
        <li><Link to="/" onClick={handleCategoryClick}>Home</Link></li>
        <br></br>
        <h2>Shop by Category</h2>
        <li><Link to="/men" onClick={handleCategoryClick}>Men's Fashion</Link></li>
        <li><Link to="/women" onClick={handleCategoryClick}>Women's Fashion</Link></li>
        <li><Link to="/electronics" onClick={handleCategoryClick}>Electronics</Link></li>
        <li><Link to="/jewelery" onClick={handleCategoryClick}>Jewelry</Link></li>
        <h2>Help & Settings</h2>
        <li><Link to="/account" onClick={handleCategoryClick}>Your Account</Link></li>
        <li><Link to="/contact" onClick={handleCategoryClick}>Customer Service</Link></li>
      </ul>
    </div>
  );
};

export default SlideMenu;
