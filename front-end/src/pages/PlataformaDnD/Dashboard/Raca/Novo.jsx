import React, { Component } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default class Novo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      slug: "",
      tipo: "Raça",
    };
  }

  handleInputChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "text") {
      this.setState((prevState) => {
        let newState = {};
        if (name === "nome") {
          let sugestaoDeSlug = value.trim().replace(" ", "-").toLowerCase();
          newState.slug = sugestaoDeSlug;
        }
        newState[name] = value;
        return newState;
      });
    }
  };

  render() {
    return (
      <main>
        <h1>Adicionar nova Raça</h1>
        <hr />
        <aside>
          <div className="container-formulario-dnd">
            <form className="formulario-dnd">
              <fieldset>
                <legend>Dados da Raça</legend>
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
                  initialValue="<p>This is the initial content of the editor</p>"
                  init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                      "advlist autolink lists link image charmap print preview anchor",
                      "searchreplace visualblocks code fullscreen",
                      "insertdatetime media table paste code help wordcount",
                    ],
                    toolbar:
                      "undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help",
                  }}
                  onEditorChange={this.handleEditorChange}
                />
              </fieldset>
            </form>
          </div>
        </aside>
      </main>
    );
  }
}
