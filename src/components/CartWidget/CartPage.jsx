import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartPage.css";

const CartPage = () => {
  const { cartItems } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <div className="carrito-vacio">
        <h2>Tu carrito está vacío</h2>
        <p>¡Agrega algunos productos a tu carrito para comenzar!</p>
      </div>
    );
  }

  return (
    <div className="carrito-container">
      <h2>Tu Carrito 🛒</h2>
      <div className="carrito-items">
        {cartItems.map((item, index) => {
          const [count, setCount] = useState(1);
          const handleIncrement = () => {
            setCount(count + 1);
          };

          const handleDecrease = () => {
            if (count > 1) {
              setCount(count - 1);
            }
          };
          return (
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
                <p></p>
                <div className="cantidad">
                  <p>
                    <b>Cantidad:</b> {count}
                  </p>
                  <button
                    className="eliminar-btn"
                    onClick={handleDecrease}
                    disabled={count === 1}
                  >
                    -
                  </button>
                  <button className="agregar-btn" onClick={handleIncrement}>
                    +
                  </button>
                </div>
                <p>
                  <b>Total:</b> ${item.precio * count}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <button className="comprar-carrito">Continuar compra</button>
    </div>
  );
};

export default CartPage;
