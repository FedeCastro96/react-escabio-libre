import { useParams } from "react-router-dom";
import productos from "../../data";
import "../../App.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const AccesorioDetalle = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const accesorio = productos.accesorios.find(
    (producto) => producto.id === parseInt(id)
  );
  const { estilo, marca, precio, imagen, descripcion, producto } = accesorio;

  const handleAddToCart = () => {
    addToCart(accesorio);
    console.log("Adding to cart:", {
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

export default AccesorioDetalle;
