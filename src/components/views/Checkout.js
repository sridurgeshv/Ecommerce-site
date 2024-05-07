import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from './ConfirmationModal';
import { v4 as uuidv4 } from 'uuid'; // Import uuid library
import AWS from 'aws-sdk';
import './Checkout.css';
import UserPool from '../../UserPool'; // Import the UserPool instance
import UserContext from '../../contexts/UserContext';
import { useCart } from '../../contexts/CartContext';

// Initialize AWS SDK with your credentials
AWS.config.update({
  accessKeyId: 'AKIA2KFSGM3U6BXOBSU2',
  secretAccessKey: 'WKcps235lqKKMtJ5OLSypE4kDsvwJkmvGOqVBRrR',
  region: 'us-east-1',
  endpoint: 'https://s3.amazonaws.com',
});

const Checkout = ({ cartItems, clearCart }) => {
  const { updateCart } = useCart(); 
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: '',
    family_name: '', 
    email: '',
    phone_number: '', 
    address: '', 
    locale: ''
  });

  const [phoneNumberError, setPhoneNumberError] = useState('');
  const { profile } = useContext(UserContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const s3 = new AWS.S3();

  const handleSubmit = async (e) => {
    e.preventDefault();

   // Validate phone number format
    const phoneNumberRegex = /^\+\d{1,3}\d{10}$/; // Country code + 10 digits
    if (!phoneNumberRegex.test(userData.phone_number)) {
      setPhoneNumberError('Please enter a valid phone number in the format: +country code and 10 digits');
      return; // Prevent form submission
    } else {
      setPhoneNumberError('');
    }

    // Generate a unique order ID
    const orderId = uuidv4();
  
    // Store the order details along with the order ID
    const orderDetails = {
      orderId,
      items: cartItems,
      userData,
      timestamp: new Date().toISOString(),
      userId: profile.username,
    };

     // Associate the order ID with the user ID
     orderDetails.userId = profile.username; // Assuming profile.username contains the user ID

     // Convert orderDetails to JSON
    const orderDetailsJson = JSON.stringify(orderDetails);

    // Upload order details to Amazon S3
    const params = {
      Bucket: 'ecommerce-webapp',
      Key: `${orderId}.json`, // Use orderId as the file name
      Body: orderDetailsJson,
      ContentType: 'application/json',
    };

    try {
      await s3.upload(params).promise();
      console.log('Order details uploaded to Amazon S3');
  
      // Clear cart using the clearCart function
      clearCart();
  
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
  
      setShowConfirmationModal(true);
    } catch (error) {
      console.error('Error uploading order details to Amazon S3:', error);
      // Handle error here
    }
  }; 

  const closeConfirmationModal = () => {
    setShowConfirmationModal(false);
    navigate('/order-history');
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
          {phoneNumberError && <p className="ErrorMessage">{phoneNumberError}</p>}

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
