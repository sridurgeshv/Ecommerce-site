import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = ({ cartItems }) => {
  const navigate = useNavigate();

  const getTotalPrice = () => {
    const total = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
    return total.toFixed(2); // Round to 2 decimal places
  };

  const goToCheckout = () => {
    navigate('/checkout', { state: { cartItems } }); // Pass cartItems as state to checkout route
  };

  return (
    <div className="Cart">
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.length === 0 ? (
            <tr>
              <td colSpan="4">Your cart is empty.</td>
            </tr>
          ) : (
            cartItems.map((item) => (
              <tr key={item.id}>
                <td><img src={item.image} alt={item.title} /></td>
                <td>{item.title}</td>
                <td>{item.quantity}</td>
                <td>${item.price}</td>
              </tr>
            ))
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3">Total</td>
            <td>${getTotalPrice()}</td>
          </tr>
        </tfoot>
      </table>
      <button className="check" onClick={goToCheckout} disabled={cartItems.length === 0}>Go to Checkout</button>
    </div>
  );
};

export default Cart;
