import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartPage.css";
import carritoVacio from "./assets/carrito-vacio.png";

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  // Accedemos a los items del carrito usando el contexto CartContext.

  const [counts, setCounts] = useState(cartItems.map(() => 1));
  // Creamos un estado 'counts' que es un array donde cada posición representa la cantidad de un item en el carrito.
  // Inicializamos 'counts' con un array que contiene un '1' por cada item en 'cartItems', lo que significa que cada producto comienza con una cantidad de 1.

  const handleIncrement = (index) => {
    const newCounts = [...counts]; // Copiamos el array actual de cantidades para no modificar directamente el estado.
    newCounts[index] += 1; // Incrementamos en 1 la cantidad del producto que corresponde al índice.
    setCounts(newCounts); // Actualizamos el estado con el nuevo array de cantidades.
  };
  // Función para aumentar la cantidad de un producto en el carrito.

  const handleDecrease = (index) => {
    const newCounts = [...counts];
    if (newCounts[index] > 1) {
      newCounts[index] -= 1;
      setCounts(newCounts);
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
  const totalCompra = cartItems.reduce((total, item, index) => {
    return total + item.precio * counts[index];
  }, 0); // El '0' es el valor inicial para la suma.

  // Si el carrito tiene productos, mostramos la lista de items.
  return (
    <div className="carrito-container">
      <h2>Tu Carrito 🛒</h2>
      <div className="carrito-items">
        {cartItems.map((item, index) => (
          <div key={index} className="carrito-item">
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
                  <b>Cantidad:</b> {counts[index]}
                </p>
                <button
                  className="eliminar-btn"
                  onClick={() => handleDecrease(index)}
                  disabled={counts[index] === 1}
                >
                  -
                </button>
                <button
                  className="agregar-btn"
                  onClick={() => handleIncrement(index)}
                >
                  +
                </button>
              </div>

              <p>
                <b>Total:</b> ${item.precio * counts[index]}
              </p>
              <div className="eliminar-item">
                <button onClick={() => removeFromCart(index)}>❌</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p>
        <b>Total de la compra:</b> ${totalCompra}
      </p>
      <button className="comprar-carrito">Continuar compra</button>
    </div>
  );
};

export default CartPage;
