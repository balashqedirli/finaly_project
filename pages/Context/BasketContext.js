import React, { createContext, useContext, useState } from 'react';

const BasketContext = createContext();

export const useBasket = () => useContext(BasketContext);

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  const updateQuantity = (id, delta) => {
    setBasket(currentBasket => {
      return currentBasket.map(item => {
        if (item.id === id) {
          const newQuantity = item.quantity + delta;
          return { ...item, quantity: newQuantity >= 0 ? newQuantity : 0 };
        }
        return item;
      }).filter(item => item.quantity > 0);
    });
  };

  const removeFromBasket = (id) => {
    setBasket(currentBasket => currentBasket.filter(item => item.id !== id));
  };

  const addToBasket = (product) => {
    const existingItem = basket.find((item) => item.id === product.id);
    if (existingItem) {
      setBasket(
        basket.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setBasket([...basket, { ...product, quantity: 1, price: 10 }]);
    }
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket, updateQuantity, removeFromBasket  }}>
      {children}
    </BasketContext.Provider>
  );
};

