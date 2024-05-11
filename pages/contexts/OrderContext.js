import React, { createContext, useState, useContext } from "react";

const OrderContext = createContext();

export const useOrder = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const removeOrder = (orderId) => {
    setOrders((currentOrders) =>
      currentOrders.filter((order, index) => index !== orderId)
    );
  };

  const addOrder = (order) => {
    setOrders([...orders, order]);
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder, removeOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
