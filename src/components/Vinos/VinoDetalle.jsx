import { useParams } from "react-router-dom";
import productos from "../../data";
import "../../App.css";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import BBDD from "../../Config/firebase";
import { doc, getDoc } from "firebase/firestore";

const VinoDetalle = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

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

  const handleAddToCart = () => {
    const vinoConImagen = {
      ...vino,
      imagen: imagenVino,
    };

    addToCart(vinoConImagen);
  };

  return (
    <div className="product-detalle-container">
      <h2>
        {producto} {marca} {estilo}
      </h2>
      <img src={imagenVino} alt={estilo} className="product-detalle-img" />
      <p>Precio: ${precio}</p>
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        Agregar al carrito 🛒
      </button>
      <p className="product-detalle-description">{descripcion}</p>
    </div>
  );
};

export default VinoDetalle;
