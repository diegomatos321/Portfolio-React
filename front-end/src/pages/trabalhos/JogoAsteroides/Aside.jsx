export default function aside() {
  return (
    <aside className="aside">
      <div className="tutorial">
        <h2 className="sub-title">Tutorial</h2>
        <hr />
        <p>Esse jogo é baseado no jogo <strong>Asteroides</strong> de 1979, para jogá-lo é bem simples:</p>
        <ol className="items">
          <li>
            Use a tecla <strong>W</strong> para <strong>acelerar</strong> a nave para frente.
          </li>
          <li>
            <strong>Esquive</strong> ou <strong>destrua</strong> os <strong>Asteroides</strong>
          </li>
          <li>
            Cuidado com sua vida ! Você tem apenas 3 chances !
          </li>
        </ol>
      </div>
      <div className="finalidade">
        <h2 className="sub-title">Finalidade do Trabalho</h2>
        <hr />
        <p>
          Esse jogo teve como objetivo ensinar <strong>JavaScript</strong> moderno aos alunos, de uma forma divertida e entuitiva. Além de colocar em prática os conceitos teóricos da matemática:
        </p>
        <ol className="items">
          <li>
            Uso de <strong>Git</strong> e <strong>GitHub</strong> para versionar nossos projetos.
          </li>
          <li>
            Noções Básicas de <strong>SEO</strong>.
          </li>
          <li>
            Do básico ao avançado com: classes, Objetos, Loops, Arrays,
            Strings...
          </li>
          <li>
            Programação orientada à objetos
          </li>

          <li>Melhores formatos de imagems e audios para a web.</li>
          <li>
            Como realizar o loading prévio das imagems por meio das
            funcionalidades do JavaScript.
          </li>
          <li>
            Uso do princípio <a href="https://pt.wikipedia.org/wiki/SOLID" rel="noopener noreferrer" target="_blank">SOLID</a>.
          </li>
          <li>Como melhorar a performance de nosso jogo através de uma <a href="https://en.wikipedia.org/wiki/Object_pool_pattern" rel="noopener noreferrer" target="_blank">Object Pool</a>.
          </li>
          <li>
            <strong>Noções de desenvolvimento</strong>, permitindo o aluno ser mais indepedente.
          </li>
          <li>
            Uso de <strong>Vetores</strong>.
          </li>
          <li>
            Uso do <strong>delta time</strong> para movimentar os objetos.
          </li>
          <li>
            Calcular a direção do mouse para o jogador "olhar".
          </li>
          <li>
            Rotacionar imagem.
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
