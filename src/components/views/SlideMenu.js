import React from 'react';
import { Link } from 'react-router-dom';
import './SlideMenu.css'; // Corrected import statement

const SlideMenu = (props) => {  // Pass props as argument
  const handleClick = () => {
    props.toggleSidebar(); // Call toggleSidebar from props
  };

  return (
    <div id="SlideMenu" className="SlideMenu">
      <span id="slideClose" className="closeButton" onClick={handleClick}>&times;</span>
      <div className="user-info">
        <img src="./user.png" alt="Profile" className="profile-pic" />
        <span class="user-title">Hello, User</span>
      </div>
      <ul>
        <h2>Trending</h2>
        <li><Link to="/deals">Best Deals</Link></li>
        <li><Link to="/">Home</Link></li>
        <br></br>
        <h2>Shop by Category</h2>
        <li><Link to="/men">Men's Fashion</Link></li>
        <li><Link to="/women">Women's Fashion</Link></li>
        <li><Link to="/electronics">Electronics</Link></li>
        <li><Link to="/jewelery">Jewelery</Link></li>
        <h2>Help & Settings</h2>
        <li><Link to="/account">Your Account</Link></li>
        <li><Link to="/contact">Customer Service</Link></li>
      </ul>
    </div>
  );
};

export default SlideMenu;
