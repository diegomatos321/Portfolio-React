import React, {Component} from 'react'
import {BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';

import "../../css/trabalhos.css"

import GeralTrabalhos from "./trabalhos"
import FlappyBird from "./FlappyBird"
import JogoDaNave from "./JogoDaNave"
import SuperMario from "./SuperMario"
import JogoAsteroides from "./JogoAsteroides"

export default class Home extends Component{
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/trabalhos" component={withRouter(GeralTrabalhos)}/>
          <Route exact path="/trabalhos/flappybird" component={withRouter(FlappyBird)}/>
          <Route exact path="/trabalhos/jogo-da-nave" component={withRouter(JogoDaNave)}/>
          <Route exact path="/trabalhos/super-mario" component={withRouter(SuperMario)}/>
          <Route exact path="/trabalhos/jogo-asteroides" component={withRouter(JogoAsteroides)}/>
        </Switch>
      </BrowserRouter>
    )
  }
}
