import React from "react";
import "../../assets/css/contato.css";

const Contato = () => {
  return (
    <div className="container_pagina__contato">
      <h1 className="titulo_pagina__contato">CONTATO</h1>
      <form>
        <label for="nome">Nome Completo</label>
        <input type="text" id="nome" required className="input__padrao"></input>

        <label for="email">E-mail</label>
        <input
          type="email"
          id="email"
          className="input__padrao"
          required
          placeholder="email@dominio.com"
        />

        <label for="telefone">Telefone</label>
        <input
          type="tel"
          id="telefone"
          className="input__padrao"
          required
          placeholder="(XX) XXXXX-XXXX"
        />

        <label for="mensagem">Mensagem</label>
        <textarea
          cols="70"
          rows="10"
          id="mensagem"
          className="input__padrao"
          required
        ></textarea>
        <div className="div__contato">
          <legend>Como prefere nosso contato?</legend>
          <br />
          <label for="radio-email">
            <input
              type="radio"
              name="contato"
              value="email"
              id="radio-email"
              className="radio"
            ></input>
            Email
          </label>
          <label for="radio-telefone">
            <input
              type="radio"
              name="contato"
              value="telefone"
              id="radio-telefone"
              className="radio"
            />
            Telefone
          </label>
          <label for="radio-whatsapp">
            <input
              type="radio"
              name="contato"
              value="whatsapp"
              id="radio-whatsapp"
              className="radio"
              checked
            />
            Whatsapp
          </label>
          <label className="checkbox">
            <input type="checkbox" />
            Gostaria de receber nossas novidades por email?
          </label>

          <input type="submit" value="Enviar" className="enviar" />
        </div>
      </form>
    </div>
  );
};

export default Contato;
