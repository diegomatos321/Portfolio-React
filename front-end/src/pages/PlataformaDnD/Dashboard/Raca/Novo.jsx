import React, { Component } from 'react'

export default class Novo extends Component {
  render() {
    return (
      <main>
         <h1>Adicionar nova Raça</h1>
         <hr/>
         <div className="container">
          <div className="container-formulario-imagem">
            <form className="formulario-imagem">
              <fieldset>
                <legend>Adicionar Imagem da Raça</legend>
                <input type="file" accept="image/jpeg, image/png, image/webp"/>
              </fieldset>
            </form>
          </div>
         </div>
      </main>
    )
  }
}
