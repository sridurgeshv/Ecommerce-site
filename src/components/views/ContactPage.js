import React, { useState, useEffect } from 'react';
import './ContactPage.css';

// Input component
const Input = ({ id, placeholder, type }) => (
<input id={id} placeholder={placeholder} type={type} className="input" />
);

// Textarea component
const Textarea = ({ id, placeholder }) => (
<textarea id={id} placeholder={placeholder} className="textarea" />
);

function FAQs() {
return (
<div className="faq-container">
<div className="faq-content">
<h2 className="faq-title">FAQs</h2>
<div className="faq-items">
<details className="faq-item">
<summary className="faq-question">How do I reset my password?</summary>
<p className="faq-answer">
Please visit the login page and click on the "Forgot Password" link. You will receive an email with
instructions on how to reset your password.
</p>
</details>
<details className="faq-item">
<summary className="faq-question">How can I update my account information?</summary>
<p className="faq-answer">
You can update your account information by logging into your account and clicking on the "My Profile" tab.
From there, you can update your contact information, shipping address, and payment methods.
</p>
</details>
<details className="faq-item">
<summary className="faq-question">Can I return an item for a refund?</summary>
<p className="faq-answer">
Yes, we accept returns for a refund within 30 days of purchase. The item must be in its original condition
and packaging. Please contact our customer service team to initiate the return process.
</p>
</details>
<details className="faq-item">
<summary className="faq-question">How do I track my order?</summary>
<p className="faq-answer">
To track your order, simply log in to your account and navigate to the "Order History" section. There, you will find a list of all your past orders along with their current status. Click on the order you wish to track to view detailed tracking information, including the shipment's current location and expected delivery date.
</p>
</details>
<details className="faq-item">
<summary className="faq-question">What payment methods do you accept?</summary>
<p className="faq-answer">
We accept a variety of payment methods to ensure a convenient shopping experience for our customers. These include major credit cards such as Visa, Mastercard, and American Express, as well as PayPal and bank transfers. Rest assured, all transactions are securely processed to protect your sensitive information.
</p>
</details>
</div>
</div>
</div>
);
}

function Support() {
return (
<div className="support-container">
<div className="support-content">
<h2 className="support-title">Support</h2>
<div className="support-grid">
<div className="support-info">
<h3 className="support-subtitle">Contact Us</h3>
<p className="support-description">
If you have any questions or need assistance, you can contact us
using the information below:
</p>
</div>
<div className="support-info">
<h3 className="support-subtitle">Customer Service</h3>
<p className="support-description">
If you have any questions or need assistance, you can contact our
customer service team during our business hours:
</p>
</div>
</div>
<div className="support-grid">
<div className="support-info">
<h3 className="support-subtitle">Email</h3>
<p className="support-detail">support@example.com</p>
</div>
<div className="support-info">
<h3 className="support-subtitle">Phone</h3>
<p className="support-detail">1-800-123-4567</p>
</div>
</div>
</div>
</div>
);
}

function ContactForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if all required fields are filled
    if (!firstName ||!lastName ||!email ||!message) {
      setNotification({ show: true, message: 'Please fill out all fields', type: 'error' });
      return;
    }

    try {
      const response = await fetch('https://formspree.io/f/xwkgzpwn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ firstName, lastName, email, message })
      });

      if (response.ok) {
        setNotification({ show: true, message: 'Form submitted successfully', type: 'success' });
      } else {
        setNotification({ show: true, message: 'Form submission failed', type: 'error' });
      }
    } catch (error) {
      setNotification({ show: true, message: 'Error submitting form', type: 'error' });
    }
  };

  useEffect(() => {
    if (notification.show) {
      const timer = setTimeout(() => {
        setNotification({ show: false, message: '', type: '' });
      }, 3000); // 3 seconds

      // Cleanup function to clear the timeout if the component unmounts
      return () => clearTimeout(timer);
    }
  }, [notification]);

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-header">
          <h1 className="contact-title">Contact Us</h1>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label htmlFor="firstName" className="input-label">First Name :</label><br />
              <input id="firstName" placeholder="Enter your first name" type="text" className="input" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
            </div>
            <div className="input-container">
              <label htmlFor="lastName" className="input-label">Last Name :</label><br />
              <input id="lastName" placeholder="Enter your last name" type="text" className="input" onChange={(e) => setLastName(e.target.value)} value={lastName} />
            </div>
            <div className="input-container">
              <label htmlFor="email" className="input-label">Email :</label><br />
              <input id="email" placeholder="Enter your email address" type="email" className="input" onChange={(e) => setEmail(e.target.value)} value={email} />
            </div>
            <div className="input-container">
              <label htmlFor="message" className="input-label">Message :</label><br />
              <textarea id="message" placeholder="Enter your message" rows="3" className="input-msg" onChange={(e) => setMessage(e.target.value)} value={message} />
            </div>
            <div className="button-container">
              <button type="submit" className="submit-button">Submit</button>
            </div>
          </form>
          {notification.show && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}
        </div>
      </div>      
    </div>
  );
}

function ContactPage() {
return (
<>
<FAQs />
<Support />
<ContactForm />
</>
);
}

export default ContactPage;