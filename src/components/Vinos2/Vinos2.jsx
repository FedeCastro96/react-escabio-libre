import "../../App.css";
import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router-dom";
import productos from "../../data";
import { collection, getDocs } from "firebase/firestore";
import BBDD from "../../Config/firebase";
import { useEffect, useState } from "react";

const Vinos2 = () => {
  const [vinos, setVinos] = useState([]);
  useEffect(() => {
    // Obtener los vinos desde Firestore
    const collectionRef = collection(BBDD.db, "vinos");
    getDocs(collectionRef).then((snaps) => {
      const { docs } = snaps;
      const list = docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      console.log("list:", list);
      setVinos(list);
    });
  }, []);

  //tengo que usar esta formula para encontrar la imagen del vino ya que no sé como subirla a firestore.
  // esta formula busca los vinos que trae el array de data.js y busca por ID
  const obtenerImagenVino = (id) => {
    console.log("vinos -> firestore", vinos);
    console.log("vinos -> array js", productos.vinos);
    const vinoEncontrado = productos.vinos.find((vino) => vino.id === id);
    return vinoEncontrado ? vinoEncontrado.imagen : null;
  };

  return (
    <div className="product-container">
      <h1>Vinos 2</h1>
      <div className="product-grid">
        {vinos.map((vino) => (
          <Link key={vino.id} to={`/vino2/${vino.id}`} state={{ ...vino }}>
            <ProductCard
              estilo={vino.estilo}
              marca={vino.marca}
              imagen={obtenerImagenVino(vino.id)}
              precio={vino.precio}
              producto={vino.producto}
              descripcion={vino.descripcion}
              id={vino.id}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Vinos2;
