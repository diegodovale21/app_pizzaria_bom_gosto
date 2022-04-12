import React from "react";
import "../assets/css/footer.css";
import { BiCopyright } from "react-icons/bi";
import { BsInstagram, BsFacebook, BsWhatsapp } from "react-icons/bs";

const Rodape = () => {
  return (
    <div>
      <footer className="footer">
        <p>
          <BiCopyright className="icone__copy" />
          2022 - Pizzaria Bom Gosto - Todos os direitos reservados.
        </p>
        <div className="icones__final">
          <a href="https://www.instagram.com/">
            <BsInstagram className="icone__instagram"></BsInstagram>
          </a>
          <a href="https://www.facebook.com/">
            <BsFacebook className="icone__facebook" />
          </a>
          <a href="https://www.whatsapp.com/">
            <BsWhatsapp className="icone__whatsapp" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Rodape;
