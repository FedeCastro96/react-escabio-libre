import { useParams } from "react-router-dom";

const OrderConfirmation = () => {
  const { orderId } = useParams();
  return (
    <div>
      <h1>¡Orden confirmada!</h1>
      <p>
        Tu orden fue confirmada y pronto nos pondremos en contacto contigo a
        través de los datos solicitados. Tu código de seguimiento es:{" "}
        <b>{orderId}</b>
        <br />
        <br />{" "}
      </p>

      <h3>¡Muchas gracias por tu compra!</h3>
    </div>
  );
};

export default OrderConfirmation;
