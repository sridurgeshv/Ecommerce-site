import React, { useState, useEffect } from 'react';
import AWS from 'aws-sdk';
import './OrderHistory.css';

const OrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
          Prefix: 'orders/', // Assuming orders are stored in a folder named "orders"
        }).promise();

        const orderFiles = response.Contents || [];

        const orders = await Promise.all(orderFiles.map(async (file) => {
          const orderKey = file.Key;
          const orderData = await s3.getObject({
            Bucket: 'ecommerce-webapp',
            Key: orderKey,
          }).promise();

          const orderDetails = JSON.parse(orderData.Body.toString());
          return orderDetails;
        }));

        setOrderHistory(orders);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching order history from Amazon S3:', error);
        // Handle error here
        setLoading(false);
      }
    };

    fetchOrderHistory();
  }, []);

  return (
    <div className="OrderHistory">
      <h2>Order History</h2>
      {loading ? (
        <p>Loading...</p>
      ) : orderHistory.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul>
          {orderHistory.map((order, index) => (
            <li key={index} className="OrderItem">
              {/* Display order details */}
              <p>Order ID: {order.orderId}</p>
              {/* Add more details to display */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderHistory;
