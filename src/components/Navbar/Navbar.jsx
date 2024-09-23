import CartWidget from "../CartWidget/Cartwidget";
import "./Navbar.css";
import logo from "./my-logo.png";

const NavBar = () => {
  return (
    <nav className="navbar">
      <img className="logo" src={logo} alt="my-logo" />
      <h3>Escabio Libre</h3>
      <div>
        <button>Vinos</button>
        <button>Cervezas</button>
        <button>Desttilados</button>
        <button>Accesorios</button>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
