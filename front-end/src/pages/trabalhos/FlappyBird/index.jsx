import React, { Component } from "react";
import Aside from "./Aside";
import Helmet from "../../../seo/flappybird";
import LoadJS from "../../../utils/loadJS";

export default class FlappyBird extends Component {
  componentDidMount = () => {
    LoadJS({
      id: "flappybirdJS",
      src: "/assets/js/flappybird/index.js",
      defer: true,
      type: "module",
    });
  };

  componentWillUnmount = () => {
    let flappybirdJS = document.getElementById("flappybirdJS");
    flappybirdJS.remove();
  };

  render() {
    return (
      <>
        <Helmet />
        <div id="container-trabalho" className="container-trabalho">
          <div className="title">
            <h1>FlappyBird</h1>
            <hr />
          </div>
          <Aside />
          <main className="pagina-apresentacao">
            <div id="jogo" className="jogo jogo-flappybird">
              <div id="jogo-container" className="jogo-container flappybird">
                <div
                  id="formulario-container"
                  className="formulario-container hidden"
                >
                  <form
                    id="game-formulario"
                    className="formulario"
                  >
                    <h3>Digite um nickname</h3>
                    <input
                      type="text"
                      name="nome"
                      placeholder="Digite um nickname"
                      id="nome"
                      minLength="3"
                      maxLength="10"
                      required
                    />
                    {/* <input
                  type="hidden"
                  name="_csrf"
                  value="<%= data.csfrToken %>"
                /> */}
                    <input type="submit" className="btn" />
                  </form>
                </div>

                <div id="game-screen" className="game-screen hidden">
                  <canvas id="hud-layer"></canvas>
                  <canvas id="game-layer"></canvas>
                  <canvas id="ground-layer"></canvas>
                  <canvas id="pipeSouth-layer"></canvas>
                  <canvas id="background-layer"></canvas>
                </div>
                <div id="loading-txt" className="loading-txt"></div>
              </div>
            </div>
            <div className="flex-container btn-container">
              <h3>Veja o código desse jogo</h3>
              <div className="btn widget-item">
                <a
                  href="https://github.com/diegomatos321/Jogo-Flappy-Bird-COM-Banco-de-Dados"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-github-square"></i>
                  <p className="font-size-small">GitHub</p>
                </a>
              </div>
            </div>
          </main>
        </div>
      </>
    );
  }
}
