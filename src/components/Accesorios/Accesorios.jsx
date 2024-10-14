import "../../App.css";
import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router-dom";
import productos from "../../data";

const Accesorios = () => {
  const accesorios = productos.accesorios;

  if (!accesorios) {
    console.error("Los accesorios no están definidos:", productos);
    return <div>Error: No se encontraron accesorios.</div>; // Mensaje de error
  }

  return (
    <div className="product-container">
      <h1>Accesorios</h1>
      <div className="product-grid">
        {accesorios.map((accesorio) => (
          <Link
            key={accesorio.id}
            to={`/accesorio/${accesorio.id}`}
            state={{ ...accesorio }}
          >
            <ProductCard
              estilo={accesorio.estilo}
              marca={accesorio.marca}
              precio={accesorio.precio}
              imagen={accesorio.imagen}
              producto={accesorio.producto}
              descripcion={accesorio.descripcion}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Accesorios;
