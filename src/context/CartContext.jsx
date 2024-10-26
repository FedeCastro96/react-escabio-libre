import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    console.log("Intentando agregar producto:", product); // Log para debugging
    setCartItems((prevItems) => {
      const newItems = [...prevItems, product];
      console.log("Nuevo estado del carrito:", newItems); // Log para debugging
      return newItems;
    });
  };

  // Efecto para monitorear cambios en cartItems
  useEffect(() => {
    console.log("Estado actual del carrito:", cartItems);
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
