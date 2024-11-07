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
    const docRef = await addDoc(collection(BBDD.db, "carts"), product); //agregar un nuevo documento a una colección.
    console.log(
      "[addToCartInFirestore] Producto añadido al carrito con ID: ",
      docRef.id
    );
  } catch (e) {
    console.error("[addToCartInFirestore] Error al añadir el producto: ", e);
  }
};

//Función para eliminar producto del carrito en Firestore
export const removeFromCartInFirestore = async (productId) => {
  try {
    const productRef = doc(BBDD.db, "carts", productId);
    await deleteDoc(productRef);
    console.log(
      "[removeFromCartInFirestore] Producto eliminado con ID: ",
      productId
    );
  } catch (e) {
    console.log("[removeFromCartInFirestore] Error al eliminar producto: ", e);
  }
};

//Funcion para vaciar el carrito en Firestore
export const createOrderInFirestore = async (cartItems, customerInfo) => {
  try {
    console.log("[createOrderInFirestore] cartItems:", cartItems);
    console.log("[createOrderInFirestore] customerInfo:", customerInfo);

    const order = {
      items: cartItems.map((item) => ({
        id: item.id,
        name: item.estilo || "Sin Nombre",
        quantity: item.quantity || 0,
      })),
      customerInfo: customerInfo || {},
      date: new Date().toISOString(),
    };
    const docRef = await addDoc(collection(BBDD.db, "orders"), order);
    console.log("[createOrderInFirestore] Orden creada con ID: ", docRef.id);
    return docRef.id; // Retornamos el ID de la odern creada para usarlo en el checkout
  } catch (e) {
    console.error("[createOrderInFirestore] Error al crear la orden:", e);
  }
};

// Función para actualizar el carrito en Firestore
export const updateCartInFirestore = async (newCart) => {
  try {
    for (const product of newCart) {
      const productId = product.id;

      if (!productId) {
        console.error(
          "[updateCartInFirestore] Error: Producto sin ID válido",
          product
        );
        continue; // Si no tiene un ID, omitir este producto y continuar con el siguiente
      }

      const cartRef = doc(BBDD.db, "carts", productId); // Asegurarse de que productId esté presente
      await setDoc(cartRef, product);
    }
    console.log(
      "[FirebaseFunctions updateCartInFirestore] Carrito actualizado en Firestore"
    );
  } catch (error) {
    console.error(
      "[updateCartInFirestore] Error al actualizar el carrito en Firestore:",
      error
    );
    throw error;
  }
};

export const fetchCartFromFirestore = async () => {
  try {
    const cartCollection = collection(BBDD.db, "carts"); // Asegúrate de que la colección se llama "cart"
    const snapshot = await getDocs(cartCollection);
    const cartItems = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return cartItems; // Devuelve los items del carrito
  } catch (error) {
    console.error(
      "[fetchCartFromFirestore] Error fetching cart from Firestore:",
      error
    );
    throw new Error(
      "[fetchCartFromFirestore] Error fetching cart from Firestore"
    ); // Lanza un error si falla la operación
  }
};
