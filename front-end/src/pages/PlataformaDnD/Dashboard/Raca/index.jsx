import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom";

import Geral from "./Geral"
import Novo from "./Novo.jsx"
import Editar from "./Editar"

export default class index extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/plataforma-dnd/dashboard/raca" component={withRouter(Geral)}></Route>
          <Route path="/plataforma-dnd/dashboard/raca/novo" component={withRouter(Novo)}></Route>
          <Route path="/plataforma-dnd/dashboard/raca/editar" component={withRouter(Editar)}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}
