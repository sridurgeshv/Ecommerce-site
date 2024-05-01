import React, { useState, useContext } from 'react';
import ConfirmationModal from './ConfirmationModal';
import './Checkout.css';
import UserPool from '../../UserPool'; // Import the UserPool instance
import UserContext from '../../contexts/UserContext';

const Checkout = ({ clearCart }) => {
  const [userData, setUserData] = useState({
    name: '',
    family_name: '', 
    email: '',
    phone_number: '', 
    address: '', 
    locale: ''
  });

  const { profile } = useContext(UserContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Update user attributes in Cognito
    const user = UserPool.getCurrentUser();
    const attributeList = [];

     // Add attributes to the attribute list
    for (let attribute in userData) {
      attributeList.push({
        Name: attribute,
        Value: userData[attribute]
      });
    }

    try {
      await new Promise((resolve, reject) => {
        user.getSession((err, session) => {
          if (err) {
            reject(err);
            return;
          }
          resolve(session);
        });
      });
  
      await new Promise((resolve, reject) => {
        user.updateAttributes(attributeList, (err, result) => {
          if (err) {
            reject(err);
            return;
          }
          resolve(result);
        });
      });

      // Clear cart and show confirmation modal
      clearCart();
      setShowConfirmationModal(true);
    } catch (error) {
      console.error('Error updating attributes:', error);
      // Handle error here
    }
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

          <label htmlFor="locale">Country</label>
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
