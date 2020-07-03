import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";

import PlataformaHome from "./Home"
import CriarFicha from "./CriarFicha"
import EditorFicha from "./EditorFicha"
import BuscarFicha from "./BuscarFicha"
import Adicionar from "./Dashboard"
import Explorar from "./Explorar"

export default class index extends Component {
  render(){
    return(
      <BrowserRouter basename="/plataforma-dnd">
        <Switch>
          <Route exact path="/" component={PlataformaHome} />
          <Route path="/criar-ficha" component={CriarFicha} />
          <Route path="/buscar-ficha" component={BuscarFicha} />
          <Route path="/editor-ficha/:id" component={EditorFicha} />
          <Route path="/explorar" component={Explorar} />
          <Route path="/explorar/:nome" component={Explorar} />
          <Route exact path="/dashboard" component={Adicionar} />
        </Switch>
      </BrowserRouter>
    );
  } 
}
