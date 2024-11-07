import { useState } from "react";
import PropTypes from "prop-types";

const CheckoutForm = ({ onCompleteOrder }) => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit called");
    if (!email || !fullName || !phoneNumber) {
      alert("Por favor, complete todos los campos.");
      return;
    }
    await onCompleteOrder({ email, fullName, phoneNumber });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="fullName">Nombre Completo:</label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Telefono:</label>
        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <button type="submit">Completar Compra</button>
    </form>
  );
};

CheckoutForm.propTypes = {
  onCompleteOrder: PropTypes.func.isRequired,
};

export default CheckoutForm;
