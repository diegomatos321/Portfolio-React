import React, { Component } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default class Novo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      slug: "",
      tipo: "Raça",
      descricao: "",
      idiomas: [],
      proficiencias: {
        ganha: [],
        escolhe: []
      }
    };
  }

  handleInputChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "text") {
      this.setState((prevState) => {
        let newState = {};
        if (name === "nome") {
          let sugestaoDeSlug = value.split(" ").join("-").toLowerCase();
          newState.slug = sugestaoDeSlug;
        }
        newState[name] = value;
        return newState;
      });
    }
  };

  handleEditorChange = (content, editor) => {
    this.setState({ descricao: content });
  };

  handleAccordion = (e) => {
    e.preventDefault();
    let butao = e.target;
    butao.classList.toggle("active");

    let panel = butao.nextElementSibling;
    panel.classList.toggle("panel-active");
  };

  handleAdicionarItem = (e) => {
    e.preventDefault();
    const formulario = e.target;
    const formData = new FormData(formulario);
    let body = {};
    formData.forEach((value, key) => {
      body[key] = value;
    });

    if (formulario.id === "formulario-idiomas") {
      this.setState((prevState) => {
        let idiomasAnteriores = prevState.idiomas.map((idioma) => idioma);
        let novoIdioma = body.idioma;
        idiomasAnteriores.push(novoIdioma);
        return {
          idiomas: idiomasAnteriores,
        };
      });
    }

    if(formulario.id === "formulario-proficiencias"){
      this.setState(prevState =>{
        let proficiencias = prevState.proficiencias;
        let opcoesAnteriores = proficiencias[body.opcao].map(opcao => opcao);
        let novaOpcao = {
          nome: body.nome,
          tipo: body.tipo
        }
        // opcoesAnteriores.push(novaOpcao);
        proficiencias[body.opcao] = opcoesAnteriores.push(novaOpcao);
        return {
          proficiencias
        }
      })
    }
  };

  render() {
    let { idiomas, proficiencias } = this.state;
    let idiomasComponents = idiomas.map((idioma) => {
      return (
        <div key={idioma} className="panel-item">
          <p>{idioma}</p>
          {/* <button className="accordion" onClick={this.handleAccordion}>{idioma.value}</button> */}
          {/* <div className="panel" >{idioma.descricao}</div> */}
        </div>
      );
    });

    let proficienciasComponents = proficiencias.ganha.map(proficiencia => {
      return (
        <div key={proficiencia.nome}>
          <button className="accordion">Ganha {proficiencia.nome}</button>
          <div className="panel">
            <p>Tipo: {proficiencia.tipo}</p>
          </div>
        </div>
      )
    })
    return (
      <div className="main plataforma-dashboard-container">
        <div className="title">
          <h1 className="title">Adicionar nova Raça</h1>
          <hr />
        </div>
        <aside className="aside">
          <div className="container-dados-personagem">
            <label htmlFor="nome">Nome: </label>
            <input
              id="nome"
              name="nome"
              placeholder="Ex: Alto Elfo"
              type="text"
              value={this.state.nome}
              onChange={this.handleInputChange}
            />
            <br />
            <label htmlFor="slug">Slug: </label>
            <input
              id="slug"
              name="slug"
              placeholder="Ex: anao-da-colina"
              type="text"
              value={this.state.slug}
              onChange={this.handleInputChange}
            />
            <br />
            <label htmlFor="raca">Raça: </label>
            <input
              readOnly
              id="raca"
              name="raca"
              type="text"
              value={this.state.tipo}
            />
            <br />
            <label htmlFor="descricao">Descrição: </label>
            <Editor
              initialValue="<p>Descreva a raça</p>"
              init={{
                height: 500,
                menubar: "file edit view insert format",
                plugins: [
                  "advlist autolink lists link charmap preview searchreplace visualblocks code fullscreen help wordcount autoresize",
                ],
                toolbar:
                  "undo redo | formatselect | bold italic backcolor | \
                          alignleft aligncenter alignright alignjustify | \
                          bullist numlist outdent indent | removeformat | help",
                max_height: 400,
              }}
              onEditorChange={this.handleEditorChange}
            />
            <div>
              <button className="accordion" onClick={this.handleAccordion}>
                Idiomas
              </button>
              <div className="panel idiomas">
                <form id="formulario-idiomas" onSubmit={this.handleAdicionarItem}>
                  <fieldset>
                    <legend>Idioma</legend>
                    <select name="idioma">
                      <option value="Comum">Comum</option>
                      <option value="Anão">Anão</option>
                      <option value="Elfo">Elfo</option>
                    </select>
                    <button>+</button>
                  </fieldset>
                </form>
                {idiomasComponents}
              </div>
            </div>
            
            <div>
              <button className="accordion" onClick={this.handleAccordion}>
                Proficiências
              </button>
              <div className="panel proficiencias">
                <form id="formulario-proficiencias" className="formulario-proficiencia" onSubmit={this.handleAdicionarItem}>
                  <fieldset>
                    <legend>Proficiências</legend>
                    <input
                      name="nome"
                      placeholder="Ex: Machados de Batalha"
                      type="text"
                    />
                    <br />

                    <label htmlFor="ganha">Ganha</label>
                    <input
                      id="ganha"
                      name="opcao"
                      type="radio"
                      value="ganha"
                    />

                    <label htmlFor="escolhe">Escolhe</label>
                    <input
                      id="escolhe"
                      name="opcao"
                      type="radio"
                      value="escolhe"
                    />
                    <br />
                    <label htmlFor="tipo">Tipo: </label>
                    <select name="tipo">
                      <option value="Arma">Arma</option>
                      <option value="Armadura">Armadura</option>
                      <option value="Ferramentas">Ferramentas</option>
                    </select>
                    <br/>
                    <button>+</button>
                  </fieldset>
                </form>
                {proficienciasComponents}
              </div>
            </div>

          </div>
        </aside>

        <main className="preview">
          <div>
            <h2>Preview</h2>
          </div>
        </main>
      </div>
    );
  }
}
