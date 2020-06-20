import React from "react";

export default function Aside() {
  return (
    <aside className="aside">
      <div className="tutorial">
        <h2 className="sub-title">Tutorial</h2>
        <hr />
        <p>Esse jogo é sobre um piloto perdido no espaço, ele precisa:</p>
        <ol className="items">
          <li>
            Desviar das <strong>naves inimigas</strong> e dos meteoros, use as{" "}
            <strong>setas</strong> do teclado para guiar a nave{" "}
            <i className="fas fa-arrows-alt"></i>.
          </li>
          <li>
            O piloto também pode <strong>atirar</strong>, pressione a tecla{" "}
            <strong>CTRL</strong> para isso !
          </li>
          <li>Bom Jogo !</li>
        </ol>
      </div>
      <div className="finalidade">
        <h2 className="sub-title">Finalidade do trabalho</h2>
        <hr />
        <p>
          Esse jogo foi desenvolvido com o <i>framework</i>{" "}
          <a
            href="https://phaser.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Phaser
          </a>
          , nele vemos tópicos mais avançados em relação ao{" "}
          <a href="/trabalhos/flappybird">flappybird</a>, como:
        </p>
        <ol className="items">
          <li>Carregamento prévio das imagens.</li>
          <li>Melhor uso dos áudios.</li>
          <li>
            Adicionar <strong>imortalidade</strong> temporária após a morte do
            jogador.
          </li>
          <li>
            Não há cena de <strong>Game Over</strong>, deixando o jogo mais{" "}
            <strong>dinâmico</strong>.
          </li>
          <li>
            Demonstração de diferentes formas de se desenvolver mecânicas de
            jogo.
          </li>
        </ol>
      </div>
      <div className="warning">
        <p>
          Esse jogo <strong>não</strong> possui suporte para celular
        </p>
      </div>
    </aside>
  );
}
