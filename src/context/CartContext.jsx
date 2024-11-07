import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  createOrderInFirestore,
  fetchCartFromFirestore,
  //updateCartInFirestore,
} from "./../firebaseFunctions";

// Creamos un contexto llamado CartContext, que servirá para compartir el estado del carrito entre diferentes componentes del app.
export const CartContext = createContext();

// Este componente envuelve a otros componentes para proveerles acceso al estado del carrito.
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  // Definimos el estado 'cartItems' que contiene los productos agregados al carrito.

  // Efecto para cargar el carrito desde Firestore al montar el componente
  useEffect(() => {
    const loadCart = async () => {
      try {
        const items = await fetchCartFromFirestore(); // Llamamos a la función que obtiene los productos del carrito desde Firestore
        console.log("Elementos del carrito cargados desde firestore:", items);
        setCartItems(items);
      } catch (error) {
        console.error("Error al cargar el carrito desde firestore:", error);
      }
    };

    loadCart();
  }, []);

  // Función para agregar un producto al carrito
  const addToCart = (newItem) => {
    setCartItems((prevItems) => {
      // Verificar si el item ya existe en el carrito
      const existingItemIndex = prevItems.find(
        (item) => item.id === newItem.id
      );

      if (existingItemIndex) {
        // Si el item ya existe, no lo agregamos de nuevo
        return prevItems;
      }

      // Si el item no existe, lo agregamos al carrito
      return [...prevItems, newItem];
    });
  };

  const removeFromCart = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const handlePurchase = async () => {
    try {
      const orderId = await createOrderInFirestore(cartItems);
      console.log(`Compra realizada con éxito. ID de la orden: ${orderId}`);
      setCartItems([]);
      return orderId;
    } catch (error) {
      console.error("error al realizar la compra: ", error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        handlePurchase,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
