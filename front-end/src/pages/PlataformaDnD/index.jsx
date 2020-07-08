import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom";

import "../../css/plataforma-dnd.css"

import PlataformaHome from "./Home"
import CriarFicha from "./CriarFicha"
import EditorFicha from "./EditorFicha"
import BuscarFicha from "./BuscarFicha"
import Dashboard from "./Dashboard"
import Explorar from "./Explorar"

export default class index extends Component {
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/plataforma-dnd" component={withRouter(PlataformaHome)} />
          <Route path="/plataforma-dnd/criar-ficha" component={withRouter(CriarFicha)} />
          <Route path="/plataforma-dnd/buscar-ficha" component={withRouter(BuscarFicha)} />
          <Route path="/plataforma-dnd/editor-ficha/:id" component={withRouter(EditorFicha)} />
          <Route path="/plataforma-dnd/explorar" component={withRouter(Explorar)} />
          <Route path="/plataforma-dnd/explorar/:nome" component={withRouter(Explorar)} />
          <Route path="/plataforma-dnd/dashboard" component={withRouter(Dashboard)} />
        </Switch>
      </BrowserRouter>
    );
  } 
}
