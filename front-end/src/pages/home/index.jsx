import React, { Component } from 'react'

import MetaDados from "../../seo/home"

import Apresentacao from "./partials/Apresentacao"
import Sobre from "./partials/Sobre"
import Trabalhos from "./partials/TrabalhosHome"
import Contato from "./partials/Contato"

export default class Home extends Component {
  componentDidMount(){
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <MetaDados/>
        <main>
          <Apresentacao/>
          <Sobre/>
          <Trabalhos/>
          <Contato/>
        </main>
      </>
    )
  }
}
