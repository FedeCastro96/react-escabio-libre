import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

// Creamos un contexto llamado CartContext, que servirá para compartir el estado del carrito entre diferentes componentes del app.
export const CartContext = createContext();

// Este componente envuelve a otros componentes para proveerles acceso al estado del carrito.
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  // Definimos el estado 'cartItems' que contiene los productos agregados al carrito.
  // Inicialmente es un array vacío.

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    console.log("Intentando agregar producto:", product); // Log para debugging

    setCartItems((prevItems) => {
      const newItems = [...prevItems, product]; //Creamos un nuevo array que contiene los productos anteriores y el nuevo producto.
      console.log("Nuevo estado del carrito:", newItems); // Log para debugging
      return newItems; // Retornamos el nuevo estado del carrito
    });
  };

  const removeFromCart = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  // Efecto para monitorear cambios en cartItems
  useEffect(() => {
    console.log("Estado actual del carrito:", cartItems); // Imprimimos el estado actual del carrito cada vez que este cambie.
  }, [cartItems]); // El efecto se ejecutará cada vez que cambie 'cartItems' (es la dependencia).

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
