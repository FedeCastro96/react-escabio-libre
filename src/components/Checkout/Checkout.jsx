import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import {
  removeFromCartInFirestore,
  createOrderInFirestore,
} from "../../firebaseFunctions";
import CheckoutForm from "./CheckutForm";

const Checkout = () => {
  console.log("Rendering Checkout component"); // Agregar un log aquí
  const { cartItems, setCartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCompleteOrder = async (customerInfo) => {
    console.log("handleCompleteOrder called");
    console.log("[Checkout] cartItems:", cartItems);
    console.log("[Checkout] customerInfo:", customerInfo);
    try {
      //crear la orden en Firestore
      const orderId = await createOrderInFirestore(cartItems, customerInfo);
      console.log("[Chackout] Order ID desde Firestore:", orderId); // Asegúrate de que 'orderId' sea válido

      if (!orderId) {
        console.error("No se recibió un orderId válido");
        return;
      }

      //Eliminar productos del carrito en Firestore
      await Promise.all(
        cartItems.map((item) => removeFromCartInFirestore(item.id))
      );

      //limpiar el carrito en el estado de React
      setCartItems([]);

      //Redirigir al usuario a la pagina de confirmación
      navigate(`/order-confirmation/${orderId}`);
    } catch (error) {
      console.error("Error al completar la compra:", error);
    }
  };

  return (
    <>
      <h2>Datos de contacto</h2>
      <CheckoutForm onCompleteOrder={handleCompleteOrder} />
    </>
  );
};

export default Checkout;
