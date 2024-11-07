import { useContext, useState, useEffect } from "react";
import {
  removeFromCartInFirestore,
  updateCartInFirestore,
} from "../../firebaseFunctions"; // Importamos funciones para Firestore
import { CartContext } from "../../context/CartContext";
import "./CartPage.css";
import carritoVacio from "./assets/carrito-vacio.png";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  //llamo a usenavigate para usarlo despues en el botón de comprar
  const navigate = useNavigate();

  // Accedemos a los items del carrito usando el contexto CartContext.
  const { cartItems, removeFromCart } = useContext(CartContext);

  // Inicializamos counts como un objeto que mapea IDs de productos a sus cantidades
  const [counts, setCounts] = useState({});

  // Efecto para inicializar counts cuando cartItems cambia
  useEffect(() => {
    const initialCounts = {};
    cartItems.forEach((item) => {
      // Usa la cantidad almacenada en Firestore o 1 como valor predeterminado
      initialCounts[item.id] = item.quantity || 1;
    });
    setCounts(initialCounts);
  }, [cartItems]);

  // Efecto para actualizar Firestore cuando cambian las cantidades
  useEffect(() => {
    if (cartItems.length > 0 && Object.keys(counts).length > 0) {
      const updateFirestoreCart = async () => {
        try {
          // Crear array actualizado con las cantidades correctas
          const updatedCart = cartItems.map((item) => ({
            ...item,
            quantity: counts[item.id] || 1,
          }));

          await updateCartInFirestore(updatedCart);
          console.log("[updateFirestoreCart] Carrito actualizado en Firestore");
        } catch (error) {
          console.error(
            "[CartPage: updateFirestoreCart] Error al actualizar el carrito en Firestore: ",
            error
          );
        }
      };
      updateFirestoreCart();
    }
  }, [cartItems, counts]);

  const handleIncrement = (itemId) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [itemId]: (prevCounts[itemId] || 1) + 1,
    }));
  };
  // Función para aumentar la cantidad de un producto en el carrito.

  const handleDecrease = (itemId) => {
    setCounts((prevCounts) => {
      const currentCount = prevCounts[itemId] || 1;
      if (currentCount > 1) {
        return {
          ...prevCounts,
          [itemId]: currentCount - 1,
        };
      }
      return prevCounts;
    });
  };

  const handleRemoveFromCart = async (index) => {
    try {
      const productId = cartItems[index].id; // Asegúrate de que estás usando el Firestore ID aquí
      // Eliminar producto de Firestore
      await removeFromCartInFirestore(productId);
      // Eliminar producto de React (estado local)
      removeFromCart(index);
      setCounts((prevCounts) => {
        const newCounts = { ...prevCounts };
        delete newCounts[productId];
        return newCounts;
      });
      console.log("Producto eliminado del carrito y Firestore");
    } catch (error) {
      console.error("Error al eliminar producto de Firestore: ", error);
    }
  };

  // Si el carrito está vacío, mostramos un mensaje indicando que no hay productos.
  if (cartItems.length === 0) {
    return (
      <div className="carrito-vacio">
        <h2>Tu carrito está vacío</h2>
        <p>¡Agrega algunos productos a tu carrito para comenzar!</p>
        <img
          src={carritoVacio}
          alt="Carrito Vacío"
          className="carrito-vacio-img"
        />
      </div>
    );
  }

  // Calculamos el total sumando el precio de cada producto multiplicado por la cantidad correspondiente.
  const totalCompra = cartItems.reduce((total, item) => {
    const quantity = counts[item.id] || 1;
    return total + item.precio * quantity;
  }, 0); // El '0' es el valor inicial para la suma.

  // Si el carrito tiene productos, mostramos la lista de items.
  return (
    <div className="carrito-container">
      <h2>Tu Carrito 🛒</h2>
      <div className="carrito-items">
        {cartItems.map((item, index) => (
          <div key={item.id} className="carrito-item">
            <img
              src={item.imagen}
              alt={item.estilo}
              className="img-carrito-container"
            />
            <div className="item-details">
              <h3>
                {item.producto}: {item.estilo} - {item.marca}
              </h3>
              <div className="cantidad">
                <p>
                  <b>Cantidad:</b> {counts[item.id] || 1}
                </p>
                <button
                  className="eliminar-btn"
                  onClick={() => handleDecrease(item.id)}
                  disabled={(counts[item.id] || 1) === 1}
                >
                  -
                </button>
                <button
                  className="agregar-btn"
                  onClick={() => handleIncrement(item.id)}
                >
                  +
                </button>
              </div>

              <p>
                <b>Total:</b> ${item.precio * (counts[item.id] || 1)}
              </p>
              <div className="eliminar-item">
                <button onClick={() => handleRemoveFromCart(index)}>❌</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p>
        <b>Total de la compra:</b> ${totalCompra}
      </p>
      <button className="comprar-carrito" onClick={() => navigate("/Checkout")}>
        Continuar compra
      </button>
    </div>
  );
};

export default CartPage;
