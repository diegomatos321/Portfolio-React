import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Dashboard from "./Home"
import AdicionarClasse from "./Classe"
import AdicionarRaca from "./Raca"
import AdicionarMagia from "./Magia"
import AdicionarAntecedente from "./Antecedente"
import AdicionarOutros from "./Outros"

export default class index extends Component {
  render() {
    return (
      <BrowserRouter basename="/plataforma-dnd/dashboard">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/classes" component={AdicionarClasse} />
          <Route path="/racas" component={AdicionarRaca} />
          <Route path="/magias" component={AdicionarMagia} />
          <Route path="/antecedentes" component={AdicionarAntecedente} />
          <Route path="/outros/" component={AdicionarOutros} />
        </Switch>
      </BrowserRouter>
    )
  }
}
