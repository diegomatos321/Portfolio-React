import React, { Component } from "react";
import Helmet from "../../../seo/jogo-da-nave";
import Aside from "./Aside"

export default class index extends Component {
  componentDidMount() {
    /* Phaser Framework */
    let phaserScript = document.createElement("script");
    phaserScript.setAttribute("id", "phaserJS");
    phaserScript.setAttribute("defer", true);
    phaserScript.setAttribute("src", "/assets/js/jogo-da-nave/phaser.min.js");
    phaserScript.setAttribute("type", "module");

    document.body.appendChild(phaserScript);

    let script = document.createElement("script");
    script.setAttribute("id", "jogoDaNaveJS");
    script.setAttribute("defer", true);
    script.setAttribute("src", "/assets/js/jogo-da-nave/index.js");
    script.setAttribute("type", "module");

    document.body.appendChild(script);
  }

  componentWillUnmount = () => {
    let jogoDaNaveJS = document.getElementById("jogoDaNaveJS");
    jogoDaNaveJS.remove();
  };

  render() {
    return (
      <>
        <Helmet />
        <Aside/>
        <main className="pagina-apresentacao">
          <div className="title">
            <h1 className="title">Jogo da Nave</h1>
            <hr />
          </div>

          <div id="jogo" className="jogo">
            <div id="jogo-container" className="jogo-container"></div>
          </div>
        </main>
      </>
    );
  }
}
