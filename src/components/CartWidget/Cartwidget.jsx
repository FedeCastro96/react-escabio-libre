import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "../Navbar/Navbar.css";
import { useNavigate } from "react-router-dom";

const CartWidget = () => {
  const { cartItems } = useContext(CartContext);
  const itemCount = cartItems.length;

  const navigate = useNavigate();

  console.log("Cart items: ", cartItems);

  return (
    <>
      <button className="cartIcon" onClick={() => navigate("/carrito")}>
        🛒
      </button>
      {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
    </>
  );
};

export default CartWidget;
