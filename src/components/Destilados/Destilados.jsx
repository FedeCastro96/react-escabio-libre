import "../../App.css";
import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router-dom";
import productos from "../../data";
import { collection, getDocs } from "firebase/firestore";
import BBDD from "../../Config/firebase";
import { useEffect, useState } from "react";

const Destilados = () => {
  const [destilados, setDestilados] = useState([]);
  useEffect(() => {
    const collectionRef = collection(BBDD.db, "destilados");
    getDocs(collectionRef).then((snaps) => {
      const { docs } = snaps;
      const list = docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      console.log("destilados list:", list);
      setDestilados(list);
    });
  }, []);

  const obtenerImagenDestilado = (id) => {
    const destiladoEncontrado = productos.destilados.find(
      (destilado) => destilado.id === id
    );
    return destiladoEncontrado ? destiladoEncontrado.imagen : null;
  };

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
              imagen={obtenerImagenDestilado(destilado.id)}
              producto={destilado.producto}
              descripcion={destilado.descripcion}
              id={destilado.id}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Destilados;
