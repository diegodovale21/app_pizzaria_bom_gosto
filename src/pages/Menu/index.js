import React from "react";
import "../../assets/css/menu.css";

const Menu = () => {
  return (
    <div className="container_pagina__menu">
      <h1 className="titulo_pagina__menu">MENU</h1>
      <div className="container_pagina_menu__item">
        <div className="menu__item">
          <div className="imagem__item1"></div>
          <div className="titulo__item1">CALABRESA</div>
          <div className="texto__item1">
            Molho pomodoro, mozzarella , calabresa, azeitonas e orégano.
            <div className="preco__item1">R$25,90</div>
          </div>
        </div>
        <div className="menu__item">
          <div className="imagem__item2"></div>
          <div className="titulo__item2">FRANGO</div>
          <div className="texto__item2">
            Molho pomodoro, mozzarella, frango desfiado, requeijão cremoso e
            orégano.
          </div>
          <div className="preco__item2">R$29,90</div>
        </div>
        <div className="menu__item">
          <div className="imagem__item3"></div>
          <div className="titulo__item3">PORTUGUESA</div>
          <div className="texto__item3">
            Molho pomodoro, mozzarella, presunto, ovo, cebola, azeitonas,
            orégano e azeite de oliva.
          </div>
          <div className="preco__item3">R$25,90</div>
        </div>
        <div className="menu__item">
          <div className="imagem__item4"></div>
          <div className="titulo__item4">QUATRO QUEIJOS</div>
          <div className="texto__item4">
            Molho pomodoro, mozzarella, provolone, parmesão, gorgonzola e
            orégano.
          </div>
          <div className="preco__item4">R$25,90</div>
        </div>
        <div className="menu__item">
          <div className="imagem__item5"></div>
          <div className="titulo__item5">BANANA</div>
          <div className="texto__item5">
            Mozzarela, banana e chocolate branco.
          </div>
          <div className="preco__item5">R$35,90</div>
        </div>
        <div className="menu__item">
          <div className="imagem__item6"></div>
          <div className="titulo__item6">NUTELA</div>
          <div className="texto__item6">Mozzarela, nutella e morango.</div>
          <div className="preco__item6">R$35,90</div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
