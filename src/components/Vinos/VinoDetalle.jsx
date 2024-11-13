import { useParams } from "react-router-dom";
import productos from "../../data";
import "../../App.css";
import { useEffect, useState } from "react";

import BBDD from "../../Config/firebase.js";
import { doc, getDoc } from "firebase/firestore";

const VinoDetalle = () => {
  const { id } = useParams();

  const [vino, setVino] = useState(null);

  useEffect(() => {
    const docRef = doc(BBDD.db, "vinos", id);
    getDoc(docRef).then((snap) => {
      console.log(snap.data());
      setVino(snap.data());
    });
  }, [id]);

  const obtenerImagenVino = (id) => {
    const vinoEncontrado = productos.vinos.find((vino) => vino.id === id);
    return vinoEncontrado ? vinoEncontrado.imagen : null;
  };

  if (!vino) {
    return <p>Cargando...</p>; // Puedes mostrar un mensaje de carga o un spinner
  }

  const imagenVino = obtenerImagenVino(id);

  const { estilo, marca, precio, descripcion, producto } = vino;

  return (
    <div className="product-detalle-container">
      <h2>
        {producto} {marca} {estilo}
      </h2>
      <img src={imagenVino} alt={estilo} className="product-detalle-img" />
      <p>Precio: ${precio}</p>

      <p className="product-detalle-description">{descripcion}</p>
    </div>
  );
};

export default VinoDetalle;
