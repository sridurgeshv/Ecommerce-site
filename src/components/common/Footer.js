import React from 'react';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <p>
          <a href="/about">About Us</a> |
          <a href="/contact">Contact Us</a> |
          <a href="/help">Help</a>
        </p>
        <p>
          <a href="https://www.instagram.com/SunnyMart">
            <img className="footer-icon" src="assets/instagram.png" alt="Instagram" />
          </a>
          <a href="https://twitter.com/SunnyMart">
            <img className="footer-icon" src="assets/twitter.png" alt="Twitter" />
          </a>
        </p>
        <p>
          <img className="footer-icon" src="assets/visa.png" alt="Visa" />
          <img className="footer-icon" src="assets/master.png" alt="Mastercard" />
          <img className="footer-icon" src="assets/paypal.png" alt="PayPal" />
        </p>
        <p>SunnyMart © 2024</p>
      </div>
    </div>
  );
};

export default Footer;
