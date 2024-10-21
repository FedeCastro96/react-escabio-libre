import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import cart from "./assets/cart.png";
import "./CartWidget.css"; // Si tienes estilos para el carrito, asegúrate de importarlos

const CartWidget = () => {
  const { cartItems } = useContext(CartContext);
  const itemCount = cartItems.length;

  console.log("Cart items: ", cartItems);

  return (
    <div>
      <img className="cartIcon" src={cart} alt="cart-widget" />
      <div className="cart-div">
        {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
      </div>
    </div>
  );
};

export default CartWidget;
