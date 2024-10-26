import { useNavigate } from "react-router-dom";
import CartWidget from "../CartWidget/Cartwidget";
import "./Navbar.css";
import logo from "./my-logo.png";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <img
        className="logo"
        src={logo}
        alt="my-logo"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      />

      <h3 onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        Escabio Libre{" "}
      </h3>
      <div className="btns-navbar-div">
        <button onClick={() => navigate("/Vinos")}>Vinos</button>
        <button onClick={() => navigate("/Cervezas")}>Cervezas</button>
        <button onClick={() => navigate("/Destilados")}>Destilados</button>
        <button onClick={() => navigate("/Accesorios")}>Accesorios</button>
        <button onClick={() => navigate("/Nosotros")}>Nosotros</button>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
