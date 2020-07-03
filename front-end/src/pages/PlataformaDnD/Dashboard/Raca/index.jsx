import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Geral from "./Geral"
import Novo from "./Novo.jsx"
import Editar from "./Editar"

export default class index extends Component {
  render() {
    return (
      <BrowserRouter basename="/plataforma-dnd/dashboard/racas">
        <Switch>
          <Route exact path="/" component={Geral}></Route>
          <Route path="/novo" component={Novo}></Route>
          <Route path="/editar" component={Editar}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}
