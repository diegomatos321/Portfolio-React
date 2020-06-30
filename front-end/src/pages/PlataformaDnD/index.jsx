import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import PlataformaHome from "./Home"
import EditorFicha from "./EditorFicha.jsx"

export default function index() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/plataforma-dnd/" component={PlataformaHome} />
        <Route path="/plataforma-dnd/criar-ficha/" component={EditorFicha} />
      </Switch>
    </BrowserRouter>
  );
}
