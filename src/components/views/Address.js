import React, { useState } from 'react';
import './address.css';

const Address = () => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        country: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your submission logic here
        console.log(formData);
    };

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

            <div className="form-row">
                <div className="form-field">
                    <label htmlFor="city">City</label>
                    <input
                        placeholder="Your city"
                        id="city"
                        name="city"
                        type="text"
                        value={formData.city}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="state">State</label>
                    <input
                        placeholder="Your state"
                        id="state"
                        name="state"
                        type="text"
                        value={formData.state}
                        onChange={handleChange}
                    />
                </div>

            </div>

            <div className="form-row">
                <div className="form-field">
                    <label htmlFor="zip">ZIP</label>
                    <input
                        placeholder="Your ZIP code"
                        id="zip"
                        name="zip"
                        type="text"
                        value={formData.zip}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="country">Country</label>
                    <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                    >
                            <option value="">Select a country</option>
                            <optgroup label="Africa">
                            <option value="AF">Afghanistan</option>
                            <option value="DZ">Algeria</option>
                            <option value="AO">Angola</option>
                            ...
                            <option value="ZW">Zimbabwe</option>
                            </optgroup>

                            <optgroup label="Asia">
                            <option value="AM">Armenia</option>
                            <option value="BH">Bahrain</option>
                            ...
                            <option value="IN">India</option>
                            <option value="YE">Yemen</option>
                            </optgroup>

                             <optgroup label="South America">
                            <option value="AR">Argentina</option>
                           <option value="BO">Bolivia</option>
                           <option value="BR">Brazil</option>
                             ...
                         <option value="VE">Venezuela</option>
                        </optgroup>
                             ...
                        </select>
                    </div>
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
