import React, { Component } from 'react'
import ScrollToTop from "../../../utils/scrollToTop"

export default class AdicionarMagia extends Component {
  componentDidMount(){
    ScrollToTop();
  }

  render() {
    return (
      <main>
        <h1>Adicionar Antecedente</h1>
      </main>
    )
  }
}
