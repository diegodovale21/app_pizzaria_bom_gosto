import React from "react";
import "../../assets/css/home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="container__principal">
        <h1 className="titulo__principal">PIZZARIA BOM GOSTO</h1>

        <p className="texto__principal">
          A pizzaria Bom Gosto nasceu em 1999 e desde então faz da tradição e do
          processo familiar os principais segredos para oferecer sabores e
          momentos tão especiais.A receita da massa veio diretamente da Itália e
          todo o processo de fabricação e montagem dos pratos é artesanal.
          Cuidados que garantem sempre os melhores sabores e combinações.
        </p>
        <div className="imagem__principal"></div>
      </div>

      <div className="container__sobre">
        <h1 className="titulo__sobre">SOBRE NÓS</h1>
        <div className="div_texto__imagem">
          <div className="texto__sobre">
            Com um novo conceito, Pizzaria Bom Gosto surgiu para oferecer a
            melhor experiência em pizza para seus clientes através de uma ideia
            divertida que mistura a comida favorita da maioria das pessoas com
            obras de arte.
            <Link to="/sobre" className="link__sobre">
              SOBRE
            </Link>
          </div>
          <div className="imagem__sobre"></div>
        </div>
      </div>
      <div className="container__menu">
        <h1 className="titulo__menu">NOSSO MENU</h1>

        <div className="texto__menu">
          Trabalhamos com ingredientes selecionados que garante um sabor sem
          igual em todas as nossas opções tradicionais, especiais e doces.
          Prezamos pela qualidade de nossos produtos, atendimento e entrega para
          que você possa receber e saborear a melhor experiência em pizza.
        </div>
        <div className="container_imagem__menu">
          <div className="imagem__menu1"></div>
          <div className="imagem__menu2"></div>
        </div>
        <div className="link_posicao__menu">
          <Link to="/menu" className="link__menu">
            MENU
          </Link>
        </div>
      </div>
      <div className="container__localizacao">
        <h1 className="titulo__localizacao">LOCALIZAÇÃO</h1>

        <div className="container_texto_imagem__localizacao">
          <div className="texto__localizacao">
            01 0201-0300 Rua 354, Alto, Brusno <br /> contato@bomgosto.com
            <br />
            Salão, retirada balcão ou Delivery Terça à domingo das 18:00 às
            23:00.
          </div>
          <div className="imagem__localizacao"></div>
        </div>
      </div>
      <div className="container__final">
        <div className="imagem__final"></div>

        <div className="titulo__final">PIZZARIA BOM GOSTO</div>
      </div>
    </div>
  );
};

export default Home;
