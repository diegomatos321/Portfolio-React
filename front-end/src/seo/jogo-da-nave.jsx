import React from 'react'
import {Helmet} from "react-helmet"
import metaImagem from "../uploads/imagens/jogo-da-nave.webp"

export default function JogoDaNaveSEO() {
  return (
    <Helmet>
      {/* SEO Geral */}
      <title>Jogo da Nave | Desenvolvedor Diego Matos</title>
      <meta name="description" content="Avalie esse trabalho feito por Diego Matos com seus alunos: O desenvolvimento, com o framework Phaser, de um jogo de nave onde o jogador assume o controle de um piloto perdido no espaço."/>
      <link rel="canonical" href="https://devdiegomatos.com.br/trabalhos/jogo-da-nave"/>
      <meta name="author" content="Diego Matos"/>
      <meta name="robots" content="index,follow"/>

      {/* Google+ / Schema.org */}
      <meta itemprop="name" content="Jogo da Nave | Desenvolvedor Diego Matos"/>
      <meta itemprop="description" content="Avalie esse trabalho feito por Diego Matos com seus alunos: O desenvolvimento, com o framework Phaser, de um jogo de nave onde o jogador assume o controle de um piloto perdido no espaço."/>
      <meta itemprop="image" content={metaImagem}/>
      {/* <link href="https://plus.google.com/+SuaPagina" rel="publisher"/> */}

      {/* Open Graph Facebook */}
      <meta property="og:title" content="Jogo da Nave | Desenvolvedor Diego Matos"/>
      <meta property="og:description" content="Avalie esse trabalho feito por Diego Matos com seus alunos: O desenvolvimento, com o framework Phaser, de um jogo de nave onde o jogador assume o controle de um piloto perdido no espaço."/>
      <meta property="og:url" content="https://devdiegomatos.com.br/trabalhos/jogo-da-nave"/>
      <meta property="og:site_name" content="Portfolio do desenvolvedor Diego Matos"/>
      <meta property="og:type" content="website"/>
      <meta property="og:image" content={metaImagem}/>
      <meta property="og:image:alt" content="Foto do Desenvolvedor Diego Matos"/>
      <meta property="og:locale" content="pt-BR"/>

      {/* Twitter */}
      <meta name="twitter:title" content="Jogo da Nave | Desenvolvedor Diego Matos"/>
      <meta name="twitter:description" content="Avalie esse trabalho feito por Diego Matos com seus alunos: O desenvolvimento, com o framework Phaser, de um jogo de nave onde o jogador assume o controle de um piloto perdido no espaço."/>
      <meta name="twitter:url" content="https://devdiegomatos.com.br/trabalhos/jogo-da-nave"/>
      <meta name="twitter:card" content="summary"/>
      <meta name="twitter:image" content={metaImagem}/>
      {/* <meta name="twitter:creator" content="@estevanmaito"/> */}
      {/* <meta name="twitter:site" content="@empresa"/> */}
    </Helmet>
  )
}