import React from "react";
import "../assets/css/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="bom__gosto">PIZZARIA BOM GOSTO</div>
      <nav>
        <Link to="/" className="home">
          HOME
        </Link>

        <Link to="/sobre" className="sobre">
          SOBRE
        </Link>

        <Link to="/menu" className="menu">
          MENU
        </Link>

        <Link to="/contato" className="contato">
          CONTATO
        </Link>
      </nav>
    </header>
  );
};

export default Header;
