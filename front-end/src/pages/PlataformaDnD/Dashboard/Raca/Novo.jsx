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
    console.log(e);
    const element = e.target;
    if (element.id === "adicionar-idioma") {
      this.setState((prevState) => {
        let idiomasAnteriores = prevState.idiomas.map((idioma) => idioma);
        let novoIdioma = element.previousElementSibling.value;
        idiomasAnteriores.push(novoIdioma);
        return {
          idiomas: idiomasAnteriores,
        };
      });
    }
  };

  render() {
    let { idiomas } = this.state;
    let idiomasComponents = idiomas.map((idioma) => {
      return (
        <div key={idioma} className="panel-item">
          {idioma}
          {/* <button className="accordion" onClick={this.handleAccordion}>{idioma.value}</button> */}
          {/* <div className="panel" >{idioma.descricao}</div> */}
        </div>
      );
    });
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
                    <input name="idiomas" placeholder="Ex: Comum" type="text" />
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
                <form className="formulario-proficiencia">
                  
                </form>
                <fieldset>
                  <legend>Proficiências</legend>
                  <input
                    name="proficiencia"
                    placeholder="Ex: Machados de Batalha"
                    type="text"
                  />
                  <br />

                  <label htmlFor="ganha">Ganha</label>
                  <input
                    id="ganha"
                    name="ganha-ou-escolhe"
                    type="radio"
                    value="ganha"
                  />

                  <label htmlFor="escolhe">Escolhe</label>
                  <input
                    id="escolhe"
                    name="ganha-ou-escolhe"
                    type="radio"
                    value="escolhe"
                  />
                  <br />
                  <button>+</button>
                </fieldset>
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
