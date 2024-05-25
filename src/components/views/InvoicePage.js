import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Invoice from '../services/Invoice';

const InvoicePage = ({ orderDetails, setSelectedOrderDetails }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.orderDetails) {
      setSelectedOrderDetails(location.state.orderDetails);
    }
  }, [location.state, setSelectedOrderDetails]);

  // Calculate the total from the orderDetails
  const total = orderDetails?.items?.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )?.toFixed(2);


  return (
    <div>
      {orderDetails ? (
        <Invoice orderDetails={orderDetails} total={total} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default InvoicePage;