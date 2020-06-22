import React, { Component } from "react";
import Helmet from "../../../seo/jogo-da-nave";
import LoadJS from "../../../utils/loadJS";
import Aside from "./Aside";

export default class index extends Component {
  componentDidMount() {
    LoadJS({
      src: "/assets/js/jogo-da-nave/phaser.min.js",
      id: "phaser-framework",
      callback: () => LoadJS({
        src: "/assets/js/super-mario/index.js",
        id: "jogo",
        type: "module",
      })
    })
  }

  componentWillUnmount(){
    let phaser = document.getElementById("phaser-framework");
    let jogo = document.getElementById("jogo");

    phaser.remove();
    jogo.remove();
  }

  render() {
    return (
      <>
        <Helmet />
        <div className="title">
          <h1 className="title">Jogo da Nave</h1>
          <hr />
        </div>
        <div className="container-trabalhos">
          <Aside />
          <main className="pagina-apresentacao">
            <div id="jogo" className="jogo">
              <div id="jogo-container" className="jogo-container"></div>
            </div>
          </main>
        </div>
      </>
    );
  }
}
