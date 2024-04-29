import React from 'react';
import { useOrder } from '../../contexts/OrderContext';
import './OrderHistory.css';

const OrderHistory = () => {
  const { orderedItems } = useOrder();

  return (
    <div className="OrderHistory">
      <h2>Order History</h2>
      {orderedItems.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <ul>
          {orderedItems.map((order, index) => (
            <li key={index} className="OrderItem">
              {/* Display ordered items */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderHistory;
