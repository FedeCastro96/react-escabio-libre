//import React from "react";
import PropTypes from "prop-types";
import "./ProductCard.css";

const ProductCard = ({ estilo, marca, precio, imagen, producto }) => {
  return (
    <div className="product-card">
      <img src={imagen} alt={estilo} className="card-img" />
      <h3>{marca}</h3>
      <p>Estilo: {estilo}</p>
      <p>Precio: {precio}</p>
      <p>Producto: {producto}</p>
      <button className="add-to-cart-btn">Agregar al carrito 🛒</button>
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
