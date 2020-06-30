import React, { Component } from "react";
import Helmet from "../../../seo/jogo-da-nave";
import LoadJS from "../../../utils/loadJS";
import Aside from "./Aside";

export default class index extends Component {
  componentDidMount() {
    LoadJS({
      src: "/assets/js/phaser.min.js",
      id: "phaser-framework",
      callback: () =>
        LoadJS({
          src: "/assets/js/super-mario/index.js",
          id: "jogo",
          type: "module",
        }),
    });
  }

  componentWillUnmount() {
    let phaser = document.getElementById("phaser-framework");
    let jogo = document.getElementById("jogo");

    phaser.remove();
    jogo.remove();
    window.location.reload()
  }

  render() {
    return (
      <>
        <Helmet />
        <div id="container-trabalho" className="container-trabalho">
          <div className="title">
            <h1 className="title">Jogo da Nave</h1>
            <hr />
          </div>
          <Aside />
          <main className="pagina-apresentacao">
            <div id="jogo" className="jogo">
              <div id="jogo-container" className="jogo-container"></div>
            </div>
            <div className="flex-container btn-container">
              <h3>Veja o código desse jogo</h3>
              <div className="btn widget-item">
                <a
                  href="https://github.com/diegomatos321/Jogo-Super-Mario-Bros-Phaser"
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
