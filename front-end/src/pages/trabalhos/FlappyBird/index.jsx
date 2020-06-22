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
      type: "module"
    })
  };

  componentWillUnmount = () => {
    let flappybirdJS = document.getElementById("flappybirdJS");
    flappybirdJS.remove();
  };

  render() {
    return (
      <>
        <Helmet />
        <div className="title">
          <h1>FlappyBird</h1>
          <hr />
        </div>
        <div className="container-trabalhos">
          <Aside />
          <main className="pagina-apresentacao">
            <div id="jogo" className="jogo">
              <div id="jogo-container" className="jogo-container flappybird">
                <div id="formulario-container" className="formulario-container">
                  <form
                    id="game-formulario"
                    className="formulario"
                    onSubmit={this.submitHandler}
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

                <div id="game-screen" className="game-screen">
                  <canvas id="hud-layer"></canvas>
                  <canvas id="game-layer"></canvas>
                  <canvas id="ground-layer"></canvas>
                  <canvas id="pipeSouth-layer"></canvas>
                  <canvas id="background-layer"></canvas>
                </div>
                <div id="loading-txt" className="loading-txt"></div>
              </div>
            </div>
          </main>
        </div>
      </>
    );
  }
}
