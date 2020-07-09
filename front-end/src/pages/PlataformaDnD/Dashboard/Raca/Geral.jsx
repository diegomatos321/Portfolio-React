import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class Geral extends Component {
  render() {
    const url = window.location.pathname;
    return (
      <main>
        <h1>Raças</h1>
        <form>
          <fieldset>
            <legend>Pesquisar</legend>
            <input type="search"/>
            <button>Buscar</button>
          </fieldset>
        </form>
          <Link to={`${url}/novo`}>Adicionar nova Raça</Link>
        <div>
          Aqui irá aparecer umas lista de todas as raças
        </div>
      </main>
    )
  }
}