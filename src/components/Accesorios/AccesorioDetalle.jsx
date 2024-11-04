import { useParams } from "react-router-dom";
import productos from "../../data";
import "../../App.css";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import BBDD from "../../Config/firebase";
import { doc, getDoc } from "firebase/firestore";

const AccesorioDetalle = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
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

  const handleAddToCart = () => {
    const accesorioConImagen = {
      ...accesorios,
      imagen: ImagenAccesorio,
    };
    addToCart(accesorioConImagen);
  };

  return (
    <div className="product-detalle-container">
      <h2>
        {producto} {marca} {estilo}
      </h2>
      <img src={ImagenAccesorio} alt={estilo} className="product-detalle-img" />
      <p>Precio: ${precio}</p>
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        Agregar al carrito 🛒
      </button>
      <p className="product-detalle-description">{descripcion}</p>
    </div>
  );
};

export default AccesorioDetalle;
