import React, { Component } from 'react'

import MetaDados from "../../seo/trabalhos"
import TodosTrabalhos from "../../components/TodosTrabalhos"
import "../../css/trabalhos.css"

export default class trabalhos extends Component {
  componentDidMount(){
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <MetaDados/>
        <main>
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
