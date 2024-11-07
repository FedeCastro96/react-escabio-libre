import "../../App.css";
import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router-dom";
import productos from "../../data";
import { collection, getDocs } from "firebase/firestore";
import BBDD from "../../Config/firebase";
import { useEffect, useState } from "react";

const Accesorios = () => {
  const [accessorios, setAccesorios] = useState([]);
  useEffect(() => {
    const collectionRef = collection(BBDD.db, "accesorios");
    getDocs(collectionRef).then((snaps) => {
      const { docs } = snaps;
      const list = docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      console.log("accsesorios list:", list);
      setAccesorios(list);
    });
  }, []);

  const obtenerImagenAccesorio = (id) => {
    const accesorioEncontrado = productos.accesorios.find(
      (accesorio) => accesorio.id === id
    );
    return accesorioEncontrado ? accesorioEncontrado.imagen : null;
  };

  return (
    <div className="product-container">
      <h1>Accesorios</h1>
      <div className="product-grid">
        {accessorios.map((accesorio) => (
          <Link
            key={accesorio.id}
            to={`/accesorio/${accesorio.id}`}
            state={{ ...accesorio }}
          >
            <ProductCard
              estilo={accesorio.estilo}
              marca={accesorio.marca}
              precio={accesorio.precio}
              imagen={obtenerImagenAccesorio(accesorio.id)}
              producto={accesorio.producto}
              descripcion={accesorio.descripcion}
              id={accesorio.id}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Accesorios;
