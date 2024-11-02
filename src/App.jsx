import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Vinos from "./components/Vinos/Vinos";
import Cervezas from "./components/Cervezas/Cervezas";
import Destilados from "./components/Destilados/Destilados";
import Accesorios from "./components/Accesorios/Accesorios";
import Nosotros from "./components/Nosotros/Nosotros";
import NotFound from "./components/Not Found/NotFound";
import VinoDetalle from "./components/Vinos/VinoDetalle";
import CervezaDetalle from "./components/Cervezas/CervezaDetalle";
import DestiladoDetalle from "./components/Destilados/DestiladoDetalle";
import AccesorioDetalle from "./components/Accesorios/AccesorioDetalle";
import { CartProvider } from "./context/CartContext";
import CartPage from "./components/CartWidget/CartPage";
import Vinos2 from "./components/Vinos2/Vinos2";
import VinoDetalle2 from "./components/Vinos2/VinoDetalle2";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            {<Route path="/" element={<Home />} />}
            {<Route path="/vinos" element={<Vinos />} />}
            {<Route path="/vinos2" element={<Vinos2 />} />}
            {<Route path="/cervezas" element={<Cervezas />} />}
            {<Route path="/destilados" element={<Destilados />} />}
            {<Route path="/accesorios" element={<Accesorios />} />}
            {<Route path="/nosotros" element={<Nosotros />} />}
            {<Route path="/carrito" element={<CartPage />} />}
            {<Route path="/vino/:id" element={<VinoDetalle />} />}
            {<Route path="/vino2/:id" element={<VinoDetalle2 />} />}
            {<Route path="/cerveza/:id" element={<CervezaDetalle />} />}
            {<Route path="/destilado/:id" element={<DestiladoDetalle />} />}
            {<Route path="/accesorio/:id" element={<AccesorioDetalle />} />}

            {<Route path="*" element={<NotFound />} />}
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
