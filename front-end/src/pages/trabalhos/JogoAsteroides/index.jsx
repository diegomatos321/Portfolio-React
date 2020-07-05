import React, { Component } from "react";
import Aside from "./Aside";
import Helmet from "../../../seo/asteroides";
import LoadJS from "../../../utils/loadJS";

export default class FlappyBird extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
    LoadJS({
      id: "asteroidesJS",
      src: "/assets/js/jogo-asteroides/index.js",
      defer: true,
      type: "module",
    });
  };

  componentWillUnmount = () => {
    let asteroidesJS = document.getElementById("asteroidesJS");
    asteroidesJS.remove();
    window.location.reload();
  };

  render() {
    return (
      <>
        <Helmet />
        <div id="container-trabalho" className="container-trabalho">
          <div className="title">
            <h1>Jogo Asteroides</h1>
            <hr />
          </div>
          <Aside />
          <main className="pagina-apresentacao">
            <div className="jogo jogo-asteroides game-screen">
              <div className="loading-txt" id="loading-txt"></div>
              <div id="game-screen" className="jogo-container game-screen"></div>
            </div>
            <div className="flex-container btn-container">
              <h3>Veja o código desse jogo</h3>
              <div className="btn widget-item">
                <a
                  href="https://github.com/diegomatos321/Introduco-ao-Desenvolvimento-de-Jogos-JSVanilla"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-github-square"></i>
                  <p className="font-size-small">GitHub</p>
                </a>
              </div>
            </div>
            <br />
          </main>
        </div>
      </>
    );
  }
}
