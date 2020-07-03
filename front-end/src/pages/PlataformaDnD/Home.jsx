import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class Home extends Component {
  render() {
    return (
      <main>
        <h1>Plataforma Dungeons and Dragons 5<abbr title="Edição">Ed</abbr></h1>
        <section>
          <div>
            <h2>Crie, edite e compartilhe suas fichas de maneira fácil e intuitiva</h2>
            <p>A nossa plataforma tem o intuito de deixar a criação das fichas mais dinâmica, fácil e flexível.</p>
          </div>
        </section>
        <section>
          <div>
            <h2>As fichas podem ser públicas ou privadas !</h2>
            <p>Não há necessidade de realizar um cadastro, apenas use nossa ferramenta, entretanto, sua ficha ficará disponível no banco de dados público, então pedimos que voce coloque uma senha para proteger sua ficha ! Pois, dessa forma, voce poderá a qualquer momento realizar edições nela !</p>
            <p>Também há a opção criar fichas privadas, para isso é necessário um cadastro gratuito, elas não ficarão visíveis na busca, entretanto, ainda poderão ser compartilhadas pela <abbr title="Localizador Uniforme de Recursos">URL</abbr> !</p>
            <Link to="/criar-ficha">Criar Ficha</Link>
          </div>
        </section>
        <section>
          <div>
            <h2>Navegue por nosso banco de dados e veja as fichas de outras pessoas</h2>
            <p>As fichas criadas sem um cadastro estão disponíveis para todos, assim as outras pessoas poderão ganhar inspiração ou até contribuir com ideias para melhorar a ficha !</p>
            <Link to="/buscar-ficha">Buscar Ficha</Link>
          </div>
        </section>
        <section>
          <div>
            <h2>Estude as magias da 5<abbr title="Edição">ED</abbr> através de nossa plataforma</h2>
            <p>Quem nunca parou no meio de uma sessão para olhar as magias ? Confirmar como funciona e coisas do gênero ? Pensando nisso, disponibilizamos também um meio rápido e prático para visualizar suas magias !</p>
            <p>Caso encontre alguma falha, basta sinalizar aos administradores clicando no icone: </p>
            <Link to="/explorar/magias">Magias</Link>
          </div>
        </section>
        <section>
          <div>
            <h2>Com dúvidas sobre sua classe ou raça ?</h2>
            <p>Pretende explorar uma nova classe ou raça que nunca jogou ? Trazemos uma solução prática, basta selecionar e navegar entre elas !</p>
            <Link to="/explorar">Explorar</Link>
          </div>
        </section>
        <section>
          <div>
            <h2>Nossa plataforma é uma gigantesca API !</h2>
            <p>Interessado em fazer um site sobre <abbr title="Dungeons and Dragons 5º Edição">D&D 5Ed</abbr> ? Permitimos que outros servidores realizem requisições GET para nossos servidores e tenham acesso a determinados banco de dados, veja a lista: </p>
            <Link to="/documentacao">Documentação</Link>
          </div>
        </section>
      </main>
    )
  }
}
