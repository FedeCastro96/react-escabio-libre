import "../../App.css";
import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router-dom";
import productos from "../../data";

const Vinos = () => {
  const vinos = productos.vinos;

  if (!vinos) {
    console.error("Los vinos no están definidos:", productos);
    return <div>Error: No se encontraron vinos.</div>; // Mensaje de error
  }

  return (
    <div className="product-container">
      <h1>Vinos</h1>
      <div className="product-grid">
        {vinos.map((vino) => (
          <Link key={vino.id} to={`/vino/${vino.id}`} state={{ ...vino }}>
            <ProductCard
              estilo={vino.estilo}
              marca={vino.marca}
              precio={vino.precio}
              imagen={vino.imagen}
              producto={vino.producto}
              descripcion={vino.descripcion}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Vinos;
