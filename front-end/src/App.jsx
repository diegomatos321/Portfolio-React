import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from "./pages/home"
import Trabalhos from "./pages/trabalhos"
import Contato from "./pages/contato"

import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <BrowserRouter forceRefresh={true}>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/trabalhos" component={Trabalhos}/>
          <Route path="/trabalhos/:nomeDoTrabalho" component={Trabalhos}/>
          <Route path="/contato" component={Contato}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
