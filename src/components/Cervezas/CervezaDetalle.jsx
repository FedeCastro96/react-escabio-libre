import { useParams } from "react-router-dom";
import productos from "../../data";
import "../../App.css";

const CervezaDetalle = () => {
  const { id } = useParams();

  const cerveza = productos.cervezas.find(
    (producto) => producto.id === parseInt(id)
  );

  const { estilo, marca, precio, imagen, descripcion, producto } = cerveza;
  return (
    <div className="product-detalle-container">
      <h2>
        {producto} {marca} {estilo}
      </h2>
      <img src={imagen} alt={estilo} className="product-detalle-img" />
      <p>Precio: ${precio}</p>
      <button className="add-to-cart-btn">Agregar al carrito 🛒</button>
      <p className="product-detalle-description">{descripcion}</p>
    </div>
  );
};

export default CervezaDetalle;
