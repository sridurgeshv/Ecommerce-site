import React, { useState, useEffect } from 'react';
import './address.css';
import UserPool from '../../UserPool'; // Import the UserPool instance

const Address = () => {
    const [formData, setFormData] = useState({
        name: '',
        family_name: '',
        email: '',
        phone_number: '',
        address: '',
        locale: ''
    });
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Check if user is logged in upon component mount
        const user = UserPool.getCurrentUser();
        setIsLoggedIn(!!user); // Set isLoggedIn to true if user is logged in
        if (user) {
            user.getSession((err, session) => {
                if (err) {
                    console.error('Error fetching session:', err);
                    return;
                }
                user.getUserAttributes((err, attributes) => {
                    if (err) {
                        console.error('Error fetching user attributes:', err);
                        return;
                    }
                    const userAttributes = {};
                    attributes.forEach((attribute) => {
                        userAttributes[attribute.getName()] = attribute.getValue();
                    });
                    setFormData(userAttributes);
                });
            });
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

    if (!isLoggedIn) {
        return <div>You need to be logged in to view this page.</div>;
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
