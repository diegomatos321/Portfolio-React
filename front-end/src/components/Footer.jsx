import React from "react";

export default function Footer() {
  return (
    <footer className="footer flex-container">
      <div className="widget-area flex-item">
        <h3 className="widget-title">Redes Sociais</h3>
        <div className="widget-content">
          <div className="widget-item">
            <a href="# "rel="noopener noreferrer">
              <i className="fab fa-facebook-square"></i>
              <p className="font-size-small">Facebook</p>
            </a>
          </div>
          <div className="widget-item">
            <a href="# "rel="noopener noreferrer">
              <i className="fab fa-instagram-square"></i>
              <p className="font-size-small">Instagram</p>
            </a>
          </div>
          <div className="widget-item">
            <a href="https://github.com/diegomatos321 " rel="noopener noreferrer">
              <i className="fab fa-github-square"></i>
              <p className="font-size-small">GitHub</p>
            </a>
          </div>
        </div>
      </div>
      <div className="widget-area flex-item">
        <h3 className="widget-title">Entre em Contato</h3>
        <div className="widget-content">
          <div className="widget-item">
            <a href="mailto:diegomatos@devdiegomatos.com.br ">
              <i className="fas fa-envelope-square"></i>
              <p className="font-size-small">diegomatos@devdiegomatos.com.br</p>
            </a>
          </div>
          <div className="widget-item">
            <a href="tel:+5521995121978">
              <i className="fas fa-phone-square-alt"></i>
              <p className="font-size-small">Telefone: (21) 9 9512-1978</p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
