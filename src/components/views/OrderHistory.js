import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AWS from 'aws-sdk';
import './OrderHistory.css';
import Invoice from '../services/Invoice';
import UserContext from '../../contexts/UserContext';

const OrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const { profile } = useContext(UserContext);
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    // Check if user is logged in upon component mount
    if (!profile) {
      // Redirect to login page if user is not logged in
      window.location.href = '/login';
      return;
    }

    // Initialize AWS SDK with your credentials
    AWS.config.update({
      accessKeyId: 'AKIA2KFSGM3U6BXOBSU2',
      secretAccessKey: 'WKcps235lqKKMtJ5OLSypE4kDsvwJkmvGOqVBRrR',
      region: 'us-east-1',
    });

    const s3 = new AWS.S3();

    // Fetch order history from Amazon S3
    const fetchOrderHistory = async () => {
      try {
        const response = await s3.listObjectsV2({
          Bucket: 'ecommerce-webapp',
        }).promise();

        const orderFiles = response.Contents || [];

        const orders = await Promise.all(orderFiles.map(async (file) => {
          const orderKey = file.Key;
          if (orderKey.endsWith('.json')) {
            try {
              const orderData = await s3.getObject({
                Bucket: 'ecommerce-webapp',
                Key: orderKey,
              }).promise();

              const orderDetails = JSON.parse(orderData.Body.toString());
              return orderDetails;
            } catch (error) {
              console.error('Error parsing JSON data:', error);
              return null; // Skip parsing errors
            }
          } else {
            return null; // Skip non-JSON files
          }
        }));

        console.log('Orders:', orders); // Add this console log for debugging
        setOrderHistory(orders);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching order history from Amazon S3:', error);
        // Handle error here
        setLoading(false);
      }
    };

    fetchOrderHistory();
  }, [profile]);

  const handleInvoiceClick = (order) => {
    navigate('/invoice', { state: { orderDetails: order } }); // Pass orderDetails as state
  };

  const closeInvoice = () => {
    setSelectedOrder(null); // Close the invoice
  };

    // Function to calculate total price of order items
  function calculateTotal(items) {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  }

  // Function to format timestamp into a readable date string
  function formatDate(timestamp) {
    return new Date(timestamp).toLocaleDateString();
  }

  return (
    <div className="OrderHistory">
      <h2>Your Orders</h2>
      {loading ? (
        <p>Loading...</p>
      ) : orderHistory.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul>
          {orderHistory.map((order, index) => (
            <li key={index} className="OrderItem">
              <div className="order-container">
                <div className="order-details">
                  <div className="order-info">
                    <div>
                      ORDER PLACED<br />
                      {formatDate(order.timestamp)}
                    </div>
                    <div>
                      TOTAL<br />
                      ${calculateTotal(order.items)}
                    </div>
                    <div>
                      SHIP TO<br />
                      {order.userData.name} {order.userData.family_name}
                    </div>
                    <div className="order-number">
                      ORDER # {order.orderId}
                      <br />
                      <a className="order-underline">View order details :</a>                      
                      <button className="order-button" onClick={() => handleInvoiceClick(order)}>
                        Invoice
                      </button>
                    </div>
                  </div>
                  <hr/>
                  <div className="order-status">
                    <div className="text-green-600 font-bold mb-1">
                      Delivered {formatDate(order.timestamp)}
                    </div>
                    <div className="text-sm mb-1">Package was handed to resident</div>
                  </div>
                </div>
                <div className="order-items">
                  {order.items.map((item, index) => (
                    <div key={index} className="order-item">
                      <img
                        alt="Product"
                        src={item.image}
                        className="product-image"
                      />
                      <div className="product-details">
                        <div className="product-name">{item.title}</div>
                        <div className="product-description truncated">{item.description}</div>
                        <div className="product-actions">
                          <button className="bg-yellow-300 text-yellow-800">Buy it again</button>
                          <button className="text-blue-600 underline">View your item</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      {selectedOrder && (
        <div className="invoice-modal">
          <Invoice orderDetails={selectedOrder} />
          <button onClick={closeInvoice}>Close</button>
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
