import React, { Component } from 'react'

import MetaDados from "../../seo/trabalhos"
import TodosTrabalhos from "../../components/TodosTrabalhos"
import ScrollToTop from "../../utils/scrollToTop"

export default class trabalhos extends Component {
  componentDidMount(){
    ScrollToTop();
  }

  render() {
    return (
      <>
        <MetaDados/>
        <main className="main">
          <h1 className="title">Meus Trabalhos</h1>
          <hr/>
          <section id="trabalhos">
            <div className="container">
              <TodosTrabalhos/>
            </div>
          </section>
        </main>
      </>
    )
  }
}
