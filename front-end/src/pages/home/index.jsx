import React, { Component } from 'react'

import MetaDados from "../../seo/home"

import Apresentacao from "./partials/Apresentacao"
import Sobre from "./partials/Sobre"
import TodosTrabalhos from "./partials/TrabalhosHome"
import Contato from "./partials/Contato"

import ScrollToTop from "../../utils/scrollToTop"

export default class Home extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    let {hash} = this.props.location;
    if(hash){
      hash = hash.split("#")[1];
      let element = document.getElementById(hash);
      element.scrollIntoView();
      return
    }
    ScrollToTop();
  }
  render() {
    return (
      <>
        <MetaDados/>
        <main className="main">
          <Apresentacao/>
          <Sobre/>
          <TodosTrabalhos/>
          <Contato/>
        </main>
      </>
    )
  }
}
