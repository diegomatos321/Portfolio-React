import React, { Component } from "react";
import {Link} from "react-router-dom";
import Masonry from "../utils/mansory-custom";

import flappyBirdImagem from "../uploads/imagens/flappybird.webp";
import jogoDaNaveImagem from "../uploads/imagens/jogo-da-nave.webp";
import superMarioImagem from "../uploads/imagens/super-mario.webp";

export default class Trabalhos extends Component {
  constructor(props){
    super(props);
    this.state = {
      imagensCarregadas: 0,
      totalDeImagens: 3,
    }
  }

  imageHandler = e =>{
    this.setState(prevState => {
      return {
        imagensCarregadas : prevState.imagensCarregadas + 1,
      }
    });
  }

  render() {
    const {imagensCarregadas, totalDeImagens} = this.state;
    if(imagensCarregadas === totalDeImagens){
      Masonry(document.getElementById("mansory-grid"))
    }
    return (
      <div id="mansory-grid" className="mansory-grid">
        <Link to="/trabalhos/flappybird" className="mansory-item">
          <article>
            <figure>
              <img
                className="img"
                id="flappybird"
                src={flappyBirdImagem}
                alt="Imagem do jogo FlappyBird"
                title="Imagem do jogo FlappyBird"
                onLoad={this.imageHandler}
              />
              <figcaption>
                <strong>Clone</strong> do <strong>FlappyBird</strong> com{" "}
                <strong>banco de dados</strong>, usando <strong>Node JS</strong>{" "}
                e <strong>MongoDB</strong> no BackEnd
              </figcaption>
            </figure>
          </article>
        </Link>

        <Link to="/trabalhos/jogo-da-nave" className="mansory-item">
          <article>
            <figure>
              <img
                className="img"
                id="jogoDaNave"
                src={jogoDaNaveImagem}
                alt="Imagem do jogo da Nave"
                title="Imagem do jogo da Nave"
                onLoad={this.imageHandler}
              />
              <figcaption>
                <strong>Jogo da Nave</strong> usando o framework{" "}
                <strong>Phaser</strong>
              </figcaption>
            </figure>
          </article>
        </Link>

        <Link to="/trabalhos/super-mario" className="mansory-item">
          <article>
            <figure>
              <img
                className="img"
                id="superMario"
                src={superMarioImagem}
                alt="Imagem do jogo do Super Mario Bros"
                title="Imagem do jogo do Super Mario Bros"
                onLoad={this.imageHandler}
              />
              <figcaption>
                <strong>Clone</strong> do <strong>Super Mario Bros</strong> {" "} 
                desenvolvido usando o framework <strong>Phaser</strong>
              </figcaption>
            </figure>
          </article>
        </Link>
      </div>
    );
  }
}
