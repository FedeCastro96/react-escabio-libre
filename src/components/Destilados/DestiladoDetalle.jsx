import { useParams } from "react-router-dom";
import productos from "../../data";
import "../../App.css";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import BBDD from "../../Config/firebase";
import { doc, getDoc } from "firebase/firestore";

const DestiladoDetalle = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
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

  const handleAddToCart = () => {
    const destiladoConImagen = {
      ...destilados,
      imagen: ImagenDestilado,
    };
    addToCart(destiladoConImagen);
  };

  return (
    <div className="product-detalle-container">
      <h2>
        {producto} {marca} {estilo}
      </h2>
      <img src={ImagenDestilado} alt={estilo} className="product-detalle-img" />
      <p>Precio: ${precio}</p>
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        Agregar al carrito 🛒
      </button>
      <p className="product-detalle-description">{descripcion}</p>
    </div>
  );
};

export default DestiladoDetalle;
