import React, { Component } from "react";
import MetaDados from "../../../seo/jogo-da-nave";
import LoadJS from "../../../utils/loadJS";
import Aside from "./Aside";
import ScrollToTop from "../../../utils/scrollToTop";

export default class index extends Component {
  componentDidMount() {
    ScrollToTop();
    LoadJS({
      src: "/assets/js/phaser.min.js",
      id: "phaser-framework",
      callback: () =>
        LoadJS({
          src: "/assets/js/jogo-da-nave/index.js",
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
        <MetaDados />
        <div id="container-trabalho" className="main container-trabalho">
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
                  href="https://github.com/diegomatos321/Jogo-da-Nave-Phaser"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-github-square"></i>
                  <p className="font-size-small">GitHub</p>
                </a>
              </div>
            </div>
            <br/>
          </main>
        </div>
      </>
    );
  }
}
