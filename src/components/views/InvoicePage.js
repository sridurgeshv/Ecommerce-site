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

  return (
    <div>
      {orderDetails ? (
        <Invoice orderDetails={orderDetails} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default InvoicePage;