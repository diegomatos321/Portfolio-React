import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom";

import Dashboard from "./Home"
import AdicionarClasse from "./Classe"
import AdicionarRaca from "./Raca"
import AdicionarMagia from "./Magia"
import AdicionarAntecedente from "./Antecedente"
import AdicionarOutros from "./Outros"

export default class index extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/plataforma-dnd/dashboard" component={withRouter(Dashboard)} />
          <Route path="/plataforma-dnd/dashboard/classe" component={withRouter(AdicionarClasse)} />
          <Route path="/plataforma-dnd/dashboard/raca" component={withRouter(AdicionarRaca)} />
          <Route path="/plataforma-dnd/dashboard/magia" component={withRouter(AdicionarMagia)} />
          <Route path="/plataforma-dnd/dashboard/antecedente" component={withRouter(AdicionarAntecedente)} />
          <Route path="/plataforma-dnd/dashboard/outros" component={withRouter(AdicionarOutros)} />
        </Switch>
      </BrowserRouter>
    )
  }
}
