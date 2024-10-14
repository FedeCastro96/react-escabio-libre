import "../../App.css";
import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router-dom";
import productos from "../../data";

const Destilados = () => {
  const destilados = productos.destilados;

  if (!destilados) {
    console.error("Los destilados no están definidos:", productos);
    return <div>Error: No se encontraron destilados.</div>; // Mensaje de error
  }

  return (
    <div className="product-container">
      <h1>Destilados</h1>
      <div className="product-grid">
        {destilados.map((destilado) => (
          <Link
            key={destilado.id}
            to={`/destilado/${destilado.id}`}
            state={{ ...destilado }}
          >
            <ProductCard
              estilo={destilado.estilo}
              marca={destilado.marca}
              precio={destilado.precio}
              imagen={destilado.imagen}
              producto={destilado.producto}
              descripcion={destilado.descripcion}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Destilados;
