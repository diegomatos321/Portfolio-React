import React, { Component } from 'react'
import {Redirect} from "react-router-dom"

import MetaDados from "../../seo/trabalhos"
import "../../css/trabalhos.css"

import Trabalhos from "../../components/Trabalhos"
import FlappyBird from "./FlappyBird"
import JogoDaNave from "./JogoDaNave"
import SuperMario from "./SuperMario"

export default class Home extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    document.getElementById("header").scrollIntoView()
  }

  componentWillUnmount(){
    window.location.reload()
  }
  
  render() {
    const {nomeDoTrabalho} = this.props.match.params;
    const {state} = this.props.location
    if(state && state.refresh){
      window.location.reload()
      return <Redirect 
      to={{
        pathname: `/trabalhos/${nomeDoTrabalho}`,
        state: { refresh: false }
      }} />
    }

    if (nomeDoTrabalho === "flappybird") return <FlappyBird /> 
    else if (nomeDoTrabalho === "jogo-da-nave") return <JogoDaNave />
    else if (nomeDoTrabalho === "super-mario") return <SuperMario />
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
