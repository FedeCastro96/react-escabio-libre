import { useParams } from "react-router-dom";
import productos from "../../data";
import "../../App.css";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import BBDD from "../../Config/firebase";
import { doc, getDoc } from "firebase/firestore";

const CervezaDetalle = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [cervezas, setCervezas] = useState(null);

  useEffect(() => {
    const docRef = doc(BBDD.db, "cervezas", id);
    getDoc(docRef).then((snap) => {
      setCervezas(snap.data());
    });
  }, [id]);

  const obtenerImagenCerveza = (id) => {
    const cervezaEncontrada = productos.cervezas.find(
      (cerveza) => cerveza.id === id
    );
    return cervezaEncontrada ? cervezaEncontrada.imagen : null;
  };

  if (!cervezas) {
    return <p>Cargando...</p>;
  }

  const ImagenCerveza = obtenerImagenCerveza(id);

  const { estilo, marca, precio, descripcion, producto } = cervezas;

  const handleAddToCart = () => {
    const cervezaConImagen = {
      ...cervezas,
      imagen: ImagenCerveza,
    };

    addToCart(cervezaConImagen);
  };

  return (
    <div className="product-detalle-container">
      <h2>
        {producto} {marca} {estilo}
      </h2>
      <img src={ImagenCerveza} alt={estilo} className="product-detalle-img" />
      <p>Precio: ${precio}</p>
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        Agregar al carrito 🛒
      </button>
      <p className="product-detalle-description">{descripcion}</p>
    </div>
  );
};

export default CervezaDetalle;
