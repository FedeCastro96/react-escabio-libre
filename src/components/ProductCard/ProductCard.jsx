//import React from "react";
import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./ProductCard.css";

const ProductCard = ({ estilo, marca, precio, imagen, producto }) => {
  const { addToCart, cartItems } = useContext(CartContext);

  const handleAddToCart = (e) => {
    e.preventDefault(); // previene la navegación
    e.stopPropagation(); // Detiene la propagacaión del evento
    console.log("botón clickeado");
    console.log("Estado actual del carrito antes de agregar:", cartItems);
    addToCart({ estilo, marca, precio, imagen, producto });
  };

  return (
    <div className="product-card">
      <img src={imagen} alt={estilo} className="card-img" />
      <h3>{marca}</h3>
      <p>
        <b>Estilo:</b> {estilo} 🍇
      </p>
      <p>
        <b>Precio: $</b>
        {precio}
      </p>
      <p>
        <b>Producto:</b> {producto}
      </p>
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        Agregar al carrito 🛒
      </button>
    </div>
  );
};

ProductCard.propTypes = {
  estilo: PropTypes.string.isRequired,
  marca: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
  imagen: PropTypes.string.isRequired,
  producto: PropTypes.string.isRequired,
};

export default ProductCard;
