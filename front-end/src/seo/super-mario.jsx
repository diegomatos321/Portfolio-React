import React from 'react'
import {Helmet} from "react-helmet"
import metaImagem from "../uploads/imagens/super-mario.webp"

export default function SuperMarioSEO() {
  return (
    <Helmet>
      {/* SEO Geral */}
      <title>Super Mario | Desenvolvedor Diego Matos</title>
      <meta name="description" content="Avalie um dos trabalhos feitos por Diego Matos com seus alunos, a reprodução da primeira fase do Super Mario com o framework Phaser."/>
      <link rel="canonical" href="https://devdiegomatos.com.br/trabalhos/super-mario"/>
      <meta name="author" content="Diego Matos"/>
      <meta name="robots" content="index,follow"/>

      {/* Google+ / Schema.org */}
      <meta itemprop="name" content="Super Mario | Desenvolvedor Diego Matos"/>
      <meta itemprop="description" content="Avalie um dos trabalhos feitos por Diego Matos com seus alunos, a reprodução da primeira fase do Super Mario Bros com o framework Phaser."/>
      <meta itemprop="image" content={metaImagem}/>
      {/* <link href="https://plus.google.com/+SuaPagina" rel="publisher"/> */}

      {/* Open Graph Facebook */}
      <meta property="og:title" content="Super Mario | Desenvolvedor Diego Matos"/>
      <meta property="og:description" content="Avalie um dos trabalhos feitos por Diego Matos com seus alunos, a reprodução da primeira fase do Super Mario Bros com o framework Phaser."/>
      <meta property="og:url" content="https://devdiegomatos.com.br/trabalhos/super-mario"/>
      <meta property="og:site_name" content="Portfolio do desenvolvedor Diego Matos"/>
      <meta property="og:type" content="website"/>
      <meta property="og:image" content={metaImagem}/>
      <meta property="og:image:alt" content="Foto do jogo original super-mario"/>
      <meta property="og:locale" content="pt-BR"/>

      {/* Twitter */}
      <meta name="twitter:title" content="Super Mario | Desenvolvedor Diego Matos"/>
      <meta name="twitter:description" content="Avalie um dos trabalhos feitos por Diego Matos com seus alunos, a reprodução da primeira fase do Super Mario Bros com o framework Phaser."/>
      <meta name="twitter:url" content="https://devdiegomatos.com.br/trabalhos/super-mario"/>
      <meta name="twitter:card" content="summary"/>
      <meta name="twitter:image" content={metaImagem}/>
      {/* <meta name="twitter:creator" content="@estevanmaito"/> */}
      {/* <meta name="twitter:site" content="@empresa"/> */}
    </Helmet>
  )
}