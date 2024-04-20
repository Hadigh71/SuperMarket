import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems(currentItems => {
      const foundIndex = currentItems.findIndex(cartItem => cartItem.id === item.id);
      if (foundIndex !== -1) {
        // If item exists, update quantity
        const updatedItems = [...currentItems];
        updatedItems[foundIndex].quantity += 1;
        return updatedItems;
      } else {
        // If item doesn't exist, add new item with quantity 1
        return [...currentItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems(currentItems => currentItems.filter(item => item.id !== id));
  };

  const incrementQuantity = (id) => {
    setCartItems(currentItems => 
      currentItems.map(item => 
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setCartItems(currentItems => 
      currentItems.map(item => 
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      ).filter(item => item.quantity > 0)  // Remove item if quantity drops to 0
    );
  };

  const getTotalCartAmount = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.quantity * parseFloat(item.price));
    }, 0);
  };
  

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, incrementQuantity, decrementQuantity, getTotalCartAmount }}>
      {children}
    </CartContext.Provider>
  );
};
