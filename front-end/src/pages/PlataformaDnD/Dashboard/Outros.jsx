import React, { Component } from 'react'
import ScrollToTop from "../../../utils/scrollToTop"

export default class AdicionarOutros extends Component {
  componentDidMount(){
    ScrollToTop();
  }

  render() {
    return (
      <main>
        <h1>Adicionar Outros</h1>
      </main>
    )
  }
}
