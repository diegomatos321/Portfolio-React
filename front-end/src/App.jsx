import React from 'react';
import SlideRoutes from 'react-slide-routes';
import { useLocation, Switch, Route, Redirect } from 'react-router-dom';

import Home from "./pages/home"
import Trabalhos from "./pages/trabalhos"
import Contato from "./pages/contato"

import Header from "./components/Header"

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <Switch>
        <SlideRoutes location={location} duration={600}>
          <Route exact path="/" component={Home}/>
          <Route path="/trabalhos" component={Trabalhos}/>
          <Route path="/contato" component={Contato}/>
          <Route path="*" component={function handle404Pages() {
            return <Redirect to ="/"/>
          }}/>
        </SlideRoutes>
      </Switch>
    </>
  );
}

export default App;
