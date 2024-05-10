import React, { createContext, useContext, useState } from 'react';

// Create the context
const OrderContext = createContext();

// Custom hook to consume the context
export const useOrder = () => {
  const context = useContext(OrderContext);

  if (!context) {
    throw new Error('useOrder must be used within an OrderProvider');
  }

  return context;
};

// Provider component to wrap the application and provide the context
export const OrderProvider = ({ children }) => {
  const [orderedItems, setOrderedItems] = useState([]);

  const addOrderedItem = (item) => {
    setOrderedItems([...orderedItems, item]);
  };

  const contextValue = {
    orderedItems,
    addOrderedItem,
  };

  return (
    <OrderContext.Provider value={contextValue}>
      {children}
    </OrderContext.Provider>
  );
};
