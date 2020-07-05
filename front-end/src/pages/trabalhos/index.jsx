import React, { Component } from 'react'

import MetaDados from "../../seo/trabalhos"
import "../../css/trabalhos.css"

import Trabalhos from "../../components/Trabalhos"
import FlappyBird from "./FlappyBird"
import JogoDaNave from "./JogoDaNave"
import SuperMario from "./SuperMario"
import JogoAsteroides from "./JogoAsteroides"

export default class Home extends Component {
  componentDidMount(){
    window.scrollTo(0, 0);
  }
  
  render() {
    const {nomeDoTrabalho} = this.props.match.params;

    if (nomeDoTrabalho === "flappybird") return <FlappyBird /> 
    else if (nomeDoTrabalho === "jogo-da-nave") return <JogoDaNave />
    else if (nomeDoTrabalho === "super-mario") return <SuperMario />
    else if (nomeDoTrabalho === "jogo-asteroides") return <JogoAsteroides />
    else return (
        <>
          <MetaDados/>
          <main>
            <h1 className="title">Meus Trabalhos</h1>
            <hr/>
            <section id="trabalhos">
              <div className="container">
                <Trabalhos/>
              </div>
            </section>
          </main>
        </>
      )
  }
}
