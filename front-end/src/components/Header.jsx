import React from "react";
import { Link } from "react-router-dom";
import Logo from "../uploads/imagens/logo.webp";

export default function Header() {
  return (
    <header id="header" className="header">
      <figure className="img logo">
        <Link to="/">
          <img src={Logo} alt="Logo do site" title="Logo do Site" />
        </Link>
      </figure>
      <nav className="main-nav">
        <ul className="nav">
          <li className="nav-item item-home">
            <Link to="/">Home</Link>
          </li>

          <li className="nav-item item-about">
            <a href="/#about">Sobre Mim</a>
          </li>

          <ul className="nav-item sub-nav item-trabalhos">
            <li>
              <Link to="/trabalhos">Trabalhos</Link>
            </li>
            <ul className="drop-down">
              <li className="sub-nav-item">
                <Link
                  to={{
                    pathname: "/trabalhos/flappybird",
                    state: {
                      refresh: true,
                    },
                  }}
                >
                  FlappyBird
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link
                  to={{
                    pathname: "/trabalhos/jogo-da-nave",
                    state: {
                      refresh: true,
                    },
                  }}
                >
                  Jogo da Nave
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link
                  to={{
                    pathname: "/trabalhos/super-mario",
                    state: {
                      refresh: true,
                    },
                  }}
                >
                  Super Mario
                </Link>
              </li>
            </ul>
          </ul>

          <li className="nav-item item-contato">
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
