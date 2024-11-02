import { useParams } from "react-router-dom";
import productos from "../../data";
import "../../App.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const VinoDetalle = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const vino = productos.vinos.find((producto) => producto.id === id);
  const { estilo, marca, precio, imagen, descripcion, producto } = vino;
  const handleAddToCart = () => {
    addToCart(vino); // Llamar a la función addToCart pasando el producto
    console.log("Adding to cart: ", {
      estilo,
      marca,
      precio,
      imagen,
      producto,
    });
  };

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

export default VinoDetalle;
