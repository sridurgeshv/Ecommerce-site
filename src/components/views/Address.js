import React, { useState, useEffect, useContext } from 'react';
import './address.css';
import { useNavigate } from 'react-router-dom';
import UserPool from '../../UserPool'; // Import the UserPool instance
import UserContext from '../../contexts/UserContext'; // Import the UserContext

const Address = () => {
  const [formData, setFormData] = useState({
    name: '',
    family_name: '',
    email: '',
    phone_number: '',
    address: '',
    locale: '',
  });
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { profile } = useContext(UserContext); // Access the profile from UserContext

  useEffect(() => {
    // Check if user is logged in upon component mount
    const user = UserPool.getCurrentUser();
    if (user) {
      user.getSession((err, session) => {
        if (err) {
          console.error('Error fetching session:', err);
          setIsLoading(false);
          return;
        }
        user.getUserAttributes((err, attributes) => {
          if (err) {
            console.error('Error fetching user attributes:', err);
            setIsLoading(false);
            return;
          }
          const userAttributes = {};
          attributes.forEach((attribute) => {
            userAttributes[attribute.getName()] = attribute.getValue();
          });
          setFormData(userAttributes);
          setIsLoading(false);
        });
      });
    } else {
      setIsLoading(false);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submission logic here
    console.log(formData);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!profile) {
    // Display alert if user is not logged in
    alert('You need to log in before viewing the address page.');
    // Redirect to login page
    navigate('/login');
    return null; // Return null to prevent rendering the component
  }

  return (
    <div className="address-form">
      <h2>Shipping Label Address Form</h2>

      <div className="form-field">
        <label htmlFor="name">Name</label>
        <input
          placeholder="Your name"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="form-field">
        <label htmlFor="address">Address</label>
        <textarea
          placeholder="Your address"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="form-field">
        <label htmlFor="phone_number">Phone Number</label>
        <input
          placeholder="Your phone number"
          type="text"
          id="phone_number"
          name="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
        />
      </div>

      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input
          placeholder="Your email"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="form-field">
        <label htmlFor="locale">Country</label>
        <input
          placeholder="Your country"
          type="text"
          id="locale"
          name="locale"
          value={formData.locale}
          onChange={handleChange}
        />
      </div>

      <div className="form-field">
        <button
          className="submit-button"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Address;
