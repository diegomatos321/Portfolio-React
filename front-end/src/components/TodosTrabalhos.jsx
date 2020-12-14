import React, { Component } from "react";
import {Link} from "react-router-dom";
import Masonry from "../utils/mansory-custom";

/* import flappyBirdImagem from "../uploads/imagens/flappybird.webp";
import jogoDaNaveImagem from "../uploads/imagens/jogo-da-nave.webp";
import superMarioImagem from "../uploads/imagens/super-mario.webp";
import jogoAsteroidesImagem from "../uploads/imagens/asteroides.webp";
 */

import { flappyBird, jogoDaNave, jogoAsteroides, superMario } from "../asset-pack.json"

export default class Trabalhos extends Component {
  constructor(props){
    super(props);
    this.state = {
      imagensCarregadas: 0,
      totalDeImagens: 4,
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
        <Link to= "/trabalhos/flappybird" className="mansory-item">
          <article>
            <figure>
              <source src={flappyBird.webp} type="image/webp"/>
              <img
                className="img"
                id="flappybird"
                src={flappyBird.png}
                alt="Imagem do jogo FlappyBird"
                title="Imagem do jogo FlappyBird"
                onLoad={this.imageHandler}
              />
              <figcaption>
                <strong>Clone</strong> do <strong>FlappyBird</strong> com <strong>banco de dados</strong>, usando <strong>Node JS</strong> e <strong>MongoDB</strong> no BackEnd.
              </figcaption>
            </figure>
          </article>
        </Link>

        <Link to="/trabalhos/jogo-da-nave" className="mansory-item">
          <article>
            <figure>
              <source src={jogoDaNave.webp} type="image/webp"/>
              <img
                className="img"
                id="jogoDaNave"
                src={jogoDaNave.png}
                alt="Imagem do jogo da Nave"
                title="Imagem do jogo da Nave"
                onLoad={this.imageHandler}
              />
              <figcaption>
                <strong>Jogo da Nave</strong> usando o framework <strong>Phaser</strong>.
              </figcaption>
            </figure>
          </article>
        </Link>
        <Link to="/trabalhos/super-mario" className="mansory-item">
          <article>
            <figure>
              <source src={superMario.webp} type="image/webp"/>
              <img
                className="img"
                id="superMario"
                src={superMario.png}
                alt="Imagem do jogo do Super Mario Bros"
                title="Imagem do jogo do Super Mario Bros"
                onLoad={this.imageHandler}
              />
              <figcaption>
                <strong>Clone</strong> do <strong>Super Mario Bros</strong> desenvolvido usando o framework <strong>Phaser</strong>.
              </figcaption>
            </figure>
          </article>
        </Link>
        <Link to="/trabalhos/jogo-asteroides" className="mansory-item">
          <article>
            <figure>
              <source src={jogoAsteroides.webp} type="image/webp"/>
              <img
                className="img"
                id="jogoAsteroides"
                src={jogoAsteroides.png}
                alt="Imagem do jogo asteroides"
                title="Imagem do jogo asteroides"
                onLoad={this.imageHandler}
              />
              <figcaption>
                <strong>Jogo Asteroides</strong> desenvolvido em JavaScript Puro.
              </figcaption>
            </figure>
          </article>
        </Link>
      </div>
    );
  }
}
