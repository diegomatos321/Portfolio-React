import { useEffect } from "react";
import MetaDados from "../../../seo/super-mario";
import LoadJS from "../../../utils/loadJS";
import Aside from "./Aside";

export default function SuperMario() {
  useEffect(function init() {
    window.scrollTo(0, 0);
    LoadJS({
      src: "/assets/js/phaser.min.js",
      id: "phaser-framework",
      callback: LoadJS({
        src: "/assets/js/super-mario/index.js",
        id: "jogo",
        defer: true,
        type: "module"
      })
    });
    
    return function removeGameJSAndReloadPage() {
      let phaser = document.getElementById("phaser-framework");
      let jogo = document.getElementById("jogo");

      phaser.remove();
      jogo.remove();
      window.location.reload()
    }
  }, [])

  return (
    <>
      <MetaDados />
      <div id="container-trabalho" className="container-trabalho">
        <div className="title">
          <h1 className="title">Jogo do Super Mario</h1>
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
          <br />
        </main>
      </div>
    </>
  );
}
