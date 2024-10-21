import { useParams } from "react-router-dom";
import productos from "../../data";
import "../../App.css";

const DestiladoDetalle = () => {
  const { id } = useParams();

  const destilado = productos.destilados.find(
    (producto) => producto.id === parseInt(id)
  );

  const { estilo, marca, precio, imagen, descripcion, producto } = destilado;
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

export default DestiladoDetalle;