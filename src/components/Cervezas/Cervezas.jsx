import "../../App.css";
import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router-dom";
import productos from "../../data";
import { collection, getDocs } from "firebase/firestore";
import BBDD from "../../Config/firebase";
import { useEffect, useState } from "react";

const Cervezas = () => {
  const [cervezas, setCervezas] = useState([]);
  useEffect(() => {
    //obtener las cervezas desde firestore
    const collectionRef = collection(BBDD.db, "cervezas");
    getDocs(collectionRef).then((snaps) => {
      const { docs } = snaps;
      const list = docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      console.log("cervezas list:", list);
      setCervezas(list);
    });
  }, []);

  //tengo que usar esta formula para encontrar la imagen de las cervezas ya que no sé como subirla a firestore.
  // esta formula busca los vinos que trae el array de data.js y busca por ID
  const obtenerImagenCerveza = (id) => {
    const cervezaEncontrada = productos.cervezas.find(
      (cerveza) => cerveza.id === id
    );
    return cervezaEncontrada ? cervezaEncontrada.imagen : null;
  };

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
              imagen={obtenerImagenCerveza(cerveza.id)}
              producto={cerveza.producto}
              descripcion={cerveza.descripcion}
              id={cerveza.id}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cervezas;
