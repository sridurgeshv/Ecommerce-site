import React, { useState } from 'react';
import ConfirmationModal from './ConfirmationModal';
import './Checkout.css';

const Checkout = ({ clearCart }) => {
  const [userData, setUserData] = useState({
    name: '',
    family_name: '', 
    email: '',
    phone_number: '', 
    address: '', 
    locale: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with userData (e.g., submit order)
    clearCart();
    setShowConfirmationModal(true);
  };

  const closeConfirmationModal = () => {
    setShowConfirmationModal(false);
    // Navigate to home or any other relevant page after confirmation
  };

  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  return (
    <div className="CheckoutContainer">
      <div className="Checkout">
        <h2>Checkout</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">First Name</label>
          <input 
            type="text" 
            name="name" 
            id="name"
            value={userData.name} 
            onChange={handleChange}
          />

          <label htmlFor="family_name">Last Name</label>
          <input 
            type="text" 
            name="family_name" 
            id="family_name"
            value={userData.family_name} 
            onChange={handleChange} 
            required 
          />

          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            name="email" 
            id="email"
            value={userData.email} 
            onChange={handleChange} 
            required 
          />

          <label htmlFor="phone_number">Phone Number</label>
          <input 
            type="text" 
            name="phone_number" 
            id="phone_number"
            value={userData.phone_number} 
            onChange={handleChange} 
            required 
          />

          <label htmlFor="address">Address</label>
          <input 
            type="text" 
            name="address" 
            id="address"
            value={userData.address} 
            onChange={handleChange} 
            required 
          />

          <label htmlFor="locale">Locale (Postal Code & Country)</label>
          <input 
            type="text" 
            name="locale" 
            id="locale"
            value={userData.locale} 
            onChange={handleChange} 
            required 
          />

          <button type="submit" className="ContinueButton">Submit Order</button>
        </form>
      </div>
      {showConfirmationModal && (
        <ConfirmationModal closeModal={closeConfirmationModal} />
      )}
    </div>
  );
};

export default Checkout;
