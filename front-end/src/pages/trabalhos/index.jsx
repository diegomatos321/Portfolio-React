import { Route, useRouteMatch  } from 'react-router-dom';

import GeralTrabalhos from "./trabalhos"
import FlappyBird from "./FlappyBird"
import JogoDaNave from "./JogoDaNave"
import SuperMario from "./SuperMario"
import JogoAsteroides from "./JogoAsteroides"

export default function Trabalhos() {
  const { path } = useRouteMatch()
  return (
    <>
      <Route exact path={`${path}`} component={GeralTrabalhos} />
      <Route exact path={`${path}/flappybird`} component={FlappyBird} />
      <Route exact path={`${path}/jogo-da-nave`} component={JogoDaNave} />
      <Route exact path={`${path}/super-mario`} component={SuperMario} />
      <Route exact path={`${path}/jogo-asteroides`} component={JogoAsteroides} />
    </>
  )
}
