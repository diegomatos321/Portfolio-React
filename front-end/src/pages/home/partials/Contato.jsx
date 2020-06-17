import React, { Component } from "react";
import {Link} from "react-router-dom";

export default class Contato extends Component {
  render() {
    return (
      <section id="contato" className="info-container">
        <div className="container-contato flex-container">
          <div className="info-item info-ico flex-item">
            <i className="fas fa-info-circle"></i>
          </div>
          <hr className="flex-item" />
          <div className="info-item sub-title flex-item">
            <h3>Converse diretamente comigo e tire suas dúvidas</h3>
          </div>
          <hr className="flex-item" />
          <div className="info-item title flex-item">
            <h2>Entre em Contato</h2>
          </div>
          <div className="info-item flex-container buttons">
            <Link to="/contato" className="btn">
              Contate-me
            </Link>
          </div>
        </div>
      </section>
    );
  }
}
