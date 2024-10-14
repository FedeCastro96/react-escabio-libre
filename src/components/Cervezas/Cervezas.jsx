import "../../App.css";
import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router-dom";
import productos from "../../data";

const Cervezas = () => {
  const cervezas = productos.cervezas;
  console.log(cervezas);

  if (!cervezas) {
    console.error("Las cervezas no están definidos:", productos);
    return <div>Error: No se encontraron cervezas.</div>; // Mensaje de error
  }

  return (
    <div className="product-container">
      <h1>Cervezas</h1>
      <div className="product-grid">
        {cervezas.map((cerveza) => (
          <Link
            key={cerveza.id}
            to={`/cerveza/${cerveza.id}`}
            state={{ ...cerveza }}
          >
            <ProductCard
              estilo={cerveza.estilo}
              marca={cerveza.marca}
              precio={cerveza.precio}
              imagen={cerveza.imagen}
              producto={cerveza.producto}
              descripcion={cerveza.descripcion}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cervezas;
