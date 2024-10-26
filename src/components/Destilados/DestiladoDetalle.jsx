import { useParams } from "react-router-dom";
import productos from "../../data";
import "../../App.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const DestiladoDetalle = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const destilado = productos.destilados.find(
    (producto) => producto.id === parseInt(id)
  );

  const handleAddToCart = () => {
    addToCart(destilado); // Llamar a la función addToCart pasando el producto
    console.log("Adding to cart: ", {
      estilo,
      marca,
      precio,
      imagen,
      producto,
    });
  };

  const { estilo, marca, precio, imagen, descripcion, producto } = destilado;
  return (
    <div className="product-detalle-container">
      <h2>
        {producto} {marca} {estilo}
      </h2>
      <img src={imagen} alt={estilo} className="product-detalle-img" />
      <p>Precio: ${precio}</p>
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        Agregar al carrito 🛒
      </button>
      <p className="product-detalle-description">{descripcion}</p>
    </div>
  );
};

export default DestiladoDetalle;
