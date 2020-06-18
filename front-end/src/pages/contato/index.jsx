import React, { Component } from "react";

import MetaDados from "../../seo/contato"
import Mensagem from "../../components/Mensagem.jsx";

export default class Contato extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mensagem: {
        tipo: "",
        conteudo: [],
      },
    };
  }

  submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let body = {};
    formData.forEach((value, key) => {
      body[key] = value;
    });

    const response = await fetch("/contato", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    console.log(data)

    this.setState({ 
      mensagem: data.mensagem 
    });
  };

  render() {
    const { tipo, conteudo } = this.state.mensagem;
    const Mensagens = conteudo.map((value, index) => {
      if(tipo === "error"){
        return <Mensagem key={index} tipo={tipo} conteudo={value.msg} />;
      }
      return <Mensagem key={index} tipo={tipo} conteudo={value} />;
    });
    return (
      <>
        <MetaDados/>
        <main>
          {Mensagens}
          <section>
            <div className="container">
              <h1 className="title">Entre em contato</h1>
              <hr />
              <div className="container-formulario">
                <form className="formulario" onSubmit={this.submitHandler}>
                  <p>Digite seu nome:</p>
                  <input
                    type="text"
                    name="nome"
                    id="nome"
                    placeholder="Nome Completo"
                    autoFocus
                    minLength="5"
                    maxLength="50"
                    required
                  />
                  <p>Digite seu e-mail para contato:</p>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                  />
                  <p>Assunto:</p>
                  <input
                    type="text"
                    name="assunto"
                    id="assunto"
                    placeholder="Assunto"
                    minLength="5"
                    maxLength="25"
                    required
                  />
                  <p>Mensagem:</p>
                  <textarea
                    name="mensagem"
                    id="mensagem"
                    placeholder="Digite sua mensagem aqui"
                    cols="30"
                    rows="8"
                    maxLength="250"
                    minLength="10"
                    required
                  ></textarea>
                  <input type="submit" value="Enviar" className="btn" />
                </form>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
}
