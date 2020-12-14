import { useEffect } from 'react'
import { useLocation } from "react-router-dom"

import MetaDados from "../../seo/home"

import Apresentacao from "./partials/Apresentacao"
import Sobre from "./partials/Sobre"
import TodosTrabalhos from "./partials/TrabalhosHome"
import Contato from "./partials/Contato"

export default function Home (){
  let { hash } = useLocation();

  useEffect(function scrollToComponentId() {
    if(hash){
      hash = hash.split("#")[1];
      let element = document.getElementById(hash);
      element.scrollIntoView();
      return
    }
    window.scrollTo(0, 0);
  }, [hash])
    return (
      <>
        <MetaDados/>
        <main>
          <Apresentacao/>
          <Sobre/>
          <TodosTrabalhos/>
          <Contato/>
        </main>
      </>
    )
}