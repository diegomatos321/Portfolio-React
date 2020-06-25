import React, { Component } from "react";
import FotoDePerfil from "../../../uploads/imagens/foto-perfil.webp"
import Curriculum from "../../../uploads/documentos/curriculum.docx"

export default class Apresentacao extends Component {
  render() {
    return (
      <section id="home">
        <div className="container-apresentacao">
          <h1>Desenvolvedor Full Stack</h1>
          <figure>
            <img src={FotoDePerfil} alt="Foto de Perfil" title="Foto de Perfil" />
            <figcaption>Desenvolvedor Diego Matos</figcaption>
          </figure>
          <div className="flex-container areas-trabalho">
            <div className="flex-item front-end">
              <h2>Front End</h2>
              <ul>
                <li>
                  <i className="fas fa-check"></i>
                  HTML5
                </li>
                <li>
                  <i className="fas fa-check"> </i>
                  CSS 3
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  JavaScript
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  React
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  WordPress
                </li>
              </ul>
            </div>
            <div className="flex-item back-end">
              <h2>Back End</h2>
              <ul>
                <li>
                  <i className="fas fa-check"> </i>
                  Node JS
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  Express
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  MongoDB
                </li>
              </ul>
            </div>
            <div className="flex-item">
              <h2>Outras Linguagens</h2>
              <ul>
                <li>
                  <i className="fas fa-check"></i>
                  C#
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  MySQL
                </li>
              </ul>
            </div>
          </div>
          <div className="buttons flex-container">
            <a
              className="flex-item btn"
              href={Curriculum}
              download
            >
              Baixe o meu curriculum
            </a>
            <a
              className="flex-item btn"
              href="https://github.com/diegomatos321/Portfolio-React"
              rel="noopener noreferrer"
              target="_blank"
            >
              Veja esse site no GitHub
            </a>
          </div>
        </div>
      </section>
    );
  }
}
