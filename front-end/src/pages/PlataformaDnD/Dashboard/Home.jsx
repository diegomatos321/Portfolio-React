import React, { Component } from 'react'
import {Link} from "react-router-dom"
import ScrollToTop from "../../../utils/scrollToTop"

export default class Home extends Component {
  componentDidMount(){
    ScrollToTop();
  }

  render() {
    const url = window.location.pathname;
    console.log(url)
    return (
      <main>
        <h1>Dashboard Plataforma Dnd</h1>
        <nav>
          <ul>
            <li><Link to={`${url}/classe`}>Classes</Link></li>
            <li><Link to={`${url}/raca`}>Raças</Link></li>
            <li><Link to={`${url}/magia`}>Magias</Link></li>
            <li><Link to={`${url}/antecedente`}>Antecedentes</Link></li>
            <li><Link to={`${url}/outros`}>Outros</Link></li>
          </ul>
        </nav>
      </main>
    )
  }
}
