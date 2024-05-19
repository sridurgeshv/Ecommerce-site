import React, { useState, useEffect } from 'react';
import { IonIcon } from '@ionic/react';
import { chevronDownOutline, chevronForwardOutline } from 'ionicons/icons';
import './ContactPage.css';

function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "How do I reset my password?",
      answer: "Please visit the login page and click on the 'Forgot Password' link. You will receive an email with instructions on how to reset your password."
    },
    {
      question: "How can I update my account information?",
      answer: "You can update your account information by logging into your account and clicking on the 'My Profile' tab. From there, you can update your contact information, shipping address, and payment methods."
    },
    {
      question: "Can I return an item for a refund?",
      answer: "Yes, we accept returns for a refund within 30 days of purchase. The item must be in its original condition and packaging. Please contact our customer service team to initiate the return process."
    },
    {
      question: "How do I track my order?",
      answer: "To track your order, simply log in to your account and navigate to the 'Order History' section. There, you will find a list of all your past orders along with their current status. Click on the order you wish to track to view detailed tracking information, including the shipment's current location and expected delivery date."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept a variety of payment methods to ensure a convenient shopping experience for our customers. These include major credit cards such as Visa, Mastercard, and American Express, as well as PayPal and bank transfers. Rest assured, all transactions are securely processed to protect your sensitive information."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-content">
        <h2 className="faq-title">FAQs</h2>
        <div className="faq-items">
          {faqData.map((faq, index) => (
            <div className="faq-item" key={index}>
              <button
                className="faq-question"
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index ? "true" : "false"}
                aria-controls={`faq-answer-${index}`}
              >
                {faq.question}
                <IonIcon icon={activeIndex === index ? chevronDownOutline : chevronForwardOutline} />
              </button>
              <div
                className={`faq-answer ${activeIndex === index ? "active" : ""}`}
                id={`faq-answer-${index}`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Support() {
return (
<div className="support-container">
<div className="support-content">
<h2 className="support-title">Need Help? We're Here for You</h2>
<div className="support-grid">
<div className="support-info">
<h3 className="support-subtitle">Have a Question?</h3>
<p className="support-description">
Our friendly customer support team is here to assist you with any
inquiries you may have about our products, orders, or website.
Feel free to reach out!
</p>
</div>
<div className="support-info">
<h3 className="support-subtitle">Ready to Chat?</h3>
<p className="support-description">
Connect with our live chat support for immediate assistance. Look
for the chat icon on our website during business hours.
</p>
</div>
</div>
<div className="support-grid">
<div className="support-info">
<h3 className="support-subtitle">Additional Resources</h3>
<p className="support-detail">Visit our comprehensive FAQ section for answers to common
questions. You can also browse our Help Center for detailed articles and guides.</p>
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