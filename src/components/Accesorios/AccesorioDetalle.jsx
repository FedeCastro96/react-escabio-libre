import { useParams } from "react-router-dom";
import productos from "../../data";
import "../../App.css";
import { useEffect, useState } from "react";

import BBDD from "../../Config/firebase";
import { doc, getDoc } from "firebase/firestore";

const AccesorioDetalle = () => {
  const { id } = useParams();

  const [accesorios, setAccesorios] = useState(null);

  useEffect(() => {
    const docRef = doc(BBDD.db, "accesorios", id);
    getDoc(docRef).then((snap) => {
      setAccesorios(snap.data());
    });
  }, [id]);

  const obtenerImagenAccesorio = (id) => {
    const accesorioEncontrado = productos.accesorios.find(
      (accesorio) => accesorio.id === id
    );
    return accesorioEncontrado ? accesorioEncontrado.imagen : null;
  };

  if (!accesorios) {
    return <p>Cargando...</p>;
  }

  const ImagenAccesorio = obtenerImagenAccesorio(id);

  const { estilo, marca, precio, descripcion, producto } = accesorios;

  return (
    <div className="product-detalle-container">
      <h2>
        {producto} {marca} {estilo}
      </h2>
      <img src={ImagenAccesorio} alt={estilo} className="product-detalle-img" />
      <p>Precio: ${precio}</p>
      <p className="product-detalle-description">{descripcion}</p>
    </div>
  );
};

export default AccesorioDetalle;
