import React, { createContext, useState, useContext } from 'react';

const OrderContext = createContext();

export const useOrder = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState(null);

  const placeOrder = (orderData) => {
    setOrder(orderData);
    // In a real application, you would send this data to a server here
  };

  return (
    <OrderContext.Provider value={{ order, placeOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

