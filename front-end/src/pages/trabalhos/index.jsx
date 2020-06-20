import React, { Component } from 'react'

import MetaDados from "../../seo/trabalhos"

import Trabalhos from "../../components/Trabalhos"
import FlappyBird from "./FlappyBird"
import JogoDaNave from "./JogoDaNave"
import SuperMario from "./SuperMario"

export default class Home extends Component {
  render() {
    const {params} = this.props.match;

    if (params === "flappybird") return <FlappyBird /> 
    else if (params === "jogo-da-nave") return <JogoDaNave />
    else if (params === "super-mario") return <SuperMario />
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
