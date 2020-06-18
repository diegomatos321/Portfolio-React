import React, { Component } from 'react'
import Trabalhos from "../../components/Trabalhos"

export default class Home extends Component {
  render() {
    return (
      <main>
        <h1 className="title">Meus Trabalhos</h1>
        <hr/>
        <section id="trabalhos">
          <div className="container">
            <Trabalhos/>
          </div>
        </section>
      </main>
    )
  }
}
