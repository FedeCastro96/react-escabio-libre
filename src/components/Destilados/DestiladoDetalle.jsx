import { useParams } from "react-router-dom";
import productos from "../../data";
import "../../App.css";
import { useEffect, useState } from "react";

import BBDD from "../../Config/firebase";
import { doc, getDoc } from "firebase/firestore";

const DestiladoDetalle = () => {
  const { id } = useParams();

  const [destilados, setDestilados] = useState(null);

  useEffect(() => {
    const docRef = doc(BBDD.db, "destilados", id);
    getDoc(docRef).then((snap) => {
      setDestilados(snap.data());
    });
  }, [id]);

  const obtenerImagenDestilado = (id) => {
    const destiladoEncontrado = productos.destilados.find(
      (destilado) => destilado.id === id
    );
    return destiladoEncontrado ? destiladoEncontrado.imagen : null;
  };

  if (!destilados) {
    return <p>Cargando...</p>;
  }

  const ImagenDestilado = obtenerImagenDestilado(id);

  const { estilo, marca, precio, descripcion, producto } = destilados;

  return (
    <div className="product-detalle-container">
      <h2>
        {producto} {marca} {estilo}
      </h2>
      <img src={ImagenDestilado} alt={estilo} className="product-detalle-img" />
      <p>Precio: ${precio}</p>

      <p className="product-detalle-description">{descripcion}</p>
    </div>
  );
};

export default DestiladoDetalle;
