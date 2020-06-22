import React from "react";

export default function Aside() {
  return (
    <aside className="aside">
      <div className="tutorial">
        <h2 className="sub-title">Tutorial</h2>
        <hr />
        <p>Esse jogo é um clone do Super Mario, para jogá-lo é bem simples:</p>
        <ol className="items">
          <li>
            Use as setas para se mover <i className="fas fa-arrows-alt"></i>
          </li>
          <li>
            Os <strong>blocos surpresa</strong> dropam items{" "}
            <strong>aleatórios</strong>
          </li>
          <li>
            Cuidado com os <strong>Little Gomba</strong> e os{" "}
            <strong>Koopa Troopers</strong>
          </li>
          <li>Colete as moedas no menor tempo possível !</li>
          <li>Bom Jogo !</li>
        </ol>
      </div>
      <div className="finalidade">
        <h2 className="sub-title">Finalidade do Trabalho</h2>
        <hr />
        <p>
          Esse jogo teve como objetivo trabalhar com recursos mais avançados da
          ferramenta{" "}
          <a href="https://phaser.io/" rel="noopener noreferrer" target="_blank">
            Phaser
          </a>
          :
        </p>
        <ol className="items">
          <li>
            Renderização de sprites a partir da posição deles em um arquivo{" "}
            <strong>JSON</strong>.
          </li>
          <li>
            <i>Drop</i> aleatório dos items
          </li>
          <li>
            <i>Timer</i>
          </li>
        </ol>
      </div>
      <div className="warning">
        <p>
          Esse jogo <strong>não</strong> possui suporte para celular
        </p>
      </div>
      <div className="warning">
        <p>
          Recriada apenas a <strong>primeira fase</strong>
        </p>
      </div>
    </aside>
  );
}
