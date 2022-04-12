import React from "react";
import "../../assets/css/sobre.css";

const Sobre = () => {
  return (
    <div className="container_pagina__sobre">
      <h1 className="titulo_pagina__sobre">SOBRE</h1>
      <div className="container_pagina_sobre__texto__imagem">
        <div className="texto_pagina__sobre">
          Com um novo conceito, Pizzaria Bom Gosto surgiu para oferecer a melhor
          experiência em pizza para seus clientes através de uma ideia divertida
          que mistura a comida favorita da maioria das pessoas com obras de
          arte. A Pizzaria Bom Gosto chegou para revolucionar o segmento de
          pizzarias, com uma entrega ágil e segura, garantimos o sabor
          inigualável de nossos produtos, com um armazenamento adequado durante
          o transporte para sua pizza chegar quente e extremamente saborosa,
          como se você estivesse comendo em nossa pizzaria. Os reis adoraram e
          hoje a pizza está presente no mundo inteiro. Queremos levar não só uma
          pizza até você e sim, uma obra de arte!!
        </div>
        <div className="imagem_pagina__sobre"></div>
      </div>
    </div>
  );
};

export default Sobre;
