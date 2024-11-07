//import React from "react";
import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./ProductCard.css";
//import { addToCartInFirestore } from "../../firebaseFunctions";

const ProductCard = ({ estilo, marca, precio, imagen, producto, id }) => {
  const { addToCart, cartItems } = useContext(CartContext);

  const handleAddToCart = async (e) => {
    e.preventDefault(); // previene la navegación
    e.stopPropagation(); // Detiene la propagacaión del evento
    console.log("Estado actual del carrito antes de agregar:", cartItems);

    const newProduct = { estilo, marca, precio, imagen, producto, id };

    // Actualizar el carrito localmente primero
    addToCart(newProduct);
  };

  return (
    <div className="product-card">
      <img src={imagen} alt={estilo} className="card-img" />
      <h3>{marca}</h3>
      <p>
        <b>Estilo:</b> {estilo}
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
  id: PropTypes.string.isRequired,
};

export default ProductCard;
