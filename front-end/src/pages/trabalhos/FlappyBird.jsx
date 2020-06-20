import React, { Component } from "react";
import { Helmet } from "react-helmet";
// import Game from "../../js/jogos/flappybird";
import Mensagem from "../../components/Mensagem"

export default class FlappyBird extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasSubmited: false,
      mensagem: {
        tipo: "",
        conteudo: [],
      },
    };
  }

  componentDidMount(){
    // this.Game = new Game();
    // this.Game.CarregarArquivos();
  }

  submitHandler = async (e) => {
    e.preventDefault();
    if (this.state.hasSubmited) return;
    this.setState({ hasSubmited: true });
    const body = this.getDataFromForm(e);

    try {
      let response = await fetch("./flappybird", {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(body),
      });

      let data = await response.json();

      if (response.status === 400) {
        this.apresentarMensagensDeError(data);
        return;
      }

      // iniciarOJogo(data);
      window.dispatchEvent("startGame");
    } catch (error) {
      console.log(error);
    }
  };

  getDataFromForm = (form) => {
    const formData = new FormData(form.target);
    let body = {};
    formData.forEach((value, key) => {
      body[key] = value;
    });
    return body;
  };

  apresentarMensagensDeError = (data) => {
    this.setState({
      mensagem: data.mensagem,
    });
  };

  render() {
    const { tipo, conteudo } = this.state.mensagem;
    const Mensagens = conteudo.map((value, index) => {
      if (tipo === "error") {
        return <Mensagem key={index} tipo={tipo} conteudo={value.msg} />;
      }
      return <Mensagem key={index} tipo={tipo} conteudo={value} />;
    });

    return (
      <main>
        {Mensagens}
        <div class="title">
          <h1>FlappyBird</h1>
          <hr />
        </div>

        <div id="jogo" class="jogo">
          <div id="jogo-container" class="jogo-container flappybird">
            <div id="formulario-container" class="formulario-container hidden">
              <form
                id="game-formulario"
                class="formulario"
                onSubmit={this.submitHandler}
              >
                <h3>Digite um nickname</h3>
                <input
                  type="text"
                  name="nome"
                  placeholder="Digite um nickname"
                  id="nome"
                  minLength="3"
                  maxLength="10"
                  required
                />
                {/* <input
                  type="hidden"
                  name="_csrf"
                  value="<%= data.csfrToken %>"
                /> */}
                <input type="submit" class="btn" />
              </form>
            </div>

            <div id="game-screen" class="game-screen hidden">
              <canvas id="hud-layer"></canvas>
              <canvas id="game-layer"></canvas>
              <canvas id="ground-layer"></canvas>
              <canvas id="pipeSouth-layer"></canvas>
              <canvas id="background-layer"></canvas>
            </div>
            <div className="loading-txt"></div>
          </div>
        </div>
      </main>
    );
  }
}
