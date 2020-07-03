import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class Home extends Component {
  render() {
    return (
      <main>
        <h1>Dashboard Plataforma Dnd</h1>
        <nav>
          <ul>
            <li><Link to="/classes">Classes</Link></li>
            <li><Link to="/racas">Raças</Link></li>
            <li><Link to="/magias">Magias</Link></li>
            <li><Link to="/antecedentes">Antecedentes</Link></li>
            <li><Link to="/outros">Outros</Link></li>
          </ul>
        </nav>
      </main>
    )
  }
}
