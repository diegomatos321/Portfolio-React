import React, { Component } from "react";
import Helmet from "../../../seo/jogo-da-nave";
import LoadJS from "../../../utils/loadJS";
import Aside from "./Aside";

export default class index extends Component {
  componentDidMount() {
    LoadJS({
      src: "/assets/js/jogo-da-nave/phaser.min.js",
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
            <div className="jogo-github">
                <h3>Veja o código desse jogo</h3>
                <a href="#" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
          </main>
        </div>
      </>
    );
  }
}
