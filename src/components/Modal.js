import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Modal.css';

const Modal = ({ closeModal }) => {
  const navigate = useNavigate();

  const goToCart = () => {
    closeModal();
    navigate('/cart');
  };

  return (
    <div className="ModalOverlay">
      <div className="Modal">
        <p>Item successfully added to cart!</p>
        <button onClick={goToCart}>Go to Cart</button>
        <button onClick={closeModal}>Continue Shopping</button>
      </div>
    </div>
  );
};

export default Modal;