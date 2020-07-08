import React, { Component } from 'react'
import ScrollToTop from "../../utils/scrollToTop"

export default class BuscarFicha extends Component {
  componentDidMount(){
    ScrollToTop();
  }

  render() {
    return (
      <main>
        <h1>Buscar Ficha</h1>
      </main>
    )
  }
}
