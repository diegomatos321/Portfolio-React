import React, { Component } from 'react'
import Apresentacao from "./partials/Apresentacao"
import Sobre from "./partials/Sobre"
import Trabalhos from "./partials/Trabalhos"
import Contato from "./partials/Contato"

export default class Home extends Component {
  render() {
    return (
      <main>
        <Apresentacao/>
        <Sobre/>
        <Trabalhos/>
        <Contato/>
      </main>
    )
  }
}
