import React, { Component } from 'react'
import ScrollToTop from "../../../utils/scrollToTop"

export default class AdicionarClasse extends Component {
  componentDidMount(){
    ScrollToTop();
  }

  render() {
    return (
      <main>
        <h1>Adicionar Classe</h1>
      </main>
    )
  }
}
