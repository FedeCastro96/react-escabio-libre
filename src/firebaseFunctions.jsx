import {
  collection,
  addDoc,
  deleteDoc,
  getDocs,
  doc,
  setDoc,
  //getFirestore,
} from "firebase/firestore";
import BBDD from "./Config/firebase";

// Función para agregar producto al carrito en Firestore
export const addToCartInFirestore = async (product) => {
  try {
    const docRef = await addDoc(collection(BBDD.db, "cart"), product);
    console.log("Producto añadido al carrito con ID: ", docRef.id);
  } catch (e) {
    console.error("Error al añadir el producto: ", e);
  }
};

//Función para eliminar producto del carrito en Firestore
export const removeFromCartInFirestore = async (productId) => {
  try {
    const productRef = doc(BBDD.db, "cart", productId);
    await deleteDoc(productRef);
    console.log("Producto eliminado con ID: ", productId);
  } catch (e) {
    console.log("Error al eliminar producto: ", e);
  }
};

//Funcion para vaciar el carrito en Firestore
export const createOrderInFirestore = async (cartItems) => {
  try {
    const order = {
      items: cartItems.map((item) => ({
        id: item.id,
        name: item.name,
        quantity: item.quantity,
      })),
      date: new Date().toISOString(),
    };
    const docRef = await addDoc(collection(BBDD.db, "orders"), order);
    console.log("Orden creada con ID: ", docRef.id);
    return docRef.id; // Retornamos el ID de la odern creada para usarlo en el checkout
  } catch (e) {
    console.error("Error al crear la orden:", e);
  }
};

// Función para actualizar el carrito en Firestore
export const updateCartInFirestore = async (newCart) => {
  try {
    const cartRef = doc(BBDD.db, "carts", "userCart"); // Cambia "carts" y "userCart" según tu estructura
    await setDoc(cartRef, { items: newCart }); // Esto guardará el carrito en Firestore
    console.log("Carrito actualizado en Firestore:", newCart);
  } catch (error) {
    console.error("Error al actualizar el carrito en Firestore: ", error);
    throw error; // Lanza el error para manejarlo en el contexto
  }
};

export const fetchCartFromFirestore = async () => {
  try {
    const cartCollection = collection(BBDD.db, "cart"); // Asegúrate de que la colección se llama "cart"
    const snapshot = await getDocs(cartCollection);
    const cartItems = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return cartItems; // Devuelve los items del carrito
  } catch (error) {
    console.error("Error fetching cart from Firestore:", error);
    throw new Error("Error fetching cart from Firestore"); // Lanza un error si falla la operación
  }
};
